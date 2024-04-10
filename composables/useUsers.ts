import { useUsersStore } from '../store';

export const useUsers = () => {
	const usersStore = useUsersStore();

	const { getUsers, setUsersByFilters, nextPage, previousPage, gotToPage } =
		usersStore;
	const { filteredUsers, pages, currentPage, isLoading } =
		storeToRefs(usersStore);

	return {
		getUsers,
		setUsersByFilters,
		nextPage,
		previousPage,
		gotToPage,

		filteredUsers,
		pages,
		currentPage,
		isLoading,
	};
};
