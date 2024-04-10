<template>
	<nav class="flex items-center p-4 gap-10">
		<section>
			<NuxtLink to="/">
				<Logo />
			</NuxtLink>
		</section>
		<section class="flex justify-between items-center w-full">
			<div class="flex gap-5">
				<LinkMenu url="/users" text="Users" />
				<LinkMenu url="/products" text="Products" />
			</div>
			<div class="flex items-center gap-2 hover:opacity-70 hover:cursor-pointer">
				<UserIcon />
				<span class="font-bold">Federico</span>
			</div>
		</section>
	</nav>
</template>

<script setup lang="ts"></script>
