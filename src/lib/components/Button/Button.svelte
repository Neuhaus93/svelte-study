<script lang="ts">
	import clsx from 'clsx';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type $$Props = HTMLButtonAttributes & {
		size?: 'xs' | 'sm' | 'md' | 'lg';
		loading?: boolean;
	};

	export let size: NonNullable<$$Props['size']> = 'md';
	export let loading = false;

	$: sizeClass = `btn-${size}`;
</script>

<button
	{...$$props}
	class:loading
	class={clsx('no-animation btn', sizeClass, $$props.class)}
	on:click
>
	<slot />
</button>
