<template>
	<div class="bg-white w-full lg:w-3/4 shadow-md rounded-lg p-5 overflow-auto">
		<table class="min-w-full table-auto">
			<thead class="text-gray-700 uppercase bg-gray-50 h-10 rounded">
				<tr class="border-b-2">
					<th>#</th>
					<th>Company Name</th>
					<th>Owner</th>
					<th>Company Email</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody class="text-center divide-y">
				<tr v-if="isLoading">
					<td colspan="5">
						<Spinner :size="10" class="mt-5" />
					</td>
				</tr>
				<tr
					v-for="product in showedProducts"
					v-else-if="showedProducts!.length > 0"
					class="hover:bg-slate-100"
				>
					<Row :text="product.id" />
					<Row :text="product.name" />
					<Row :text="product.creator" />
					<Row :text="product.email" />
					<td scope="col">
						<div class="relative flex justify-center gap-3">
							<button :class="`p-1 rounded-md shadow hover:opacity-90`">
								<DetailsIcon @click="openDetailPopup(product)" />
							</button>
							<button :class="`p-1 rounded-md shadow hover:opacity-90`">
								<DeleteIcon @click="deleteProduct(product.id)" />
							</button>
						</div>
					</td>
				</tr>
				<tr v-else>
					<Row text="No hay usuarios registrados" :colspan="5" />
				</tr>
			</tbody>
		</table>
	</div>
	<ProductDetailModal
		v-if="showPopupDetails"
		:productInfo="productData"
		@close="closeDetailPopup"
	/>
</template>

<script setup lang="ts">
	const { showedProducts, isLoading, deleteProduct } = useProducts();

	const showPopupDetails = ref<boolean>(false);
	const productData = ref({});

	const openDetailPopup = (product) => {
		showPopupDetails.value = true;
		productData.value = product;
	};

	const closeDetailPopup = () => {
		showPopupDetails.value = false;
		productData.value = {};
	};
</script>
