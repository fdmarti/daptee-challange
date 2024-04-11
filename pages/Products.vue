<template>
	<div class="flex flex-col items-center gap-5 w-full">
		<section class="max-w-[500px] w-full mx-auto">
			<InputText tpye="text" placeholder="Search" v-model="search" />
		</section>
		<ProductsTable />
		<ProductsPagination />
	</div>
</template>

<script setup lang="ts">
	import { useProductStore } from '../store';

	useHead({
		title: 'Daptee - Products',
		meta: [
			{
				name: 'description',
				content: 'Page where you can see all your products',
			},
		],
	});

	definePageMeta({
		middleware: 'auth',
		layout: 'user-layout',
	});

	const search = ref<string>('');

	const { getProducts, setProductsByFilters } = useProductStore();

	watch(search, async (newValue, _) => {
		await setProductsByFilters(newValue);
	});

	onMounted(() => {
		getProducts();
	});
</script>
