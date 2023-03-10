<script lang="ts">
	import FormLayout from './FormLayout.svelte';
	import { page } from '$app/stores';

	$: loginPage = $page.url.pathname === '/auth/login';
	$: renderForm = loginPage || $page.url.pathname === '/auth/signup';
</script>

<main class="flex flex-1">
	<slot />
	{#if renderForm}
		<FormLayout {loginPage} data={$page.form?.data} errors={$page.form?.errors} />
		<div class="absolute top-2 left-2 rounded-sm border border-black p-2 text-sm">
			<p>email: test@gmail.com</p>
			<p>password: testing</p>
		</div>
	{/if}
</main>
