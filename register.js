function validateForm() {
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    // First Name validation
    const firstName = document.getElementById('firstName').value;
    if (firstName.length < 6 || !/^[a-zA-Z]+$/.test(firstName)) {
        document.getElementById('firstNameError').textContent = 'First Name should contain alphabets and be at least 6 characters long.';
        isValid = false;
    }

    // Last Name validation
    const lastName = document.getElementById('lastName').value;
    if (lastName === '') {
        document.getElementById('lastNameError').textContent = 'Last Name should not be empty.';
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('emailAddress').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email address.';
        isValid = false;
    }

    // Password validation
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password should be at least 6 characters long.';
        isValid = false;
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
    }

    // Address validation
    const address = document.getElementById('address').value;
    if (address === '') {
        document.getElementById('addressError').textContent = 'Address should not be empty.';
        isValid = false;
    }

    // Mobile Number validation
    const mobileNo = document.getElementById('mobileNo').value;
    if (!/^\d{10}$/.test(mobileNo)) {
        document.getElementById('mobileNoError').textContent = 'Mobile number should contain 10 digits only.';
        isValid = false;
    }

    // Gender validation
    const gender = document.getElementById('gender').value;
    if (gender !== 'Male' && gender !== 'Female') {
        document.getElementById('genderError').textContent = 'Gender should be either "Male" or "Female".';
        isValid = false;
    }

    if (isValid) {
        document.getElementById('registrationForm').submit();
    }
}
