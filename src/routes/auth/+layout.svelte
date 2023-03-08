<script lang="ts">
	import FormLayout from './FormLayout.svelte';
	import { page } from '$app/stores';

	$: loginPage = $page.url.pathname === '/auth/login';
	$: renderForm = loginPage || $page.url.pathname === '/auth/signup';
</script>

{#if renderForm}
	<FormLayout {loginPage} data={$page.form?.data} errors={$page.form?.errors} />
{:else}
	<slot />
{/if}
