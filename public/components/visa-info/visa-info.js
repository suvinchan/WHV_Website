// The visa info class
export class VisaInfo {
    constructor() {
        this.currentSlide = 0; // The current slide
        this.isAnimating = false;
        this.init();
    }

    // The visa info initialization method
    async init() {
        try {
            const response = await fetch('/components/visa-info/visa-info.html'); // Fetch the visa info HTML
            if (!response.ok) throw new Error('Failed to load visa info HTML'); // Check if the response is ok
            const html = await response.text(); // Get the HTML as text

            const visaInfoElement = document.getElementById('visa-info'); // Get the visa info element
            if (visaInfoElement) {
                visaInfoElement.innerHTML = html; // Set the visa info element inner HTML to the fetched HTML
                this.initializeAnimations();
                this.setupEventListeners();
            }
        } catch (error) {
            console.error('Error initializing visa info:', error);
        }
    }


    // The visa info event listeners setup method
    setupEventListeners() {
        const nextButton = document.querySelector('.visa-info__next'); // Get the next button
        if (nextButton) {
            nextButton.addEventListener('click', () => this.handleNextSlide()); // Add an event listener to the next button
        }
    }

    // The visa info next slide handler method
    handleNextSlide() {
        if (this.isAnimating) return; // Check if the animation is already running

        const slides = document.querySelectorAll('.visa-info__slide'); // Get all the slides
        if (!slides.length) return; // Check if there are any slides    

        this.isAnimating = true; // Set the animation flag to true
        const currentSlide = slides[this.currentSlide]; // Get the current slide
        this.currentSlide = (this.currentSlide + 1) % slides.length; // Increment the current slide
        const nextSlide = slides[this.currentSlide]; // Get the next slide  

        // Animation sequence   
        const timeline = gsap.timeline({
            onComplete: () => {
                this.isAnimating = false; // Set the animation flag to false
                currentSlide.classList.remove('active'); // Remove the active class from the current slide
                nextSlide.classList.add('active'); // Add the active class to the next slide
                gsap.set(currentSlide, { clearProps: "all" }); // Clear the properties of the current slide
            }
        });

        // Set up next slide
        gsap.set(nextSlide, {
            x: '100%',
            opacity: 1,
            visibility: 'visible'
        });

        // Animate slides
        timeline
            .to(currentSlide, {
                x: '-100%',
                opacity: 0,
                duration: 0.5,
                ease: 'power2.inOut'
            })
            .to(nextSlide, {
                x: '0%',
                duration: 0.5,
                ease: 'power2.inOut'
            }, '-=0.5');
    }

    // The visa info animations initialization method
    initializeAnimations() {
        gsap.from('.visa-info__card', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        });
    }
} 