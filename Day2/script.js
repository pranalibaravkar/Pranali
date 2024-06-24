document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
    let errorMessage = document.getElementById('login-error');
    
    // Clear previous error messa
    
    ge
    errorMessage.textContent = '';

    // Simple validation
    if (!validateEmail(email)) {
        errorMessage.textContent = 'Invalid email format';
        return;
    }
    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long';
        return;
    }

    // If validation passes
    alert('Login successful!');
});

document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    let errorMessage = document.getElementById('signup-error');
    
    // Clear previous error message
    errorMessage.textContent = '';

    // Simple validation
    if (!validateEmail(email)) {
        errorMessage.textContent = 'Invalid email format';
        return;
    }
    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long';
        return;
    }
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match';
        return;
    }

    // If validation passes
    alert('Signup successful!');
});

document.getElementById('login-show-password').addEventListener('change', function() {
    let passwordInput = document.getElementById('login-password');
    if (this.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});

document.getElementById('signup-show-password').addEventListener('change', function() {
    let passwordInput = document.getElementById('signup-password');
    let confirmPasswordInput = document.getElementById('confirm-password');
    if (this.checked) {
        passwordInput.type = 'text';
        confirmPasswordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
        confirmPasswordInput.type = 'password';
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
