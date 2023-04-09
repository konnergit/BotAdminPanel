import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://localhost:7090/api/';

class UserService {

    createUser(data) {
        return axios.post(API_URL + 'auth/user', data, { headers: authHeader() });
    }

    getRolesUser(data) {
        return axios.get(API_URL + 'roles/user', { params: data, headers: authHeader() });
    }

    getRolesAvailable() {
        return axios.get(API_URL + 'roles/availiableroles', { headers: authHeader() });
    }

    addRoleUser(data) {
        return axios.put(API_URL + 'roles/user', data, { headers: authHeader() });
    }

    addRoleAdmin(data) {
        return axios.put(API_URL + 'roles/admin', data, { headers: authHeader() });
    }

    getServiceFields(serviceName) {
        return axios.get(API_URL + 'service/fields/' + serviceName, { headers: authHeader() });
    }

    addServiceData(data) {
        return axios.post(API_URL + 'Service/data', data, { headers: authHeader() })
        .then(
            (response) => {
                console.log(response.data);
            }
        );
    }

    getServiceData(data, pageSize, pageNumber) {
        return axios.post(API_URL + 'service/data/' + pageSize + ',' + pageNumber, data, { headers: authHeader() });
    }

    getServiceSize(data) {
        return axios.get(API_URL + 'service/size', { params: data, headers: authHeader() });
    }

    editServiceData(data) {
        return axios.patch(API_URL + 'service/data', data, { headers: authHeader() });
    }

    deleteServiceData(data) {
        return axios.delete(API_URL + 'service/data', { data: data, headers: authHeader() });
    }
}

export default new UserService();