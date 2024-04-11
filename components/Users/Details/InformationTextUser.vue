<template>
	<div class="flex gap-2">
		<span class="font-semibold">{{ title }}</span>
		<span class="text-gray-800 font-semibold">{{ text }}</span>
	</div>
</template>

<script setup lang="ts">
	interface Props {
		title?: string;
		text?: string;
	}

	const { title, text } = withDefaults(defineProps<Props>(), {
		title: 'Some title',
		text: 'some text',
	});
</script>
