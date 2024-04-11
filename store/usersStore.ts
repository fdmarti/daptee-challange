import { User } from '../interface';
import { handleAlerts, handleGetUsersData } from '../utils';

export const useUsersStore = defineStore('users', {
	state: () => ({
		users: [] as User[],
		filteredUsers: [] as User[],
		showedUsers: [] as User[],
		valueFilter: '' as string,

		pages: 1 as number,
		currentPage: 1 as number,
		usersPerPage: 10 as number,
		isLoading: false as boolean,
	}),

	actions: {
		async getUsers(): Promise<User[]> {
			this.isLoading = true;

			try {
				this.users = await handleGetUsersData();
				await this.setUsersByFilters();

				this.isLoading = false;
			} catch (error) {
				const { setMessage } = handleAlerts();
				setMessage('Failed to load', 'error');
				this.isLoading = false;
			}
		},

		setUsersByFilters(filter: string = ''): void {
			const lowerCaseFilterWord = filter.toLowerCase();
			this.valueFilter = lowerCaseFilterWord;

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

		deleteUser(id: string): void {
			this.users = this.users.filter((user) => {
				if (user.id !== id) return user;
			});
			const { setMessage } = handleAlerts();
			setMessage('User deleted', 'success');
			this.setUsersByFilters(this.valueFilter);
		},

		loadUsersPerPage(): void {
			const startIndex = (this.currentPage - 1) * this.usersPerPage;
			const endIndex = startIndex + this.usersPerPage;

			this.showedUsers = this.filteredUsers.slice(startIndex, endIndex);
		},

		nextPage(): void {
			if (this.currentPage + 1 > this.pages) return;
			this.currentPage++;
			this.loadUsersPerPage();
		},

		previousPage(): void {
			if (this.currentPage === 1) return;
			this.currentPage--;
			this.loadUsersPerPage();
		},

		gotToPage(page: number): void {
			this.currentPage = page;
			this.loadUsersPerPage();
		},
	},
});
