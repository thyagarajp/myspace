
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    let valid = true;

    // Validate name
    if (name === '') {
        document.getElementById('name-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('name-error').style.display = 'none';
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('email-error').style.display = 'none';
    }

    // Validate phone (optional field)
    const phonePattern = /^[0-9]{10}$/;
    if (phone !== '' && !phonePattern.test(phone)) {
        document.getElementById('phone-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('phone-error').style.display = 'none';
    }

    // Validate subject
    if (subject === '') {
        document.getElementById('subject-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('subject-error').style.display = 'none';
    }

    // Validate message
    if (message === '') {
        document.getElementById('message-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('message-error').style.display = 'none';
    }

    // If the form is valid, display success message
    if (valid) {
        document.getElementById('success-message').style.display = 'block';
        setTimeout(() => {
            document.getElementById('success-message').style.display = 'none';
            document.getElementById('contact-form').reset();
        }, 3000); // Hide message after 3 seconds
    }
}); 