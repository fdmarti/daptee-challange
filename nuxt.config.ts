import { resolve } from 'path';

export default defineNuxtConfig({
	devtools: { enabled: true },
	alias: {
		'@': resolve(__dirname, '/'),
	},
	css: ['./assets/css/main.css'],
	modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@vueuse/nuxt'],
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
	},
	runtimeConfig: {
		app: {
			NUXT_API_ULR: process.env.NUXT_API_ULR,
			NUXT_API_ULR_LOGIN: process.env.NUXT_API_ULR_LOGIN,
		},
	},
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],
});
