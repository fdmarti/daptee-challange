<template>
	<NuxtLoadingIndicator />
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
	<BasicAlert v-if="hasMessage" />
</template>
<script setup lang="ts">
	const { hasMessage } = useInterface();
</script>
