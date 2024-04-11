<template>
	<NuxtLoadingIndicator />
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
	<BasicAlert v-if="hasMessage" />
</template>
<script setup lang="ts">
	import { handleAlerts } from './utils';
	const { hasMessage } = handleAlerts();
</script>
