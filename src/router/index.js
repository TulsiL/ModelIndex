import Vue from 'vue'
import Router from 'vue-router'
import EventsDemo from '@/components/EventsDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EventsDemo',
      component: EventsDemo
    }
  ]
})
