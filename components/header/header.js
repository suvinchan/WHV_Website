import gsap from 'https://cdn.skypack.dev/gsap' // Import GSAP

// The header class
export class Header {
    constructor() {
        this.init()
    }
    // Initialize the header
    async init() {
        try {
            // Load HTML
            const response = await fetch('/components/header/header.html') // Fetch the header HTML
            if (!response.ok) throw new Error('Failed to load header HTML') // Check if the response is ok
            const html = await response.text() // Get the HTML as text

            const headerElement = document.getElementById('header') // Get the header element
            if (headerElement) {
                headerElement.innerHTML = html // Set the header element's inner HTML to the fetched HTML
                this.initializeAnimations() // Initialize the animations
                this.addEventListeners() // Add event listeners
            }
        } catch (error) {
            console.error('Error initializing header:', error)
        }
    }
    initializeAnimations() {
        // Get all interactive elements(nav links, get started button, search input, and menu button)
        const navLinks = document.querySelectorAll('.header__nav-link') 
        const getStartedBtn = document.querySelector('.header__get-started')
        const searchInput = document.querySelector('.header__search-input')
        const menuButton = document.querySelector('.header__menu-button')

        // Nav links hover animation
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                gsap.to(link, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'power2.out',
                    color: '#007AFF'
                })
            })

            // Nav links leave animation
            link.addEventListener('mouseleave', () => {
                gsap.to(link, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out',
                    color: '#333'
                })
            })
        })

        // Get Started button hover animation
        if (getStartedBtn) {
            getStartedBtn.addEventListener('mouseenter', () => {
                gsap.to(getStartedBtn, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'power2.out',
                    backgroundColor: '#333'
                })
            })
            // Get Started button leave animation
            getStartedBtn.addEventListener('mouseleave', () => {
                gsap.to(getStartedBtn, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out',
                    backgroundColor: '#000'
                })
            })
        }

        // Menu button hover animation
        if (menuButton) {
            menuButton.addEventListener('mouseenter', () => {
                gsap.to(menuButton, {
                    scale: 1.1,
                    duration: 0.3,
                    ease: 'power2.out'
                })
            })

            // Menu button leave animation
            menuButton.addEventListener('mouseleave', () => {
                gsap.to(menuButton, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                })
            })
        }

        // Search input focus animation
        if (searchInput) {
            searchInput.addEventListener('focus', () => {
                gsap.to(searchInput, {
                    width: '220px',
                    duration: 0.3,
                    ease: 'power2.out',
                    backgroundColor: '#fff'
                })
            })

            // Search input blur animation
            searchInput.addEventListener('blur', () => {
                gsap.to(searchInput, {
                    width: '200px',
                    duration: 0.3,
                    ease: 'power2.out',
                    backgroundColor: '#f5f5f5'
                })
            })
        }
    }
    addEventListeners() {
        const menuButton = document.querySelector('.header__menu-button') 
        const searchInput = document.querySelector('.header__search-input')

        menuButton?.addEventListener('click', () => {
            this.toggleMobileMenu()
        })

        searchInput?.addEventListener('input', (e) => {
            this.handleSearch(e.target.value)
        })
    }

    toggleMobileMenu() {
        // Implement mobile menu toggle functionality
        console.log('Toggle mobile menu')
    }

    handleSearch(query) {
        // Implement search functionality
        console.log('Search query:', query)
    }
}