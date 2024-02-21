function validateForm() {
    var firstname = document.getElementById("firstname").value;
    var firstnameError = document.getElementById("firstnameError");
    firstnameError.innerHTML = "";
    if (!/^[A-Za-z]{1,20}$/.test(firstname)) {
        firstnameError.innerHTML = "Invalid First Name. It should contain only letters (max 20 characters).";
        return false;
    }

    var lastname = document.getElementById("lastname").value;
    var lastnameError = document.getElementById("lastnameError");
    lastnameError.innerHTML = "";
    if (!/^[A-Za-z]{1,20}$/.test(lastname)) {
        lastnameError.innerHTML = "Invalid Last Name. It should contain only letters (max 20 characters).";
        return false;
    }

    var email = document.getElementById("email").value;
    var emailError = document.getElementById("emailError");
    emailError.innerHTML = "";
    var emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailpattern.test(email)) {
        emailError.innerHTML = "Invalid Email Address.";
        return false;
    }

    var password = document.getElementById("password").value;
    var passwordError = document.getElementById("passwordError");
    passwordError.innerHTML = "";
    // You can add additional password requirements using regular expressions if needed
    if (password.length < 8) {
        passwordError.innerHTML = "Password must be at least 8 characters.";
        return false;
    }

    var confirmPassword = document.getElementById("confirmPassword").value;
    var confirmPasswordError = document.getElementById("confirmPasswordError");
    confirmPasswordError.innerHTML = "";
    if (confirmPassword !== password) {
        confirmPasswordError.innerHTML = "Passwords do not match.";
        return false;
    }

    return true;
}