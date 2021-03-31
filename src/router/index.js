import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/404.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/:catchAll(.*)',
		name: '404 - Not Found',
		component: NotFound
	}
	// Сниму шапку перед теми, кто сможет сделать норманые 404, я вот не смогла
]

let router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router