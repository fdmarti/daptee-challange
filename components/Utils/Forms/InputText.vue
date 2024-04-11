<template>
	<section class="relative">
		<EyeIcon v-if="isPasswordInput" @click="handleChangeType" />
		<input
			:type="typeToRef"
			:placeholder="placeholder"
			:value="modelValue"
			:autocomplete="type"
			@input="$emit('update:modelValue', $event.target.value)"
			class="p-4 rounded-md focus:outline-none focus:bg-slate-50 focus:outline-sky-200 shadow w-full relative"
		/>
	</section>
</template>
<script lang="ts" setup>
	interface Props {
		type?: string;
		modelValue: string | number | null;
		placeholder: string;
	}

	const props = withDefaults(defineProps<Props>(), {
		type: 'text',
		modelValue: null,
		placeholder: 'Placeholder example',
	});

	const { type, modelValue, placeholder } = toRefs(props);

	const typeToRef = ref<string>(type.value);

	const isPasswordInput = computed(() => {
		return type.value === 'password' ? true : false;
	});

	const handleChangeType = () => {
		if (typeToRef.value === 'text') {
			typeToRef.value = 'password';
		}else{
			typeToRef.value = 'text';
		}
	};
</script>
