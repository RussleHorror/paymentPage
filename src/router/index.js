import Vue from 'vue'
import Router from 'vue-router'
import PaymentPage from '@/components/PaymentPage'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PaymentPage',
      component: PaymentPage
    }
  ]
})
