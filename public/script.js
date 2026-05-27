// Form validation and submission handler
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
const submitBtn = document.getElementById('submitBtn');
const btnText = submitBtn.querySelector('.btn-text');
const btnLoader = document.getElementById('btnLoader');

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Clear error messages
function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => {
        el.classList.remove('show');
        el.textContent = '';
    });
}

// Show error for a field
function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + 'Error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

// Validate form fields
function validateForm() {
    clearErrors();
    let isValid = true;

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Name validation
    if (!name) {
        showError('name', 'Name is required');
        isValid = false;
    } else if (name.length < 2) {
        showError('name', 'Name must be at least 2 characters');
        isValid = false;
    }

    // Email validation
    if (!email) {
        showError('email', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }

    // Message validation
    if (!message) {
        showError('message', 'Message is required');
        isValid = false;
    } else if (message.length < 10) {
        showError('message', 'Message must be at least 10 characters');
        isValid = false;
    }

    return isValid;
}

// Handle form submission
async function handleSubmit(event) {
    event.preventDefault();

    // Validate form
    if (!validateForm()) {
        return;
    }

    // Show loading state
    submitBtn.disabled = true;
    btnText.classList.add('hidden');
    btnLoader.classList.remove('hidden');

    try {
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            message: document.getElementById('message').value.trim()
        };

        const response = await fetch('/api/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
            // Show success message
            contactForm.classList.add('hidden');
            successMessage.classList.remove('hidden');
            
            // Log submission
            console.log('Form submitted successfully:', data);
        } else {
            // Show error
            alert('Error: ' + (data.error || 'Failed to submit form'));
            console.error('Error:', data);
        }
    } catch (error) {
        console.error('Submission error:', error);
        alert('Error submitting form. Please try again.');
    } finally {
        // Reset button state
        submitBtn.disabled = false;
        btnText.classList.remove('hidden');
        btnLoader.classList.add('hidden');
    }
}

// Reset form and show form again
function resetForm() {
    contactForm.reset();
    clearErrors();
    contactForm.classList.remove('hidden');
    successMessage.classList.add('hidden');
    document.getElementById('name').focus();
}

// Real-time validation for better UX
document.getElementById('name').addEventListener('blur', function() {
    clearErrors();
    if (this.value.trim() && this.value.trim().length < 2) {
        showError('name', 'Name must be at least 2 characters');
    }
});

document.getElementById('email').addEventListener('blur', function() {
    clearErrors();
    if (this.value.trim() && !isValidEmail(this.value.trim())) {
        showError('email', 'Please enter a valid email address');
    }
});

document.getElementById('message').addEventListener('blur', function() {
    clearErrors();
    if (this.value.trim() && this.value.trim().length < 10) {
        showError('message', 'Message must be at least 10 characters');
    }
});

// Clear errors on input focus
document.querySelectorAll('.input, .textarea').forEach(field => {
    field.addEventListener('focus', clearErrors);
});
