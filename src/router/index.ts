import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Login from "../views/Login.vue"
import Countries from "../views/Countries.vue"

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/countries',
    name: 'Countries',
    component: Countries
  },
  {
    path: '/countries/{countryId}',
    name: 'Countries',
    component: Countries
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;