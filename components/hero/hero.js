// The hero class
import gsap from 'https://cdn.skypack.dev/gsap' // The GSAP library

// The hero class
export class Hero {
    constructor() {
        this.init() // Initialize the hero
    }

    async init() {
        try {
            // Load HTML
            const response = await fetch('/components/hero/hero.html') // Fetch the hero HTML
            if (!response.ok) throw new Error('Failed to load hero HTML') // Check if the response is ok
            const html = await response.text() // Get the HTML as text

            const heroElement = document.getElementById('hero') // Get the hero element
            if (heroElement) {
                heroElement.innerHTML = html // Set the hero element inner HTML to the fetched HTML
                this.initializeAnimations()
                this.addEventListeners()
            }
        } catch (error) {
            console.error('Error initializing hero:', error)
        }
    }
    
    initializeAnimations() {
        // Initial animation when the page loads
        gsap.from('.hero__title', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.5
        })

        // The hero description animation
        gsap.from('.hero__description', {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.8
        })

        gsap.from('.hero__cta', {
            y: 20,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 1.1
        })

        // The hero country selector animation
        gsap.from('.hero__country-selector', {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 1.4
        })

        // CTA button hover animation
        const cta = document.querySelector('.hero__cta')
        if (cta) {
            cta.addEventListener('mouseenter', () => {
                gsap.to(cta, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'power2.out'
                })
            })

            // The hero CTA button hover animation
            cta.addEventListener('mouseleave', () => {
                gsap.to(cta, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                })
            })
        }
    }

    // The hero event listeners
    addEventListeners() {
        const countrySelect = document.querySelector('.hero__select') // Get the country selector
        if (countrySelect) {
            countrySelect.addEventListener('sl-change', (e) => {
                this.handleCountrySelection(e.target.value) // Handle the country selection
            })
        }
    }

    // The hero country selection handler
    handleCountrySelection(country) {
        console.log('Selected country:', country)
        // Handle country selection - can be implemented based on requirements
    }
}