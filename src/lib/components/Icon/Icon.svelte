<script lang="ts">
	import under_construction from '$lib/icons/under-construction';
	import type { IconName } from '$lib/icons/types';

	type DisplayIcon = {
		name: IconName;
		svg: string;
		viewBox: string;
	};

	export let name: DisplayIcon['name'];
	export let width: number | null = null;
	export let height: number | null = null;
	let icons: DisplayIcon[] = [
		{
			name: 'under-construction',
			svg: under_construction,
			viewBox: '0 0 1177.82 724.47'
		}
	];
	let displayIcon: DisplayIcon | undefined = icons.find((e) => e.name === name);
</script>

{#if !!displayIcon}
	<svg class={$$props.class} {width} {height} viewBox={displayIcon.viewBox}>
		{@html displayIcon.svg}
	</svg>
{/if}
