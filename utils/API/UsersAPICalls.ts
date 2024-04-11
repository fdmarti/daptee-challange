import { User } from '../../interface';

export const handleGetUsersData = async (): Promise<User[]> => {
	const config = useRuntimeConfig();
	const API_URL = config.app.NUXT_API_ULR;

	const data = await $fetch(`${API_URL}/Users`);

	const formatData = data.map((user) => {
		const { password, ...res } = user;
		return res;
	});

	return formatData;
};

interface LoginFormData {
	username: string;
	password: string;
}

export const handleLogin = async (
	formData: LoginFormData,
): Promise<User | null> => {
	const config = useRuntimeConfig();
	const API_URL_LOGIN = config.app.NUXT_API_ULR_LOGIN;

	const data = await $fetch(`${API_URL_LOGIN}/contacts`);

	const { username, password } = formData;

	const userFound = data.find((user) => {
		if (user.username === username && user.password === password) {
			return user;
		}
	});

	return userFound;
};
