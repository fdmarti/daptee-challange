<template>
	<section class="max-w-[500px] mx-auto">
		<InputText tpye="text" placeholder="Search" v-model="search" />
	</section>
</template>

<script setup lang="ts">
	useHead({
		title: 'Daptee - Products',
		meta: [
			{
				name: 'description',
				content: 'Page where you can see all your products',
			},
		],
	});

	definePageMeta({
		middleware: 'auth',
		layout: 'user-layout',
	});

	const search = ref<string>('');
</script>
