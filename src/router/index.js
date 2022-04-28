import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Plonq500 from '../views/Plonq500.vue'
import Device from '../views/Device.vue'
import Contact from '../views/Contact.vue'
import Wholesale from '../views/Wholesale.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/device',
      name: 'Device',
      component: Device
    },
    {
      path: '/plonq500',
      name: 'Plonq500',
      component: Plonq500
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/wholesale',
      name: 'Wholesale',
      component: Wholesale
    }
  ]
})

export default router
