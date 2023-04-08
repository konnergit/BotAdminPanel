export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.loginResponse.token) {
        //console.log(user.loginResponse.token);
        return { Authorization: 'Bearer ' + user.loginResponse.token };
    } else {
        return {};
    }
}