<template>
	<picture class="w-[250px] h-[250px]" v-show="imageIsLoading">
		<img
			:src="profilePicture"
			:alt="`${name} profile picture`"
			class="w-full h-full rounded object-cover shadow"
			@load="imageLoaded"
		/>
	</picture>

	<ProductPictureSkeleton v-show="!imageIsLoading" />
</template>

<script setup lang="ts">
	interface Props {
		profilePicture: string;
		name: string;
	}

	const props = defineProps<Props>();
	const { profilePicture, name } = toRefs(props);

	const imageIsLoading = ref<boolean>(false);

	const imageLoaded = () => {
		imageIsLoading.value = true;
	};
</script>
