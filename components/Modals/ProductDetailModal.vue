<template>
	<transition>
		<Modal>
			<div class="flex items-center justify-between">
				<h2 class="font-bold text-xl mb-2">Product detail</h2>
				<button @click="$emit('close')" class="p-3 hover:opacity-75 font-bold">
					X
				</button>
			</div>
			<hr />
			<div class="mt-5 flex justify-center gap-4 flex-col md:flex-row items-center" >
				<ProfilePictureProduct :profilePicture="picture" :name="name" />
				<section class="border-l-[1px] p-2 max-w-[300px]">
					<h3 class="font-bold text-xl mb-2">{{ name }}</h3>

					<div class="flex flex-col gap-2">
						<InformationTextProduct title="Owner" :text="creator" />
						<InformationTextProduct title="Description" :text="description" />
					</div>
				</section>
			</div>
		</Modal>
	</transition>
</template>

<script setup lang="ts">
	interface Props {
		productInfo: Products;
	}

	const props = defineProps<Props>();

	const { productInfo } = toRefs(props);
	const { picture, name, description, creator } = productInfo.value;
</script>
