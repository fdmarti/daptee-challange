<template>
	<button
		:class="`${color} text-white font-bold uppercase text-lg p-2 rounded-md shadow hover:opacity-90`" :disabled="isLoading"
	>
		<Spinner v-if="isLoading" :size="10" />
		<span v-else>{{ text }}</span>
	</button>
</template>

<script setup lang="ts">
	interface Props {
		text?: string;
		color?: string;
		isLoading?: boolean;
	}

	const { text, color, isLoading } = withDefaults(defineProps<Props>(), {
		text: 'Default button',
		color: 'bg-blue-500',
		isLoading: false,
	});
</script>
