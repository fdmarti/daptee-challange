import { User } from '../interface';
import { useInterface } from '../composables';

export const useUserStore = defineStore('user', {
	state: () => ({
		user: {} as User,
		isActive: false as boolean,
	}),

	actions: {
		async logIn(formData) {
			const { username, password } = formData;

			//! Here the API is called

			try {
				if (username !== 'Daptee' && password !== 'Daptee2024') {
					const { setMessage } = useInterface();
					setMessage('Wrong Credentials', 'error');
					return false;
				}

				this.user.username = username;
				this.isActive = true;

				const cookie = useCookie('user', { user: username, isActive : this.isActive });
				return true;
			} catch (error) {
				const { setMessage } = useInterface();
				setMessage(error, 'error');
			}
		},
	},
});
