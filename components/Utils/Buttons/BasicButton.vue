<template>
	<button :class="`${color} text-white font-bold uppercase text-lg p-2 rounded-md shadow hover:opacity-90`">{{ text }}</button>
</template>

<script setup lang="ts">
	interface Props {
		text?: string;
		color? : string
	}

	const { text } = withDefaults(defineProps<Props>(), {
		text: 'Default button',
		color : 'bg-blue-500'
	});
</script>
