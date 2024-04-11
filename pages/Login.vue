<template>
	<div class="flex items-center justify-center gap-5 relative">
		<section class="basis-1/2 md:pl-4">
			<section
				class="flex flex-col items-center border max-w-[500px] mx-auto py-20 px-10 rounded-md shadow bg-slate-200"
			>
				<h2 class="text-3xl">Sign in</h2>
				<form
					@submit.prevent="handleSubmit"
					class="flex flex-col w-full gap-4 mt-5"
				>
					<InputText
						tpye="text"
						placeholder="Email or Username"
						v-model="formData.username"
					/>
					<InputText
						type="password"
						placeholder="Password"
						v-model="formData.password"

					/>
					<BasicButton text="Sign in" :isLoading="isLoading" />
				</form>
			</section>
		</section>
		<LoginBgImage />
	</div>
</template>

<script setup lang="ts">
	const router = useRouter();

	useHead({
		title: 'Daptee Challange - Login',
		meta: [{ name: 'description', content: 'Login page' }],
	});

	definePageMeta({
		middleware: 'default',
	});

	const formData = reactive({
		username: '',
		password: '',
	});

	const { logIn, isLoading } = useUser();
	const { setMessage } = useInterface();


	const handleSubmit = () => {
		const { username, password } = formData;

		if (username.trim() === '' || password.trim() === '') {
			setMessage('All fields must be completed', 'error');
			return;
		}

		logIn(formData).then((resp) => {
			if (resp) {
				router.push('/');
			}
		});
	};
</script>
