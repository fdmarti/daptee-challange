import { Prodcuts } from '../../interface';

export const handleGetProducts = async (): Promise<Products[]> => {
	const config = useRuntimeConfig();
	const data = await $fetch(`${config.app.NUXT_API_ULR}/Products`);

	return data;
};