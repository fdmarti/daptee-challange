import { Users } from '../interface';
import { useInterface } from '../composables';

export const useUsersStore = defineStore('users', {
	state: () => ({
		users: [] as Users[],
		filteredUsers: [] as Users[],

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

			const usersFiltered = this.users.filter((user) => {
				const { name, email, username } = user;

				if (
					name.toLowerCase().includes(filter) ||
					email.toLowerCase().includes(filter) ||
					username.toLowerCase().includes(filter)
				) {
					return user;
				}
			});

			this.pages = Math.ceil(usersFiltered.length / 10);
			this.filteredUsers = usersFiltered;
			this.loadUsersPerPage();
		},

		loadUsersPerPage() {
			const startIndex = (this.currentPage - 1) * this.usersPerPage;
			const endIndex = startIndex + this.usersPerPage;

			console.log(startIndex,endIndex)

			this.filteredUsers = this.users.slice(startIndex, endIndex);
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
