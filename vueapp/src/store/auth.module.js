import AuthService from '../services/auth.service';

const user = JSON.parse(localStorage.getItem('user'));
const username = JSON.parse(localStorage.getItem('username'));
const roles = JSON.parse(localStorage.getItem('roles'));
const techRoles = JSON.parse(localStorage.getItem('techRoles'));
const initialState = user
    ? { status: { loggedIn: true }, user, username, roles, techRoles }
    : { status: { loggedIn: false }, user: null, username: null, roles: null, techRoles: null };

export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ commit, dispatch }, user) {
            return AuthService.login(user).then(
                (data) => {
                    commit('loginSuccess', data.data);
                    commit('setUsername', data.username);
                    return data.data
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
                            return roles;
                        } else {
                            return Promise.resolve(roles);
                        }
                    },
                    error => {
                        console.log(error);
                        return Promise.reject(error);
                    }             
                )
            ).then (
                () => AuthService.getTechRolesSelf().then(
                       techRoles => {
                           commit('getTechRolesSuccess', techRoles);
                           //console.log(roles.length);
                            return Promise.resolve();
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
        // register({ commit }, user) {
        //     return AuthService.register(user).then(
        //         response => {
        //             commit('registerSuccess');
        //             return Promise.resolve(response.data);
        //         },
        //         error => {
        //             commit('registerFailure');
        //             return Promise.reject(error);
        //         }
        //     );
        // }
    },
    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },
        setUsername(state, username) {
            state.username = username;
        },
        getRolesSuccess(state, roles) {      
            state.roles = roles;
        },
        getTechRolesSuccess(state, techRoles) {      
            state.techRoles = techRoles;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
            state.roles = null;
            state.techRoles = null;
            state.username = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
            state.roles = null;
            state.techRoles = null;
            state.username = null;
        },
        // registerSuccess(state) {
        //     state.status.loggedIn = false;
        // },
        // registerFailure(state) {
        //     state.status.loggedIn = false;
        // }
    }
};