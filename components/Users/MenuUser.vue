<template>
	<div
		class="absolute -bottom-[110px] right-0 z-10 bg-slate-50 p-4 shadow rounded-md"
	>
		<ul class="flex flex-col gap-4">
			<li class="font-bold hover:cursor-pointer hover:opacity-50">
				My Profile
			</li>
			<li class="font-bold hover:cursor-pointer hover:opacity-50" @click="handleLogOut">Logout</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	const { logOut } = useUser();
	const router = useRouter();


	const handleLogOut = () => {
		logOut().then(resp => {
			if ( resp ){
				router.push('/login')
			}
		})
	}
</script>
