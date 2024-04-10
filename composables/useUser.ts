import { useUserStore } from '../store';

export const useUser = () => {
	const userStore = useUserStore();
	const { logIn } = userStore;
	const { user, isActive } = storeToRefs(userStore);

	return {
		logIn,

		user,
		isActive,
	};
};
