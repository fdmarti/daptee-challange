<template>
	<div class="flex gap-2">
		<PaginationButton numPage="<" @click="previousPage" />
		<PaginationButton
			v-for="(_, index) in pages"
			:numPage="index + 1"
			@click="gotToPage(index + 1)"
			:active="currentPage === index + 1 ? true : false"
		/>
		<PaginationButton numPage=">" @click="nextPage" />
	</div>
</template>
<script lang="ts" setup>
	import { useProductStore } from '../../../store';

	const productsStore = useProductStore();
	const { gotToPage, nextPage, previousPage } = productsStore;
	const { pages, currentPage } = storeToRefs(productsStore);
</script>
