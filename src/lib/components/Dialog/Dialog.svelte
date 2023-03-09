<script lang="ts">
	export let open: boolean;
	export let onClose: () => void;
	export let preventBackdropClose: boolean = false;

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

<div class="modal" class:modal-open={open} on:click={handleBackdropClick} aria-hidden="true">
	<div class="modal-box" on:click|stopPropagation aria-hidden="true">
		<slot />
	</div>
</div>
