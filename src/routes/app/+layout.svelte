<script lang="ts">
	import { Button, Sidebar } from '$lib/components/index';
	import { BREAKPOINTS } from '$lib/constants';
	import { onMount } from 'svelte';

	let sidebarExpanded = true;
	let innerWidth: number;

	// Starts with the menu shrinked on small screens
	onMount(() => {
		sidebarExpanded = innerWidth >= BREAKPOINTS.sm;
	});

	/**
	 * Toggle the sidebar
	 */
	const toggleSidebar = () => {
		sidebarExpanded = !sidebarExpanded;
	};

	/**
	 * Shrink the sidebar when clicking outside of the menu when on small screens
	 */
	const shrinkSidebarOnSmScreen = () => {
		if (innerWidth < BREAKPOINTS.sm) {
			sidebarExpanded = false;
		}
	};
</script>

<svelte:head>
	<title>My Svelte</title>
</svelte:head>

<svelte:window
	bind:innerWidth
	on:resize={({ currentTarget }) => (sidebarExpanded = currentTarget.innerWidth >= BREAKPOINTS.sm)}
/>

<nav class="fixed z-40 flex h-14 w-full items-center justify-between bg-slate-800 px-8">
	<div>
		<Button size="sm" class="mr-2 sm:hidden" on:click={toggleSidebar}>Menu</Button>
		<a href="/app" class="text-lg font-bold text-slate-100">My Svelte App</a>
	</div>

	<form method="POST" action="?/logout">
		<Button size="sm">Log out</Button>
	</form>
</nav>

<div class="flex flex-1">
	<Sidebar expanded={sidebarExpanded} toggleExpanded={toggleSidebar} />

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<main class="flex-center min-h-screen w-full flex-col pt-14" on:click={shrinkSidebarOnSmScreen}>
		<slot />
	</main>
</div>
