<script lang="ts">
	import clsx from 'clsx';
	import type { SvelteHTMLElements } from 'svelte/elements';

	type $$Props = SvelteHTMLElements['div'] & {
		open: boolean;
		onClose: VoidFunction;
		preventBackdropClose?: boolean;
	};

	export let open: $$Props['open'];
	export let onClose: $$Props['onClose'];
	export let preventBackdropClose: NonNullable<$$Props['preventBackdropClose']> = false;

	/**
	 * Closes the dialog if "preventBackropClose" value is false (default value)
	 */
	const handleBackdropClick = () => {
		if (preventBackdropClose) {
			return;
		}

		onClose();
	};
</script>

<div
	{...$$restProps}
	class={clsx('modal', $$restProps.class)}
	class:modal-open={open}
	on:click={handleBackdropClick}
	aria-hidden="true"
>
	<div class="modal-box" on:click|stopPropagation aria-hidden="true">
		<slot />
	</div>
</div>
