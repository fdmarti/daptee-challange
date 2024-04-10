<template>
	<td scope="col" :colspan="colspan" class="px-6 py-3 font-semibold whitespace-nowrap">
		{{ text }}
	</td>
</template>

<script setup lang="ts">
	interface Props {
		text: string | number | null;
		colspan?: number;
	}

	const props = withDefaults(defineProps<Props>(), {
		text: 'Default row text',
		colspan: 1,
	});

	const { text } = toRefs(props);
</script>
