// The work class
export class Work {
    constructor() {
        this.init() // The work initialization method
    }

    // The work initialization method
    async init() {
        try {
            const response = await fetch('/components/work/work.html') // Fetch the work HTML
            if (!response.ok) throw new Error('Failed to load work HTML') // Check if the response is ok
            const html = await response.text() // Get the HTML as text

            const workElement = document.getElementById('work') // Get the work element
            if (workElement) {
                workElement.innerHTML = html // Set the work element inner HTML to the fetched HTML
                this.initializeAnimations()
                this.initializeEventListeners()
            }
        } catch (error) {
            console.error('Error initializing work section:', error)
        }
    }

    // The work animations initialization method
    initializeAnimations() {
        // Animate the title
        gsap.from('.work__title', {
            y: -30,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        })

        // Animate the search
        gsap.from('.work__search', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: 0.3,
            ease: 'power3.out'
        })

        // Animate the grid
        gsap.from('.work__grid', {
            opacity: 0,
            duration: 0.8,
            delay: 0.6,
            ease: 'power3.out'
        })

        // Animate the job cards
        gsap.from('.job-card', {
            x: -30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            delay: 0.8,
            ease: 'power3.out'
        })
    }

    // The work event listeners initialization method
        initializeEventListeners() {
        const jobCards = document.querySelectorAll('.job-card') // Get all the job cards
        jobCards.forEach(card => {
            card.addEventListener('click', () => {
                jobCards.forEach(c => c.classList.remove('active')) // Remove the active class from all job cards
                card.classList.add('active') // Add the active class to the clicked job card

                // Animate the details panel
                gsap.from('.work__job-details', {
                    x: 30,
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power3.out'
                })
            })
        })

        const workToggle = document.querySelector('.work__toggle') // Get the work toggle   
        const listView = document.querySelector('.work__list-view') // Get the list view
        const mapView = document.querySelector('.work__map-view') // Get the map view

        workToggle.addEventListener('sl-change', (event) => {
            const isChecked = event.target.checked
            
            if (isChecked) {
                // Animate transition to map view   
                gsap.to(listView, {
                    opacity: 0,
                    duration: 0.3,
                    onComplete: () => {
                        listView.classList.add('hidden')
                        mapView.classList.remove('hidden')
                        gsap.to(mapView, {
                            opacity: 1,
                            duration: 0.3
                        })
                    }
                })
            } else {
                // Animate transition to list view
                gsap.to(mapView, {
                    opacity: 0,
                    duration: 0.3,
                    onComplete: () => {
                        mapView.classList.add('hidden')
                        listView.classList.remove('hidden')
                        gsap.to(listView, {
                            opacity: 1,
                            duration: 0.3
                        })
                    }
                })
            }
        })
    }
} 