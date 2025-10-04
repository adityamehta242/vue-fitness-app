import { createApp } from 'vue'
import './style.css'
import './fanta.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faFire } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'

// Add both icons to library
library.add(faCheck, faFire , faGithub)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
