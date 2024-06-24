document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('booking-form');
    const contactForm = document.getElementById('contact-form');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const guestName = document.getElementById('guest-name').value;
            const guestEmail = document.getElementById('guest-email').value;
            const roomType = document.getElementById('room-type').value;
            const checkInDate = document.getElementById('check-in-date').value;
            const checkOutDate = document.getElementById('check-out-date').value;

            if (validateForm(guestName, guestEmail, roomType, checkInDate, checkOutDate)) {
                alert('Booking form submitted successfully!');
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const contactName = document.getElementById('contact-name').value;
            const contactEmail = document.getElementById('contact-email').value;
            const contactSubject = document.getElementById('contact-subject').value;
            const contactMessage = document.getElementById('contact-message').value;

            if (validateForm(contactName, contactEmail, contactSubject, contactMessage)) {
                alert('Contact form submitted successfully!');
            }
        });
    }

    function validateForm(...fields) {
        for (let field of fields) {
            if (!field.trim()) {
                alert('All fields are required!');
                return false;
            }
        }
        return true;
    }
});
