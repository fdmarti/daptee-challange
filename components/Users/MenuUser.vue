<template>
	<div
		class="absolute w-full sm:w-auto sm:-bottom-[110px] sm:right-0 -bottom-[90px] z-20 bg-slate-50 p-4 shadow rounded-md"
	>
		<ul class="flex flex-col gap-4 text-center sm:text-left">
			<li class="font-bold hover:cursor-pointer hover:opacity-50">
				My Profile
			</li>
			<li
				class="font-bold hover:cursor-pointer hover:opacity-50"
				@click="handleLogOut"
			>
				Logout
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import { useUserStore } from '../../store';

	const { logOut } = useUserStore();

	const router = useRouter();

	const handleLogOut = () => {
		logOut().then((resp) => {
			if (resp) {
				router.push('/login');
			}
		});
	};
</script>
