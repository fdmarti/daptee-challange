<template>
	<input
		:type="type"
		:placeholder="placeholder"
		:value="modelValue"
		:autocomplete="type"
		@input="$emit('update:modelValue', $event.target.value)"
		class="p-4 rounded-md focus:outline-none focus:bg-slate-50 focus:outline-sky-200 shadow w-full"
	/>
</template>
<script lang="ts" setup>
	const props = defineProps(['type', 'modelValue', 'placeholder']);
</script>
