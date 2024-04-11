/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./app.vue',
	],
	theme: {
		extend: {},
	},
	plugins: [],
	safelist: [
		'bg-red-500',
		'bg-green-500',
		'bg-teal-500',
		'bg-amber-500',
		'bg-blue-500',
		'text-cyan-600',
		'bg-zinc-700',
	],
};
