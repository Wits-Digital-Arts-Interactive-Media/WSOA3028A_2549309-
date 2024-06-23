
//Form to appear when contact button clicked, API HERE//
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formResponse = document.getElementById('form-response');

    // Function to handle form submission
    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        const formData = new FormData(form); // Create FormData object from form

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                formResponse.style.display = 'block';
                formResponse.textContent = 'Thank you for your message! I will get back to you soon.';
                form.reset(); // Reset the form after successful submission
            } else {
                response.json().then(data => {
                    if (data.errors) {
                        formResponse.style.display = 'block';
                        formResponse.textContent = data.errors.map(error => error.message).join(', ');
                    } else {
                        formResponse.style.display = 'block';
                        formResponse.textContent = 'Oops! There was a problem submitting your form.';
                    }
                }).catch(() => {
                    formResponse.style.display = 'block';
                    formResponse.textContent = 'Oops! There was a problem submitting your form.';
                });
            }
        }).catch(() => {
            formResponse.style.display = 'block';
            formResponse.textContent = 'Oops! There was a problem submitting your form.';
        });
    };

    // Function to set up modal handlers
    const setupModalHandlers = () => {
        const modal = document.getElementById("contactModal");
        const openModalBtn = document.getElementById("openModal");
        const closeModalBtn = document.getElementById("closeModal");

        openModalBtn.addEventListener('click', () => {
            modal.style.display = "block"; // Show modal when open button is clicked
        });

        closeModalBtn.addEventListener('click', () => {
            modal.style.display = "none"; // Hide modal when close button is clicked
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = "none"; // Hide modal when clicking outside of it
            }
        });
    };

    // Attach event listeners
    form.addEventListener('submit', handleFormSubmit); // Handle form submission
    setupModalHandlers(); // Set up modal open/close functionality
});
