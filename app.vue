<template>
	<NuxtLayout>
		<NuxtPage />
		<BasicAlert v-if="hasMessage" />
	</NuxtLayout>
</template>
<script setup lang="ts">
	import { useInterface } from './composables';

	const { hasMessage } = useInterface();
</script>
