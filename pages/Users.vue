<template>
	<div class="flex flex-col items-center gap-5 w-full">
		<section class="max-w-[500px] w-full mx-auto">
			<InputText tpye="text" placeholder="Search" v-model="search" />
		</section>
		<UsersTable />
		<UsersPagination />
	</div>
</template>
<script setup lang="ts">
	import { useUsers } from '../composables';
	const { getUsers, setUsersByFilters } = useUsers();

	useHead({
		title: 'Daptee - Users',
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

	const search = ref<string>('');

	watch(search, async (newValue, _) => {
		await setUsersByFilters(newValue);
	});

	onMounted(() => {
		getUsers();
	});
</script>
