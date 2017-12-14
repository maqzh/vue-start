import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'

import {page404, page403, page500} from './error'


Vue.use(Router)

const router = new Router({
  routes: [
  	//添加路由
  	{
  		path: '/',
  		name: '首页',
  		component: resolve => { 
	    	require(['@/layout/Main.vue'], resolve) 
	    }
  	},
    page403,
    page500,
    page404
  ]
})

router.beforeEach((to, from, next) => {
    next()
})

router.afterEach(() => {
    window.scrollTo(0, 0)
})

export default router
