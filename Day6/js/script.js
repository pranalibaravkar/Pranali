

document.querySelector('.signup-form').addEventListener('submit', function(event) {
    
    event.preventDefault();

    
    var passwordInput = document.getElementById('password');
    if (passwordInput.value.length < 6) {
        alert('Password must be at least 6 characters long!');
        return;
    }

    
    alert('Sign up form submitted!');
    
});

