<script lang="ts">
	import { Button } from '$lib/components/Button';

	// Props
	export let loginPage: boolean;
</script>

<div>
	<div class="flex min-h-screen items-center justify-center">
		<form class="flex flex-col">
			<h1 class="mb-2 text-2xl font-bold">{loginPage ? 'Login' : 'Register'}</h1>

			<div class="form-control">
				<label class="label" for="email">E-mail</label>
				<input class="input-bordered input" id="email" type="email" />
			</div>

			<div class="form-control mt-1">
				<label class="label" for="password">Password</label>
				<input class="input-bordered input" id="password" type="password" />
			</div>

			<Button type="submit" class="testing mt-6"
				>{loginPage ? 'Login' : 'Signup with e-mail'}</Button
			>

			{#if loginPage}
				<a href="/auth/password" class="mt-2 text-sm underline">Forgot password?</a>
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
		</form>
	</div>
</div>
