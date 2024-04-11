import { useUsersStore } from '../store';

export const useUsers = () => {
	const usersStore = useUsersStore();

	const {
		getUsers,
		setUsersByFilters,
		nextPage,
		previousPage,
		gotToPage,
		deleteUser,
	} = usersStore;
	const { showedUsers, pages, currentPage, isLoading } =
		storeToRefs(usersStore);

	return {
		getUsers,
		setUsersByFilters,
		nextPage,
		previousPage,
		gotToPage,
		deleteUser,

		showedUsers,
		pages,
		currentPage,
		isLoading,
	};
};
