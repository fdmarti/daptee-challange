import { Products } from '../interface';
import { handleAlerts, handleGetProducts } from '../utils';

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
		async getProducts(): void {
			this.isLoading = true;

			try {
				this.Products = await handleGetProducts();
				await this.setProductsByFilters();
			} catch (error) {
				const { setMessage } = handleAlerts();
				setMessage('Failed to load', 'error');
			}

			this.isLoading = false;
		},

		setProductsByFilters(filter: string = ''): void {
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

		deleteProduct(id: string): void {
			this.Products = this.Products.filter((product) => {
				if (product.id !== id) return product;
			});
			const { setMessage } = handleAlerts();
			setMessage('Product deleted', 'success');
			this.setProductsByFilters(this.valueFilter);
		},

		loadProductsPerPage(): void {
			const startIndex = (this.currentPage - 1) * this.ProductsPerPage;
			const endIndex = startIndex + this.ProductsPerPage;

			this.showedProducts = this.filteredProducts.slice(startIndex, endIndex);
		},

		nextPage(): void {
			if (this.currentPage + 1 > this.pages) return;
			this.currentPage++;
			this.loadProductsPerPage();
		},

		previousPage(): void {
			if (this.currentPage === 1) return;
			this.currentPage--;
			this.loadProductsPerPage();
		},

		gotToPage(page: number): void {
			this.currentPage = page;
			this.loadProductsPerPage();
		},
	},
});
