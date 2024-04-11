import { useStorage } from '@vueuse/core';

const defineNuxtRouteMiddleware = (toNext: any) => {
	if (process.client) {
		const userState = useStorage('user-daptee-store');

		if (!userState.value) {
			return navigateTo('/login');
		} 

		const user = JSON.parse(userState.value);
		const { username } = user;

		if (!username) {
			return navigateTo('/login');
		}
	}
};

export default defineNuxtRouteMiddleware;
