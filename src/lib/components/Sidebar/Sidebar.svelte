<script lang="ts">
	export let expanded: boolean;
	export let toggleExpanded: () => void;
</script>

<div class="root" class:expanded>
	<div class="relative h-full w-full">
		<button
			class="absolute -right-3 top-10 hidden h-6 w-6 cursor-pointer rounded-full border bg-zinc-400 text-white sm:block"
			on:click={toggleExpanded}
		/>
	</div>
</div>

<style lang="postcss">
	.root {
		@apply absolute h-full w-0 shrink-0 border-r bg-white pt-14 transition-all ease-in-out;
		@apply min-h-screen sm:static sm:w-20;
	}

	.root.expanded {
		@apply w-4/5 sm:w-56 md:w-64;
	}
</style>
