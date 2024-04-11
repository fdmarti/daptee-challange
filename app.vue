<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
	<BasicAlert v-if="hasMessage" />
</template>
<script setup lang="ts">
	import { useInterface } from './composables';

	const { hasMessage } = useInterface();
</script>
