<template>
	<nav class="flex sm:justify-normal justify-between items-center p-4 gap-10">
		<section>
			<NuxtLink to="/">
				<Logo />
			</NuxtLink>
		</section>
		<section
			class="flex justify-between items-center w-full sm:relative absolute sm:flex-row flex-col sm:bg-transparent bg-zinc-100 sm:top-0 top-20 left-0 shadow sm:shadow-none z-10 sm:gap-0 gap-5 sm:p-0 p-10 sm:!flex"
			:class="showMobileMenu ? 'block' : 'hidden'"
		>
			<div class="flex sm:flex-row flex-col gap-3 text-center sm:gap-5" @click="handleClickHideMenu">
				<LinkMenu url="/users" text="Users" />
				<LinkMenu url="/products" text="Products" />
			</div>
			<hr class="w-full sm:hidden block" />
			<div
				class="flex items-center gap-2 hover:cursor-pointer"
				@click="handleChangeUSerMenuStatus"
			>
				<UserIcon />
				<Spinner :size="10" v-if="isLoadingUser" />
				<span class="font-bold" v-else>{{ userName }}</span>
			</div>
			<MenuUser ref="userMenu" v-if="showUserMenu" />
		</section>
		<section class="sm:hidden block">
			<BurgerIcon @click="handleClickHideMenu" />
		</section>
	</nav>
</template>

<script setup lang="ts">
	import { useStorage, onClickOutside } from '@vueuse/core';

	const userName = ref<string>('');
	const isLoadingUser = ref<boolean>(true);
	const showUserMenu = ref<boolean>(false);

	const showMobileMenu = ref<boolean>(false);

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
	onClickOutside(
		userMenu,
		(event) => (showUserMenu.value = !showUserMenu.value),
	);

	const handleChangeUSerMenuStatus = () => {
		showUserMenu.value = !showUserMenu.value;
	};

	const handleClickHideMenu = () => {
		showMobileMenu.value = !showMobileMenu.value;
	};
</script>
