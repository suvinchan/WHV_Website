import { Header } from './components/header/header.js'
import { Footer } from './components/footer/footer.js'
import { Hero } from './components/hero/hero.js'
import { VisaInfo } from './components/visa-info/visa-info.js'
import { VisaSteps } from './components/visa-steps/visa-steps.js'
import { Experience } from './components/experience/experience.js'
import { Work } from './components/work/work.js'    
import { Subscription } from './components/subscription/subscription.js'
document.addEventListener('DOMContentLoaded', () => {
    new Header()
    new Hero()
    new VisaInfo()
    new VisaSteps()
    new Experience();
    new Work();
    new Subscription();
    new Footer()
})