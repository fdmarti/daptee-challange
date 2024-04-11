import { useStorage } from '@vueuse/core';

import { User } from '../interface';
import { handleAlerts, handleLogin } from '../utils';

export const useUserStore = defineStore('user', {
	state: () => ({
		user: {} as User,
		isLoading: false as boolean,
	}),

	actions: {
		async logIn(formData) {
			this.isLoading = true;

			try {
				const userFound = await handleLogin(formData);

				if (!userFound) {
					const { setMessage } = handleAlerts();
					setMessage('Wrong Credentials', 'error');
					return false;
				}

				this.user = userFound;
				const { id, password, ...rest } = userFound;
				const userState = useStorage('user-daptee-store', rest);

				this.isLoading = false;
				return true;
			} catch (error) {
				const { setMessage } = handleAlerts();
				setMessage(error, 'error');
				this.isLoading = false;
			}
		},

		async logOut() {
			const userState = useStorage('user-daptee-store');
			userState.value = null;
			return true;
		},
	},
});
