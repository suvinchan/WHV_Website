// The visa steps class
export class VisaSteps {
    constructor() {
        this.init(); // The visa steps initialization method
    }

    // The visa steps initialization method
    async init() {
        try {
            const response = await fetch('/components/visa-steps/visa-steps.html'); // Fetch the visa steps HTML
            if (!response.ok) throw new Error('Failed to load visa steps HTML'); // Check if the response is ok
            const html = await response.text(); // Get the HTML as text

            const visaStepsElement = document.getElementById('visa-steps'); // Get the visa steps element
            if (visaStepsElement) {
                visaStepsElement.innerHTML = html; // Set the visa steps element inner HTML to the fetched HTML
                this.initializeInteractions(); // Initialize the interactions
                this.initializeAnimations(); // Initialize the animations
            }
        } catch (error) {
            console.error('Error initializing visa steps:', error);
        }
    }

    // The visa steps interactions initialization method
    initializeInteractions() {
        const headers = document.querySelectorAll('.visa-steps__header'); // Get all the headers
        
        headers.forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling; // Get the content
                const toggle = header.querySelector('.visa-steps__toggle'); // Get the toggle
                
                content.classList.toggle('active');
                toggle.classList.toggle('active');
            });
        });
    }

    // The visa steps animations initialization method
    initializeAnimations() {
        const items = document.querySelectorAll('.visa-steps__item'); // Get all the items
        
        // Animate the title
        gsap.from('.visa-steps__title', {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });

        // Animate the items
        items.forEach((item, index) => {
            gsap.from(item, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: 0.2 * index,
                ease: 'power3.out'
            });
        });
    }
}