import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://localhost:7090/api/';


class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'Auth/login', {
                username: user.username,
                password: user.password
            })
            .then(response => {
                if (response.data.loginResponse.token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                    localStorage.setItem('username', JSON.stringify(user.username));
                }

                return { data:response.data, username:user.username };
            });
    }

    getRolesSelf() {
        return axios
            .get(API_URL + 'Roles/myRoles', { headers: authHeader() })
            .then(response => { 
                localStorage.setItem('roles', JSON.stringify(response.data));
                //console.log(response);
                return response.data;
            });
    }

    getTechRolesSelf() {
        return axios
            .get(API_URL + 'Roles/myTechRoles', { headers: authHeader() })
            .then(response => { 
                localStorage.setItem('techRoles', JSON.stringify(response.data));
                //console.log(response);
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('roles');
        localStorage.removeItem('techRoles');
        
    }

    register(user) {
        return axios.post(API_URL + 'signup', {
            username: user.username,
            email: user.email,
            password: user.password
        });
    }
}

export default new AuthService();