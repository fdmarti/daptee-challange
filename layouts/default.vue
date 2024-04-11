<template>
	<ClientOnly fallback-tag="span">
		<template #fallback>
			<h1>Loading...</h1>
		</template>

		<div class="default min-h-[100vh] bg-slate-300 relative">
			<slot />
		</div>
	</ClientOnly>
</template>
<script setup lang="ts"></script>
