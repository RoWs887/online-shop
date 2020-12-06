import Vue from 'vue'
import Router from 'vue-router'

import ComCatalog from '../components/catalog/com-catalog'
import ComCart from '../components/cart/com-cart'

Vue.use(Router);

let router = new Router({
	routes: [
	{
		path: '/',
		name: 'catalog',
		component: ComCatalog
	},
	{
		path: '/cart',
		name: 'cart',
		component: ComCart,
		props: true
		}
	]
})

export default router;