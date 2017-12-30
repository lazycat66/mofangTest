import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Page from '@/components/Page'
import Login from '@/components/account/Login'
import Register from '@/components/account/Register'

Vue.use(Router)

import store from '@/store/Store'
const route = new Router({
	mode: 'history',
	routes: [{
			path: '*',
			redirect: '/index'
		},
		{
			path: '/index',
			name: 'index',
			component: Index
		},
		{
			path: '/page',
			name: 'page',
			component: Page
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/reg',
			name: 'register',
			component: Register
		}
	]
});

export const getSubtitle = params => {
	return params.meta.parentPath || params.name
}

// setting title
route.beforeEach((to, from, next) => {
	store.state.login.subtitle = getSubtitle(to)
	store.state.table.tableSubtitle = ''
	document.title = to.meta.title || '省钱招';
	next()
});

export default route;