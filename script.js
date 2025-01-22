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
