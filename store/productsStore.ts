import { Products } from '../interface';
import { useInterface } from '../composables';

export const useProductStore = defineStore('products', {
	state: () => ({
		products: [] as Products[],
		filteredProducts: [] as Products[],
		showedProducts: [] as Products[],
		valueFilter: '' as string,

		pages: 1 as number,
		currentPage: 1 as number,
		ProductsPerPage: 10 as number,
		isLoading: false as boolean,
	}),

	actions: {
		async getProducts() {
			this.isLoading = true;

			try {
				const config = useRuntimeConfig();

				const data = await $fetch(`${config.app.NUXT_API_ULR}/Products`);
				this.Products = data;
				await this.setProductsByFilters();

				this.isLoading = false;
			} catch (error) {
				const { setMessage } = useInterface();
				setMessage('Failed to load', 'error');
				this.isLoading = false;
			}
		},

		setProductsByFilters(filter: string = '') {
			const lowerCaseFilterWord = filter.toLowerCase();
			this.valueFilter = lowerCaseFilterWord;

			const ProductsFiltered = this.Products.filter((product) => {
				const { name, creator, email } = product;

				if (
					name.toLowerCase().includes(lowerCaseFilterWord) ||
					creator.toLowerCase().includes(lowerCaseFilterWord) ||
					email.toLowerCase().includes(lowerCaseFilterWord)
				) {
					return product;
				}
			});

			this.pages = Math.ceil(ProductsFiltered.length / 10);
			this.filteredProducts = ProductsFiltered;
			this.loadProductsPerPage();
		},

		deleteProduct(id: string) {
			this.Products = this.Products.filter((product) => {
				if (product.id !== id) return product;
			});
			const { setMessage } = useInterface();
			setMessage('Product deleted', 'success');
			this.setProductsByFilters(this.valueFilter);
		},

		loadProductsPerPage() {
			const startIndex = (this.currentPage - 1) * this.ProductsPerPage;
			const endIndex = startIndex + this.ProductsPerPage;

			this.showedProducts = this.filteredProducts.slice(startIndex, endIndex);
		},

		nextPage() {
			if (this.currentPage + 1 > this.pages) return;
			this.currentPage++;
			this.loadProductsPerPage();
		},

		previousPage() {
			if (this.currentPage === 1) return;
			this.currentPage--;
			this.loadProductsPerPage();
		},

		gotToPage(page: number) {
			this.currentPage = page;
			this.loadProductsPerPage();
		},
	},
});
