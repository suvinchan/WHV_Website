// The subscription class
export class Subscription {
    constructor() {
        this.init(); // Initialize the subscription
    }

    // The subscription initialization method
    async init() {
        try {
            const response = await fetch('/components/subscription/subscription.html'); // Fetch the subscription HTML
            if (!response.ok) throw new Error('Failed to load subscription HTML'); // Check if the response is ok
            const html = await response.text(); // Get the HTML as text

            const subscriptionElement = document.getElementById('subscription'); // Get the subscription element
            if (subscriptionElement) {
                subscriptionElement.innerHTML = html; // Set the subscription element inner HTML to the fetched HTML
                this.initializeForm();
                this.initializeAnimations();
            }
        } catch (error) {
            console.error('Error initializing subscription:', error);
        }
    }

    // The subscription form initialization method
    initializeForm() {
        const form = document.querySelector('.subscription__form'); // Get the subscription form
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent the default form submission
            // Add the form submission logic here
            const formData = new FormData(form); // Get the form data
            console.log('Form submitted:', Object.fromEntries(formData)); // Log the form data
        });
    }
    
    // The subscription animations initialization method
    initializeAnimations() {
        gsap.from('.subscription__title', {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });

        // The subscription container animation
        gsap.from('.subscription__container', {
            y: 30,
            opacity: 0,
            duration: 1,
            delay: 0.3,
            ease: 'power3.out'
        });

        // The subscription field animation
        gsap.from('.subscription__field', {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            delay: 0.5,
            ease: 'power3.out'
        });
    }
} 