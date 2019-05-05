import Vue from 'vue'
import Router from 'vue-router'
import Inicio from "./views/Inicio";
import CrearPeticion from "./views/CrearPeticion";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio
    },
    {
      path: '/crear-peticion',
      name: 'crear-peticion',
      component: CrearPeticion
    }
  ]
})
