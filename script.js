document.addEventListener('DOMContentLoaded', (event) => {
    const testimonials = [
        {
            text: "Scania Trans provided exceptional service. Their trucks are reliable and efficient!",
            client: "Ferid Rama, Costumer"
        },
        {
            text: "We have been partnering with Scania Trans for years. Outstanding performance and support!",
            client: "Bashkim Begu, Owner of ILIRA"
        },
        {
            text: "The best trucking company we've ever worked with. Highly recommended!",
            client: "Admir Hadzic, Bosniak Costumer"
        }
    ];

    let currentTestimonial = 0;
    const testimonialTextElement = document.getElementById('testimonial-text');
    const clientNameElement = document.getElementById('client-name');

    function typeText(text, element, callback) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 50);
            } else {
                callback();
            }
        }
        type();
    }

    function showTestimonial() {
        testimonialTextElement.innerHTML = '';
        clientNameElement.innerHTML = '';
        typeText(testimonials[currentTestimonial].text, testimonialTextElement, () => {
            typeText(testimonials[currentTestimonial].client, clientNameElement, () => {
                setTimeout(() => {
                    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                    showTestimonial();
                }, 3000); 
            });
        });
    }

    showTestimonial();
});

document.addEventListener('DOMContentLoaded', (event) => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            answer.style.display = answer.style.display === 'none' || answer.style.display === '' ? 'block' : 'none';
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Simple form validation
        if (name && email && subject && message) {
            // If all required fields are filled, show success message
            document.getElementById('form-message').innerHTML = '<p class="text-success">Thank you for your message! We will get back to you soon.</p>';

            // Here you can add your code to send the form data to the server or email

            // Reset the form fields
            form.reset();
        } else {
            // If any required fields are missing, show error message
            document.getElementById('form-message').innerHTML = '<p class="text-danger">Please fill in all required fields.</p>';
        }
    });
});
