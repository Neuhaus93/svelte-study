<script lang="ts">
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
	on:resize={({ currentTarget }) =>
		(sidebarExpanded = currentTarget.innerWidth >= BREAKPOINTS.sm)}
/>

<nav
	class="fixed z-40 flex h-14 w-full items-center justify-between bg-slate-800 px-8"
>
	<div>
		<a href="/app" class="text-lg font-bold text-slate-100">My Svelte App</a>
	</div>

	<form method="POST" action="?/logout">
		<button>Log out</button>
	</form>
</nav>

<div class="flex flex-1">
	<!-- <Sidebar expanded={sidebarExpanded} toggleExpanded={toggleSidebar} /> -->

	<main
		class="flex-center container mx-auto min-h-screen w-full flex-col pt-14"
	>
		<slot />
	</main>
</div>
