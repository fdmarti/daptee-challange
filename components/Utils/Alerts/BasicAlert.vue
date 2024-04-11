<template>
	<div
		class="absolute bottom-2 left-2 shadow-md p-5 rounded-2xl text-white font-bold text-lg"
		:class="`bg-${messageType}-500`"
		v-if="hasMessage">
		{{ message }}
	</div>
</template>

<script setup lang="ts">
	import { useInterface } from '../../../composables';
	const { hasMessage, messageType, message } = useInterface();
</script>