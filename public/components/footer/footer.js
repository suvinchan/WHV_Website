// The footer class
export class Footer {
    constructor() {
        this.init() // Initialize the footer    
    }

    // Initialize the footer
    async init() {
        try {
            // Load HTML
            const response = await fetch('/components/footer/footer.html') // Fetch the footer HTML
            if (!response.ok) throw new Error('Failed to load footer HTML') // Check if the response is ok
            const html = await response.text() // Get the HTML as text

            const footerElement = document.getElementById('footer')
            if (footerElement) {
                footerElement.innerHTML = html
                // this.initializeAnimations()
                // this.addEventListeners()
            }
        } catch (error) {
            console.error('Error initializing footer:', error)
        }
    }
}