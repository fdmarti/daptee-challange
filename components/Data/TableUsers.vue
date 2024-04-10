<template>
	<div class="bg-white w-full lg:w-3/4 shadow-md rounded-lg p-5 overflow-auto">
		<table class="min-w-full table-auto">
			<thead class="text-gray-700 uppercase bg-gray-50 h-10 rounded">
				<tr class="border-b-2">
					<th>#</th>
					<th>Username</th>
					<th>Name</th>
					<th>Email</th>
					<th>Acciones</th>
				</tr>
			</thead>
			<tbody class="text-center divide-y">
				<tr v-if="isLoading">
					<td colspan="5">
						<Spinner :size="10" class="mt-5" />
					</td>
				</tr>
				<tr
					v-for="user in filteredUsers"
					v-else-if="filteredUsers!.length > 0"
					class="hover:bg-slate-100"
				>
					<Row :text="user.id" />
					<Row :text="user.username" />
					<Row :text="user.name" />
					<Row :text="user.email" />
					<td scope="col" class="px-6 py-3 flex justify-center gap-3">...</td>
				</tr>
				<tr v-else>
					<Row text="No hay gastos registrados" :colspan="5" />
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup lang="ts">
	import { useUsers } from '../../composables';

	const { filteredUsers, isLoading } = useUsers();
</script>
