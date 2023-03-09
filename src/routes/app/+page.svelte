<script lang="ts">
	import { Button } from '$lib/components/Button';
	import { Icon } from '$lib/components/Icon';
</script>

<svelte:head>
	<title>My: Overview</title>
</svelte:head>

<nav class="fixed flex h-14 w-full items-center justify-between bg-slate-800 px-8">
	<a href="/app" class="text-lg font-bold text-slate-100">My Svelte App</a>

	<form method="POST" action="?/logout">
		<Button class="btn-sm">Log out</Button>
	</form>
</nav>

<div class="flex">
	<div class=" w-64 shrink-0 border-r bg-white pt-14" />
	<main class="flex-center min-h-screen w-full flex-col pt-14">
		<Icon name="blank-canvas" width={250} />

		<div class="mt-4 text-center">
			<h6 class="mb-2 text-slate-700">You don't have any group yet</h6>
			<Button class="btn-primary">Start new group</Button>
		</div>
	</main>
</div>
