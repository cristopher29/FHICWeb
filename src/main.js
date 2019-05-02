import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoadScript from 'vue-plugin-load-script';
import Vuelidate from 'vuelidate'
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import '../public/css/theme/shards.min.css'
import '../public/css/styles.css'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDs2NEVFDDoBQcLlTQ6a_Z7zv_MMtTls_E',
    libraries: 'places',
  },
});
const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674'
};
Vue.use(VueSweetalert2, options);
Vue.use(LoadScript);
Vue.use(Vuelidate);
Vue.use(VueFormWizard);

Vue.config.productionTip = false;
Vue.loadScript("../public/js/shards.min.js");
new Vue({
  render: h => h(App),
}).$mount('#app');