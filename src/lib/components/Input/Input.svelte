<script lang="ts">
	import clsx from 'clsx';
	import type { HTMLInputAttributes, HTMLTextareaAttributes } from 'svelte/elements';
	import type { ElementUse } from '$lib/types';

	type $$Props = HTMLInputAttributes &
		HTMLTextareaAttributes & {
			id?: string;
			label?: string;
			multiline?: boolean;
			useFn?: ElementUse;
		};

	export let id: NonNullable<$$Props['id']> = '';
	export let label: NonNullable<$$Props['label']> = '';
	export let multiline: NonNullable<$$Props['multiline']> = false;
	export let value: $$Props['value'] = undefined;
	export let useFn: ElementUse = () => {};

	// If a label is given but no ID, we should generate a random ID to have it working
	$: idToUse = !!label && !id ? crypto.randomUUID().substring(0, 8) : id;
</script>

<div class={clsx('Input-root form-control', $$props.class)}>
	{#if label}
		<label class="label" for={id}>
			<span class="label-text">{label}</span>
		</label>
	{/if}

	{#if multiline}
		<textarea
			bind:value
			{...$$restProps}
			id={idToUse}
			class="Input-input textarea-bordered textarea"
			on:change
			on:keydown
		/>
		<!-- use:use -->
	{:else}
		<input
			use:useFn
			bind:value
			{...$$restProps}
			id={idToUse}
			class="Input-input input-bordered input"
			on:change
			on:keydown
		/>
	{/if}
</div>
