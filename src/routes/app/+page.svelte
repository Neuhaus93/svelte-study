<script lang="ts">
	import { Button, Dialog, Icon } from '$lib/components/index';

	let createGroupDialogOpen = false;
</script>

<Icon name="blank-canvas" width={250} />

<div class="mt-6 text-center">
	<h6 class="mb-2 text-slate-700">You don't have any group yet</h6>
	<Button
		class="btn-primary"
		on:click={() => {
			createGroupDialogOpen = true;
		}}>Start new group</Button
	>

	<Dialog
		open={createGroupDialogOpen}
		onClose={() => {
			createGroupDialogOpen = false;
		}}
	>
		<form />
	</Dialog>
</div>
