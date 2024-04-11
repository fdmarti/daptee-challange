<template>
	<nav class="flex items-center p-4 gap-10">
		<section>
			<NuxtLink to="/">
				<Logo />
			</NuxtLink>
		</section>
		<section class="flex justify-between items-center w-full relative">
			<div class="flex gap-5">
				<LinkMenu url="/users" text="Users" />
				<LinkMenu url="/products" text="Products" />
			</div>
			<div
				class="flex items-center gap-2 hover:cursor-pointer"
				@click.stop="showUserMenu = !showUserMenu"
			>
				<UserIcon />
				<Spinner :size="10" v-if="isLoadingUser" />
				<span class="font-bold" v-else>{{ userName }}</span>
			</div>
			<MenuUser ref="userMenu" v-if="showUserMenu" />
		</section>
	</nav>
</template>

<script setup lang="ts">
	import { useStorage, onClickOutside } from '@vueuse/core';

	const userName = ref<string>('');
	const isLoadingUser = ref<boolean>(true);
	const showUserMenu = ref<boolean>(false);

	const loadUserData = () => {
		if (process.client) {
			const userState = useStorage('user-daptee-store');
			const user = JSON.parse(userState.value);
			userName.value = user.name;
		}

		setTimeout(() => {
			isLoadingUser.value = false;
		}, 0);
	};

	loadUserData();

	const userMenu = ref(null);
	onClickOutside(userMenu, (event) => (showUserMenu.value = !showUserMenu.value));
</script>
