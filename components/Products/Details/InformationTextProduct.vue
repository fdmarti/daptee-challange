<template>
	<div class="flex flex-col gap-2">
		<span class="font-semibold">{{ title }}</span>
		<span class="text-gray-500 font-semibold">{{ text }}</span>
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
