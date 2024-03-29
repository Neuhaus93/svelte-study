<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';

	export let loginPage: boolean;
	export let errors:
		| { email?: string[]; password?: string[]; validation?: string }
		| undefined;
	export let data: { email?: string } | undefined;

	let loading = false;

	const handleLogin: SubmitFunction = () => {
		loading = true;

		return async ({ update, result }) => {
			await update();
			if (result.type !== 'redirect') {
				loading = false;
			}
		};
	};
</script>

<div class="mt-14 flex flex-1 flex-col items-center sm:mt-0 sm:justify-center">
	<div class="flex w-3/4 flex-col sm:w-auto">
		<form
			class="flex flex-col"
			method="POST"
			action="/auth/login"
			use:enhance={handleLogin}
		>
			<h1 class="mb-2 text-2xl font-bold">
				{loginPage ? 'Login' : 'Register'}
			</h1>

			<div class="form-control">
				<label class="label" for="email">
					<span class="label-text">E-mail</span>
				</label>
				<input
					class="input-bordered input"
					id="email"
					type="email"
					name="email"
					value={data?.email ?? ''}
					autocomplete="email"
				/>
				{#if errors?.email}
					<label class="label" for="email">
						<span class="label-text-alt text-red-600">{errors.email[0]}</span>
					</label>
				{/if}
			</div>

			<div class="form-control mt-1">
				<label class="label" for="password">
					<span class="label-text">Password</span>
				</label>
				<input
					class="input-bordered input"
					id="password"
					type="password"
					name="password"
					autocomplete="current-password"
				/>
				{#if errors?.password}
					<label class="label" for="password">
						<span class="label-text-alt text-red-600">{errors.password[0]}</span
						>
					</label>
				{/if}
			</div>

			{#if errors?.validation}
				<p class="mt-1 pl-1 text-sm text-red-600">{errors.validation}</p>
			{/if}

			<button type="submit" class="mt-6" disabled={loading}
				>{loginPage ? 'Log in' : 'Sign up with Email'}</button
			>
		</form>

		<div class="mt-1">
			{#if loginPage}
				<a href="/auth/password" class="mt-2 text-sm text-slate-600 underline"
					>Forgot password?</a
				>
			{/if}

			{#if loginPage}
				<p class="mt-4">
					Don't have an account? <a class="underline" href="/auth/signup"
						>Sign up</a
					>
				</p>
			{:else}
				<p class="mt-10">
					Already have an account? <a class="underline" href="/auth/login"
						>Go to login</a
					>
				</p>
			{/if}
		</div>
	</div>
</div>
