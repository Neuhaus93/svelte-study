<script lang="ts">
	import './styles.css';
	import { browser } from '$app/environment';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import { onMount } from 'svelte';

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});

	const setHeight = () => {
		const mainEl = document.getElementById('root-container');

		if (mainEl) {
			mainEl.style.minHeight = window.innerHeight + 'px';
		}
	};

	onMount(() => {
		setHeight();
	});
</script>

<svelte:window on:resize={setHeight} />

<QueryClientProvider client={queryClient}>
	<div class="bg-slate-100 flex min-h-screen" id="root-container">
		<slot />
	</div>
</QueryClientProvider>
