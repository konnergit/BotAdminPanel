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
        login({ commit }, user) {
            return AuthService.login(user).then(
                user => {
                    commit('loginSuccess', user);
                    AuthService.getRolesSelf().then(
                        roles => {
                            commit('getRolesSuccess');
                            return Promise.resolve(roles);
                        },
                        error => {
                            return Promise.reject(error);
                        }
                        
                    );
                },
                error => {
                    commit('loginFailure');
                    return Promise.reject(error);
                }
            );
        },
        logout({ commit }) {
            AuthService.logout();
            commit('logout');
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
        },
        registerSuccess(state) {
            state.status.loggedIn = false;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        }
    }
};