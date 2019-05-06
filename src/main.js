import Vue from 'vue'
import LoadScript from 'vue-plugin-load-script';
import Vuelidate from 'vuelidate'
import VueFormWizard from 'vue-form-wizard'
import VueSweetalert2 from 'vue-sweetalert2';
import * as VueGoogleMaps from 'vue2-google-maps'

//
import router from './router'
import App from "./App";

// Styles
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import '../public/css/theme/shards.css'
import '../public/css/styles.css'

// jQuery
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

// Google Maps
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDs2NEVFDDoBQcLlTQ6a_Z7zv_MMtTls_E',
    libraries: 'places',
  },
});


// SweetAlerts
const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674'
};
Vue.use(VueSweetalert2, options);

// Load JS Scripts
Vue.use(LoadScript);
Vue.loadScript("./js/theme/shards.min.js");
Vue.loadScript("./js/script.js");

// Form Validator
Vue.use(Vuelidate);

// Form wizards (Steps)
Vue.use(VueFormWizard);


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

