<script lang="ts">
	import { Button } from '$lib/components/Button';
	import { Icon } from '$lib/components/Icon';
	import Sidebar from '$lib/components/Sidebar/Sidebar.svelte';
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
	<title>My: Overview</title>
</svelte:head>

<svelte:window
	bind:innerWidth
	on:resize={({ currentTarget }) => (sidebarExpanded = currentTarget.innerWidth >= BREAKPOINTS.sm)}
/>

<nav class="fixed z-40 flex h-14 w-full items-center justify-between bg-slate-800 px-8">
	<div>
		<Button class="btn-sm mr-2 sm:hidden" on:click={toggleSidebar}>Menu</Button>
		<a href="/app" class="text-lg font-bold text-slate-100">My Svelte App</a>
	</div>

	<form method="POST" action="?/logout">
		<Button class="btn-sm">Log out</Button>
	</form>
</nav>

<div class="flex">
	<Sidebar expanded={sidebarExpanded} toggleExpanded={toggleSidebar} />

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<main class="flex-center min-h-screen w-full flex-col pt-14" on:click={shrinkSidebarOnSmScreen}>
		<Icon name="blank-canvas" width={250} />

		<div class="mt-6 text-center">
			<h6 class="mb-2 text-slate-700">You don't have any group yet</h6>
			<Button class="btn-primary">Start new group</Button>
		</div>
	</main>
</div>
