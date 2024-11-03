// The experience class
export class Experience {
    constructor() { 
        this.init(); // Initialize the experience
    }

    async init() {
        try {
            const response = await fetch('/components/experience/experience.html'); // Fetch the experience HTML
            if (!response.ok) throw new Error('Failed to load experience HTML'); // Check if the response is ok
            const html = await response.text(); // Get the HTML as text

            const experienceElement = document.getElementById('experience'); // Get the experience element
            if (experienceElement) {
                experienceElement.innerHTML = html; // Set the experience element's inner HTML to the fetched HTML
                this.initializeAnimations(); // Initialize the animations
            }
        } catch (error) {
            console.error('Error initializing experience:', error);
        }
    }

    initializeAnimations() {
        // Animate title
        gsap.from('.experience__title', { 
            y: 30,
            opacity: 0,
            duration: 1, 
            ease: 'power3.out' // The animation ease
        });

        // Animate categories
        const categories = document.querySelectorAll('.experience__category'); // Get all categories
        // Animate each category
        categories.forEach((category, index) => { 
            gsap.from(category, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: 0.2 * index,
                ease: 'power3.out'
            });
        });

        // Animate job items
        const jobs = document.querySelectorAll('.experience__job-item'); // Get all jobs
        // Animate each job
        jobs.forEach((job, index) => { 
            gsap.from(job, {
                y: 20,
                opacity: 0,
                duration: 0.5,
                delay: 0.1 * index,
                ease: 'power2.out'
            });
        });
    }
} 