import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Text from '../views/Text.vue'
import view from '../views/view.vue'
import zhuce from '../views/zhuce.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
	redirect:'/Home',
    
  },
  {
    path: '/Home',
    name: 'home',
  
    component: Home
  },
  {
	  path: '/zhuce',
	  name: 'zhuce',
	  component:zhuce
  },
  {
    path: '/about/:id',
    name: 'about',
	children:[
		{path:"text",
		name:'text',
		component:Text
		}
	],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:  About
  },
  {
	  path:'/view',
	  name:'view',
	  component: view
  }
]

const router = new VueRouter({
  routes
})

export default router
