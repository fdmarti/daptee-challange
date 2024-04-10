<template>
	<NuxtLink :class="`font-semibold text-cyan-900 hover:text-cyan-600 ${activeLink}`" :to="url">{{ text }}</NuxtLink>
</template>

<script setup lang="ts">
	const route = useRoute()

	interface Props {
		url?: string;
		text?: string;
	}

	const { url, text } = withDefaults(defineProps<Props>(), {
		url: '/',
		text: 'Default',
	});


	const activeLink = computed(() => {
		return route.fullPath === url ? '!text-cyan-600' : ''
	})
</script>
