function submitted() {
    console.log('hi from the function');
    let email_field = document.getElementById('email');
    let password_field =document.getElementById('password');
    let email = email_field.value;
    let password = password_field.value;
    let p_alert = document.getElementById('password-alert');
    let e_alert = document.getElementById('email-alert');

    resetStyles();

    console.log(email);

    if (isEmpty(email)) {
        showErrorMessage(e_alert, email_field, "Please Enter Your Email");
    } else if (!validEmail(email)) {
        showErrorMessage(e_alert, email_field, "Please Enter A valid Email");
    }

    if (isEmpty(password)) {
        showErrorMessage(p_alert, password_field, "Please Enter Your Password");
    } else if (password.length < 8) {
        showErrorMessage(p_alert, password_field, "Password Should Countain at Least 8 Charecters");
    } else if (!hasUpperCase(password)) {
        showErrorMessage(p_alert, password_field, "Password Should Countain at Least 1 Capital Case Charecter");
    } else if (!hasLowerCase(password)) {
        showErrorMessage(p_alert, password_field, "Password Should Countain at Least 1 Lower Case Charecter");
    } else if (!hasDigit(password)) {
        showErrorMessage(p_alert, password_field, "Password Should Countain at Least 1 Digit")
    } else if (!hasSpecialChar(password)) {
        showErrorMessage(p_alert, password_field, "Password Should Countain at Least 1 Special Character")
    }
}

function resetStyles() {
    document.getElementById('email-alert').innerHTML = "";
    document.getElementById('password-alert').innerHTML = "";
    document.getElementById('email').style.border = "1px solid black";
    document.getElementById('password').style.border = "1px solid black";

}

function showErrorMessage(alert_el, input_el, message) {
    alert_el.innerHTML = message;
    input_el.style.border = "1px solid red";
}

function isEmpty(str) {
    return str.trim() === '';
}

function validEmail(email){
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(email);
}

function hasUpperCase(str) {
    return /[A-Z]/.test(str);
}

function hasLowerCase(str) {
    return /[a-z]/.test(str);
}

function hasDigit(str) {
    return /\d/.test(str);
}

function hasSpecialChar(str) {
    return /[!@#$%^&*(),.?":{}|<>]/.test(str);
}
