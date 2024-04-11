<template>
	<div
		class="fixed top-0 left-0 w-full h-full bg-[#00000080] flex overflow-y-auto transition-all ease-in-out justify-center items-center"
	>
		<div
			class="lg:w-[600px] sm:w-[450px] p-10 bg-white max-h-[800px] rounded-lg"
		>
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts"></script>
