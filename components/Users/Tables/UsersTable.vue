<template>
	<div class="bg-white w-10/12 lg:w-3/4 shadow-md rounded-lg p-5 overflow-auto">
		<table class="min-w-full table-auto">
			<thead class="text-gray-700 uppercase bg-gray-50 h-10 rounded">
				<tr class="border-b-2">
					<th>#</th>
					<th>Username</th>
					<th>Name</th>
					<th>Email</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody class="text-center divide-y">
				<tr v-if="isLoading">
					<td colspan="5">
						<Spinner :size="10" class="mt-5" />
					</td>
				</tr>
				<tr
					v-for="user in showedUsers"
					v-else-if="showedUsers!.length > 0"
					class="hover:bg-slate-100"
				>
					<Row :text="user.id" />
					<Row :text="user.username" />
					<Row :text="user.name" />
					<Row :text="user.email" />
					<td scope="col">
						<div class="relative flex justify-center gap-3">
							<button :class="`p-1 rounded-md shadow hover:opacity-90`">
								<DetailsIcon @click="openDetailPopup(user)" />
							</button>
							<button :class="`p-1 rounded-md shadow hover:opacity-90`">
								<DeleteIcon @click="deleteUser(user.id)" />
							</button>
						</div>
					</td>
				</tr>
				<tr v-else>
					<Row text="No hay usuarios registrados" :colspan="5" />
				</tr>
			</tbody>
		</table>
	</div>
	<UserDetailModal
		v-if="showPopupDetails"
		:userInfo="userData"
		@close="closeDetailPopup"
	/>
</template>

<script setup lang="ts">
	import { useUsersStore } from '../../../store';

	const userStore = useUsersStore();
	const { deleteUser } = userStore;
	const { showedUsers, isLoading } = storeToRefs(userStore);

	const showPopupDetails = ref<boolean>(false);
	const userData = ref({});

	const openDetailPopup = (user) => {
		showPopupDetails.value = true;
		userData.value = user;
	};

	const closeDetailPopup = () => {
		showPopupDetails.value = false;
		userData.value = {};
	};
</script>
