<script lang="ts">
	import { Button, Dialog, Icon, Input } from '$lib/components/index';
	import { groups, groupSchema } from '$lib/stores/groups';
	import { z } from 'zod';
	import CreateGroupForm from './CreateGroupForm.svelte';

	const categories = [
		'Trip',
		'House',
		'Couple',
		'Event',
		'Project',
		'Other'
	] as const;

	let createGroupForm: HTMLFormElement | null = null;
	// let selectedCategory: (typeof categories)[number] | undefined = undefined;
	let createGroupDialogOpen = false;
	let errors = {} as { name?: string[] };

	/**
	 * Handles creating a group
	 */
	const handleCreateGroup = (e: SubmitEvent) => {
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData);

		try {
			const parsedData = groupSchema.parse(data);
			groups.set([...$groups, parsedData]);
			createGroupDialogOpen = false;
		} catch (err) {
			if (err instanceof z.ZodError) {
				errors = err.flatten().fieldErrors;
			}
		}
	};

	$: {
		// Resets the group form when opening the dialog
		if (createGroupDialogOpen && createGroupForm) {
			createGroupForm.reset();
		}
	}
</script>

{#if $groups.length === 0}
	<Icon name="blank-canvas" width={250} />
	<h6 class="mt-2 text-slate-700">You don't have any group yet</h6>
{/if}

{#if $groups.length > 0}
	<div class="grid grid-cols-2 gap-4">
		{#each $groups as group}
			<div class="h-28 w-32 rounded-md border p-2">
				<h3 class="text-lg font-bold">{group.name}</h3>

				{#if group.description}
					<h4>{group.description}</h4>
				{/if}

				{#if group.category}
					<h4>{group.category}</h4>
				{/if}
			</div>
		{/each}
	</div>
{/if}

<div class="mt-6">
	<Button class="btn-primary" on:click={() => (createGroupDialogOpen = true)}
		>Start new group</Button
	>

	<Dialog open onClose={() => {}}>
		<CreateGroupForm />
	</Dialog>

	<Dialog open={false} onClose={() => (createGroupDialogOpen = false)}>
		<form
			bind:this={createGroupForm}
			class="pb-2"
			on:submit|preventDefault={handleCreateGroup}
		>
			<Input
				label="Group name"
				type="text"
				name="name"
				maxlength={5}
				error={errors.name?.[0]}
			/>
			<Input label="Description" multiline class="mt-2" name="description" />

			<div class="mt-2 text-start">
				<p class="label">Category</p>

				<div role="radiogroup">
					{#each categories as category}
						<!-- {@const selected = selectedCategory === category} -->
						<input type="radio" name="category" value={category} />
						<!-- <button
							type="button"
							role="radio"
							aria-checked={selected}
							class="badge badge-lg"
							class:badge-outline={!selected}
							on:click={() => {
								if (selectedCategory === category) {
									selectedCategory = undefined;
									return;
								}

								selectedCategory = category;
							}}
						>
							{category}
						</button> -->
					{/each}
				</div>
			</div>

			<Button class="mt-4 ml-auto block">Create group</Button>
		</form>
	</Dialog>
</div>
