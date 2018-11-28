import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import JobInfo from './views/JobInfo.vue'
import JobInfoOption from './views/JobInfoOption.vue'
import JobInfoLog from './views/JobInfoLog.vue'
import JobList from './views/JobsList.vue'
import UserList from './views/UserList.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/jobs',
      name: 'jobslist',
      component: JobList
    },
    {
      path: '/jobs/:id',
      component: JobInfo,
      children: [
        {
          path: 'option',
          component: JobInfoOption
        },
        {
          path: 'log',
          component: JobInfoLog
        }
      ]
    },
    {
      path: '/users',
      component: UserList
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
