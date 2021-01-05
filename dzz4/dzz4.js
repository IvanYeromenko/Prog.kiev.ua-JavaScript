function userInformation(){
    var getLogin = document.querySelector('.login').value;
    var getPassword = document.querySelector('.password').value;
    var getEmail = document.querySelector('.email').value;
    var getBirthDate = document.querySelector('.birth').value;
    alert(`user = {
        login: "${getLogin}",
        pass: "${getPassword}",
        email: "${getEmail}",
        birthDate: "${getBirthDate}"
    }`);
}