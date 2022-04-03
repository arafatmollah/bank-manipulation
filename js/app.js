document.getElementById('submit-btn').addEventListener('click',function () {
    const inputEmail = document.getElementById('input-email');
    const emailValue = inputEmail.value;
    //console.log(emailValue);
    const inputPassword = document.getElementById('input-password');
    const passwordValue = inputPassword.value;
    //console.log(passwordValue);

    if (emailValue == 'arafatshuvo18@gmail.com' && passwordValue == 'arafatisawesome') {
        window.location.href = 'deposite.html';
    }
})