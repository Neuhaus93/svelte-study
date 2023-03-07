<script lang="ts">
	import './styles.css';
	import { browser } from '$app/environment';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
</script>

<QueryClientProvider client={queryClient}>
	<div class="min-h-screen bg-slate-100">
		<main>
			<slot />
		</main>
	</div>
</QueryClientProvider>

<style>
</style>
