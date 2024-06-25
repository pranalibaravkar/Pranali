document.getElementById('contact-form').addEventListener('submit', function(event) {
    const phoneInput = document.getElementById('phone');
    const phonePattern = /^\+?[1-9]\d{1,14}$/;

    if (!phonePattern.test(phoneInput.value)) {
        alert('Please enter a valid phone number.');
        event.preventDefault();
    }
});