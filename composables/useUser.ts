import { useUserStore } from '../store';

export const useUser = () => {
	const userStore = useUserStore();
	const { logIn, logOut } = userStore;
	const { user, isActive, isLoading } = storeToRefs(userStore);

	return {
		logIn,
		logOut,

		user,
		isActive,
		isLoading,
	};
};
