<template>
	<button :class="`bg-zinc-400 text-white font-bold uppercase text-lg p-2 rounded-md shadow hover:opacity-90 ${activePage}`">
		{{ numPage }}
	</button>
</template>

<script setup lang="ts">
	interface Props {
		numPage?: number | string;
		active?: boolean;
	}

	const props = withDefaults(defineProps<Props>(), {
		numPage: 1,
		active: false,
	});

	const { numPage, active } = toRefs(props);

	const activePage = computed(() => {
		return active.value ? '!bg-zinc-700' : '';
	});
</script>
