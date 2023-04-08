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
                }

                return response.data;
            });
    }

    getRolesSelf() {
        return axios
            .get(API_URL + 'Roles/myRoles', { headers: authHeader() })
            .then(response => { 
                localStorage.setItem('roles', JSON.stringify(response.data));
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
        
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