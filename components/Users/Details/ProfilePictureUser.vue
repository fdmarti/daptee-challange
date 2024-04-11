<template>
	<picture class="w-[150px] h-[150px]" v-show="imageIsLoading">
		<img
			:src="profilePicture"
			:alt="`${username} profile picture`"
			class="w-full h-full rounded-full border-2 object-cover border-gray-400"
			@load="imageLoaded"
		/>
	</picture>

	<ProfilePictureSkeleton v-show="!imageIsLoading" />
</template>

<script setup lang="ts">
	interface Props {
		profilePicture: string;
		username: string;
	}

	const props = defineProps<Props>();
	const { profilePicture, username } = toRefs(props);

	const imageIsLoading = ref<boolean>(false);

	const imageLoaded = () => {
		imageIsLoading.value = true;
	};
</script>
