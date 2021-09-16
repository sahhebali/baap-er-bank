document.getElementById('sobmit-login').addEventListener('click', function () {
    // grt user email
    const emailFiled = document.getElementById('user-email');
    const userEmail = emailFiled.value;

    // grt user password
    const passwordfiled = document.getElementById('user-password');
    const userPassword = passwordfiled.value;

    // chek email & password
    if (userEmail == 'sontan@bapp.com' && userPassword == 'secret') {
        window.location.href = 'bangking.html';
    }
})