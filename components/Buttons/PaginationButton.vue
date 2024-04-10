<template>
	<button
		:class="`bg-zinc-400 text-white font-bold uppercase text-lg p-2 rounded-md shadow hover:opacity-90 ${activePage}`"
	>
		{{ numPage }}
	</button>
</template>

<script setup lang="ts">
	const { currentPage } = useUsers();

	interface Props {
		numPage?: number | string;
	}

	const { numPage } = withDefaults(defineProps<Props>(), {
		numPage: 1,
	});

	const activePage = computed(() => {
		if (typeof numPage === 'number') {
			return numPage === currentPage.value ? '!bg-zinc-700' : '';
		}

		return '';
	});
</script>
