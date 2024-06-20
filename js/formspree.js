document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formResponse = document.getElementById('form-response');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);

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
                form.reset();
            } else {
                response.json().then(data => {
                    if (data.errors) {
                        formResponse.style.display = 'block';
                        formResponse.textContent = data.errors.map(error => error.message).join(', ');
                        console.error('Form submission errors:', data.errors);
                    } else {
                        formResponse.style.display = 'block';
                        formResponse.textContent = 'Oops! There was a problem submitting your form.';
                        console.error('Unknown error:', data);
                    }
                }).catch(error => {
                    formResponse.style.display = 'block';
                    formResponse.textContent = 'Oops! There was a problem submitting your form.';
                    console.error('Error parsing response:', error);
                });
            }
        }).catch(error => {
            formResponse.style.display = 'block';
            formResponse.textContent = 'Oops! There was a problem submitting your form.';
            console.error('Fetch error:', error);
        });
    });

    // Modal handling code
    const modal = document.getElementById("contactModal");
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.getElementById("closeModal");

    openModalBtn.addEventListener('click', () => {
        modal.style.display = "block";
    });

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});