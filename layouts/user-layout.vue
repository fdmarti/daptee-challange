<template>
	<div class="user-layout layout min-h-[100vh] bg-slate-300 relative">
		<Navbar />
		<div class="flex">
			<div class="bg-slate-200 relative p-5 w-full h-[90vh]">
				<slot />
			</div>
		</div>
	</div>
</template>
<script setup lang="ts"></script>
