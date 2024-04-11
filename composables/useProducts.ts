import { useProductStore } from '../store';
export const useProducts = () => {
	const productStore = useProductStore();

	const {
		getProducts,
		setProductsByFilters,
		nextPage,
		previousPage,
		gotToPage,
		deleteProduct,
	} = productStore;
	const { showedProducts, pages, currentPage, isLoading } =
		storeToRefs(productStore);

	return {
		getProducts,
		setProductsByFilters,
		nextPage,
		previousPage,
		gotToPage,
		deleteProduct,

		showedProducts,
		pages,
		currentPage,
		isLoading,
	};
};
