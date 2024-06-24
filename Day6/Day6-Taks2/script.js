document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validatePassword();
});

function validatePassword() {
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('passwordError');
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!regex.test(password)) {
        errorElement.textContent = 'Password must be at least 8 characters long and contain at least one letter and one number.';
    } else {
        errorElement.textContent = '';
        document.getElementById('signupForm').submit();
    }
}
