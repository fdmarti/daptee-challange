import { Users } from '../interface';
import { useInterface } from '../composables';

export const useUsersStore = defineStore('users', {
	state: () => ({
		users: [] as Users[],
		filteredUsers: [] as Users[],
		showedUsers: [] as Users[],
		valueFilter: '' as string,

		pages: 1 as number,
		currentPage: 1 as number,
		usersPerPage: 10 as number,
		isLoading: false as boolean,
	}),

	actions: {
		async getUsers() {
			this.isLoading = true;

			try {
				const config = useRuntimeConfig();

				const data = await $fetch(`${config.app.NUXT_API_ULR}/Users`);
				this.users = data;
				await this.setUsersByFilters();

				this.isLoading = false;
			} catch (error) {
				const { setMessage } = useInterface();
				setMessage('Failed to load', 'error');
				this.isLoading = false;
			}
		},

		setUsersByFilters(filter: string = '') {
			const lowerCaseFilterWord = filter.toLowerCase();
			this.valueFilter = lowerCaseFilterWord

			const usersFiltered = this.users.filter((user) => {
				const { name, email, username } = user;

				if (
					name.toLowerCase().includes(lowerCaseFilterWord) ||
					email.toLowerCase().includes(lowerCaseFilterWord) ||
					username.toLowerCase().includes(lowerCaseFilterWord)
				) {
					return user;
				}
			});

			this.pages = Math.ceil(usersFiltered.length / 10);
			this.filteredUsers = usersFiltered;
			this.loadUsersPerPage();
		},

		deleteUser(id: string) {
			this.users = this.users.filter((user) => {
				if (user.id !== id) return user;
			});
			const { setMessage } = useInterface();
			setMessage('User deleted', 'success');
			this.setUsersByFilters(this.valueFilter);
		},

		loadUsersPerPage() {
			const startIndex = (this.currentPage - 1) * this.usersPerPage;
			const endIndex = startIndex + this.usersPerPage;

			this.showedUsers = this.filteredUsers.slice(startIndex, endIndex);
		},

		nextPage() {
			if (this.currentPage + 1 > this.pages) return;
			this.currentPage++;
			this.loadUsersPerPage();
		},

		previousPage() {
			if (this.currentPage === 1) return;
			this.currentPage--;
			this.loadUsersPerPage();
		},

		gotToPage(page: number) {
			this.currentPage = page;
			this.loadUsersPerPage();
		},
	},
});
