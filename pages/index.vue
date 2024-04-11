<template>
	<div class="flex justify-center flex-col items-center h-[80vh]">
		<Logo />
		<h1 class="mt-5 sm:text-2xl text-xl font-semibold upp">
			Welcome to my amazing system
		</h1>
	</div>
</template>

<script setup lang="ts">
	useHead({
		title: 'Daptee - Home',
		meta: [
			{
				name: 'description',
				content: 'Page where you can do whatever you want',
			},
		],
	});

	definePageMeta({
		middleware: 'auth',
		layout: 'user-layout',
	});
</script>
