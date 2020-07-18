import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//import Bootstrap y BS CSS
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Usar Bootstrap Vue en el proyecto
Vue.use(BootstrapVue)
// Optional. Permite utilizar los íconos de bootstrap
Vue.use(IconsPlugin)

//iconos de font awesome para RRSS
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// poner el mismo nombre del ícono(s) importado(s) más arriba
library.add(faFacebook)
library.add(faTwitter)
library.add(faGithub)

// inicializa la componente de vue de font awesome
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
