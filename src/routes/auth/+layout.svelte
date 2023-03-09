<script lang="ts">
	import FormLayout from './FormLayout.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	$: loginPage = $page.url.pathname === '/auth/login';
	$: renderForm = loginPage || $page.url.pathname === '/auth/signup';
</script>

<main class="flex flex-1">
	<slot />
	{#if renderForm}
		<FormLayout {loginPage} data={$page.form?.data} errors={$page.form?.errors} />
	{/if}
</main>
