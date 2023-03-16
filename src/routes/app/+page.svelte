<script lang="ts">
	import { Icon } from '$lib/components/index';
	import { faker } from '@faker-js/faker';
	import { groups, groupSchema } from '$lib/stores/groups';
	import { z } from 'zod';

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

<!-- {#if $groups.length === 0}
	<Icon name="blank-canvas" width={250} />
	<h6 class="mt-2 text-slate-700">You don't have any group yet</h6>
{/if} -->

<section>
	<ul
		class="grid grid-cols-1 gap-4 bg-slate-50 p-4 text-sm leading-6 sm:grid-cols-2 sm:px-8 sm:pt-6 sm:pb-8 lg:grid-cols-1 lg:p-4 xl:grid-cols-2 xl:px-8 xl:pt-6 xl:pb-8"
	>
		{#each $groups as group}
			<li
				class="dark:highlight-white/10 group cursor-pointer rounded-md bg-white p-3 shadow-sm ring-1 ring-slate-200 hover:bg-blue-500 hover:shadow-md hover:ring-blue-500 dark:bg-slate-700 dark:ring-0 dark:hover:bg-blue-500"
			>
				<dl
					class="grid grid-cols-2 grid-rows-2 items-center sm:block lg:grid xl:block"
				>
					<div>
						<dt class="sr-only">Group name</dt>
						<dd class="font-semibold text-slate-900 group-hover:text-white">
							{group.name}
						</dd>
					</div>
					<div>
						<dt class="sr-only">Description</dt>
						<dd class="group-hover:text-blue-200">{group.description}</dd>
					</div>
					<div
						class="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4"
					>
						<dt class="sr-only">Users</dt>
						<dd
							class="flex justify-end -space-x-1.5 sm:justify-start lg:justify-end xl:justify-start"
						>
							{#each [...Array(3)] as item}
								<img
									src={faker.image.avatar()}
									alt="user.name"
									class="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white"
									loading="lazy"
								/>
							{/each}
						</dd>
					</div>
				</dl>
			</li>
		{/each}
		<li class="flex">
			<a
				href="/new"
				class="group flex w-full flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 py-3 text-sm font-medium leading-6 text-slate-900 hover:border-solid hover:border-blue-500 hover:bg-white hover:text-blue-500"
			>
				<svg
					class="mb-1 text-slate-400 group-hover:text-blue-500"
					width="20"
					height="20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z"
					/>
				</svg>
				New project
			</a>
		</li>
	</ul>
</section>

<!-- {#if $groups.length > 0}
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
{/if} -->

<div class="mt-6">
	<form
		class="max-w-md pb-2"
		bind:this={createGroupForm}
		on:submit|preventDefault={handleCreateGroup}
	>
		<div>
			<label>
				Group name
				<input type="text" name="name" maxlength={50} />
			</label>
		</div>

		<div class="mt-4">
			<label>
				<span class="mt-4">Description</span>

				<input name="description" />
			</label>
		</div>

		<button class="mt-4">Create group</button>
	</form>
</div>
