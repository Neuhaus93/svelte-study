<script lang="ts">
	import { Button } from '$lib/components/Button';
	import clsx from 'clsx';
	import { enhance } from '$app/forms';

	// Props
	export let loginPage: boolean;

	let error = '';
	let loading = false;
</script>

<div class="flex min-h-screen flex-col items-center justify-center">
	<div class="flex flex-col">
		<form class="flex flex-col" method="POST" action="/auth?/login" use:enhance>
			<h1 class="mb-2 text-2xl font-bold">{loginPage ? 'Login' : 'Register'}</h1>

			<div class="form-control">
				<label class="label" for="email">E-mail</label>
				<input class="input-bordered input" id="email" type="email" name="email" />
			</div>

			<div class="form-control mt-1">
				<label class="label" for="password">Password</label>
				<input class="input-bordered input" id="password" type="password" name="password" />
			</div>

			{#if error}
				<p class="mt-1 pl-1 text-sm text-red-600">{error}</p>
			{/if}

			<Button type="submit" class={clsx('mt-6', { loading })} disabled={loading}
				>{loginPage ? 'Login' : 'Signup with e-mail'}</Button
			>
		</form>

		<div class="mt-1">
			{#if loginPage}
				<a href="/auth/password" class="mt-2 text-sm text-slate-600 underline">Forgot password?</a>
			{/if}

			{#if loginPage}
				<p class="mt-4">
					Don't have an account? <a class="underline" href="/auth/signup">Sign Up</a>
				</p>
			{:else}
				<p class="mt-11">
					Already have an account? <a class="underline" href="/auth/login">Sign In</a>
				</p>
			{/if}
		</div>
	</div>
</div>
