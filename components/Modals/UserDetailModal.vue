<template>
	<transition>
		<Modal>
			<div class="flex items-center justify-between">
				<h2 class="font-bold mb-2">User profile</h2>
				<button @click="$emit('close')" class="p-3 hover:opacity-75 font-bold">
					X
				</button>
			</div>
			<hr />
			<div class="mt-5 flex justify-center flex-col items-center gap-4">
				<ProfilePictureUser :profilePicture="picture" :username="username" />

				<h3 class="font-bold text-2xl">{{ name }}</h3>

				<section class="flex flex-col gap-1">
					<InformationTextUser title="Username:" :text="username" />
					<InformationTextUser title="Email:" :text="email" />
				</section>
			</div>
		</Modal>
	</transition>
</template>

<script setup lang="ts">
	import type { User } from '../../interface'

	interface Props {
		userInfo: User;
	}

	const props = defineProps<Props>();

	const { userInfo } = toRefs(props);
	const {
		picture,
		name,
		username,
		email,
	} = userInfo.value;
</script>
