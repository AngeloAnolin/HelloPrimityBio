import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloPrimityBio from '@/components/HelloPrimityBio'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/HelloWorld',
			name: 'HelloWorld',
			component: HelloWorld
		},
		{
			path: '/',
			name: 'HelloPrimityBio',
			component: HelloPrimityBio
		}
	]
})
