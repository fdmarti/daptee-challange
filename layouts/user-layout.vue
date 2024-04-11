<template>
	<div class="user-layout layout min-h-[100vh] bg-slate-300 relative">
		<ClientOnly fallback-tag="span">
			<template #fallback>
				<h1>Loading...</h1>
			</template>
			<header>
				<Navbar />
			</header>
			<div class="flex">
				<div class="bg-slate-200 relative py-7 px-3 sm:px-0 w-full">
					<slot />
				</div>
			</div>
		</ClientOnly>
	</div>
</template>
<script setup lang="ts"></script>
