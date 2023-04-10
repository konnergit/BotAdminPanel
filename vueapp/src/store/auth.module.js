import AuthService from '../services/auth.service';

const user = JSON.parse(localStorage.getItem('user'));
const roles = JSON.parse(localStorage.getItem('roles'));
const initialState = user
    ? { status: { loggedIn: true }, user, roles }
    : { status: { loggedIn: false }, user: null, roles: null };

export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ commit, dispatch }, user) {
            return AuthService.login(user).then(
                user => {
                    commit('loginSuccess', user);
                    return user
                },
                error => {
                    commit('loginFailure');
                    return Promise.reject(error);
                }
            ).then (
             () => AuthService.getRolesSelf().then(
                    roles => {
                        commit('getRolesSuccess', roles);
                        //console.log(roles.length);
                        if (roles.length === 1) {
                            dispatch('chooseRole', 0, { root: true });
                            return Promise.resolve();
                        } else {
                            return Promise.resolve(roles);
                        }
                    },
                    error => {
                        console.log(error);
                        return Promise.reject(error);
                    }
                    
                )
            );
        },
        logout({ commit, dispatch }) {
            AuthService.logout();
            commit('logout');
            dispatch({type: 'clearWorkingData'}, { root: true });
        },
        register({ commit }, user) {
            return AuthService.register(user).then(
                response => {
                    commit('registerSuccess');
                    return Promise.resolve(response.data);
                },
                error => {
                    commit('registerFailure');
                    return Promise.reject(error);
                }
            );
        }
    },
    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },
        getRolesSuccess(state, roles) {      
            state.roles = roles;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
            state.roles = null;
        },
        registerSuccess(state) {
            state.status.loggedIn = false;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        }
    }
};