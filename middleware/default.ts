import { useStorage } from '@vueuse/core';

const defineNuxtRouteMiddleware = (toNext: any) => {
	if (process.client) {
		const userState = useStorage('user-daptee-store');

		if (userState.value) {
			return navigateTo('/');
		}
	}
};

export default defineNuxtRouteMiddleware;
