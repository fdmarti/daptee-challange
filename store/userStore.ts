import { User } from '../interface';
import { useInterface } from '../composables';
import { useStorage } from '@vueuse/core';

export const useUserStore = defineStore('user', {
	state: () => ({
		user: {} as User,
		isLoading: false as boolean,
	}),

	actions: {
		async logIn(formData) {
			this.isLoading = true;
			const { username, password } = formData;

			try {
				const config = useRuntimeConfig();
				const data = await $fetch(`${config.app.NUXT_API_ULR_LOGIN}/contacts`);

				const userFound = data.find((user) => {
					if (user.username === username && user.password === password) {
						return user;
					}
				});

				if (!userFound) {
					const { setMessage } = useInterface();
					setMessage('Wrong Credentials', 'error');
					return false;
				}

				this.user = userFound;

				const { id, createdAt, ...rest } = userFound;
				const userState = useStorage('user-daptee-store', rest);

				this.isLoading = false;
				return true;
			} catch (error) {
				const { setMessage } = useInterface();
				setMessage(error, 'error');
			}
		},

		async logOut() {
			const userState = useStorage('user-daptee-store');
			userState.value = null;
			return true;
		},
	},
});
