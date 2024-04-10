import { resolve } from 'path';

export default defineNuxtConfig({
	devtools: { enabled: true },
	alias: {
		'@': resolve(__dirname, '/'),
	},
	css: ['./assets/css/main.css'],
	modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
	},
	runtimeConfig: {
		app: {
			NUXT_API_ULR: process.env.NUXT_API_ULR,
		},
	},
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],
});
