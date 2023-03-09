<script lang="ts">
	import clsx from 'clsx';

	export let id = crypto.randomUUID();
	export let placeholder: string;
	export let label: string;
</script>

{#if label}
	<div class="form-control">
		<label class="label" for={id}>
			<span class="label-text">{label}</span>
		</label>
		<input {id} {placeholder} class={clsx('input', $$props.class)} on:change />
	</div>
{:else}
	<input {id} {placeholder} class="input" on:change />
{/if}
