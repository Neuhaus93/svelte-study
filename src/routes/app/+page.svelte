<script lang="ts">
	import { enhance } from '$app/forms';
	import { createGroupSchema, groups } from '$lib/stores/groups';
	import { generateUUID } from '$lib/utils';
	import { fade } from 'svelte/transition';
	import { z } from 'zod';

	export let data;

	let createGroupForm: HTMLFormElement | null = null;
	let newGroupUi: 'CREATE' | 'TRANSITION' | 'NEW' = 'CREATE';

	let groupNameInput: HTMLInputElement;

	let errors = {} as { name?: string[] };

	/**
	 * Handles creating a group
	 */
	const handleCreateGroup = (e: SubmitEvent) => {
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);
		const data = { ...Object.fromEntries(formData), members: [] };

		try {
			const parsedData = createGroupSchema.parse(data);
			groups.set([...$groups, { ...parsedData, id: generateUUID() }]);
			newGroupUi = 'TRANSITION';
			createGroupForm?.reset();
		} catch (err) {
			if (err instanceof z.ZodError) {
				errors = err.flatten().fieldErrors;
				console.log(errors);
			}
		}
	};
</script>

<section class="bg-slate-50 p-4">
	<div class="grid grid-cols-1 gap-4 text-sm leading-6 lg:grid-cols-2">
		{#each data.groups as group}
			<div
				class="dark:highlight-white/10 group cursor-pointer rounded-md bg-white p-3 shadow-sm ring-1 ring-slate-200 hover:bg-blue-500 hover:shadow-md hover:ring-blue-500 dark:bg-slate-700 dark:ring-0 dark:hover:bg-blue-500"
			>
				<a href={`/app/group/${group.id}`}>
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
								{#each group.members || [] as member}
									<img
										src={member.photo}
										alt="Member"
										class="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white"
										loading="lazy"
									/>
								{/each}
							</dd>
						</div>
					</dl>
				</a>
			</div>
		{/each}
		{#if newGroupUi === 'CREATE'}
			<div
				role="button"
				transition:fade|local
				on:outrostart={() => {}}
				on:outroend={() => (newGroupUi = 'NEW')}
				on:click={() => (newGroupUi = 'TRANSITION')}
				on:keydown={() => (newGroupUi = 'TRANSITION')}
				class="group flex w-full cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 py-3 text-sm font-medium leading-6 text-slate-900 hover:border-solid hover:border-blue-500 hover:bg-white hover:text-blue-500"
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
				New group
			</div>
		{/if}
	</div>
	{#if newGroupUi === 'NEW'}
		<!-- on:submit|preventDefault={handleCreateGroup} -->
		<form
			transition:fade|local
			on:outroend={() => (newGroupUi = 'CREATE')}
			class="mx-auto mt-8 max-w-md pb-2"
			bind:this={createGroupForm}
			action="/app?/createGroup"
			method="POST"
			use:enhance
		>
			<div>
				<label>
					Group name
					<!-- svelte-ignore a11y-autofocus -->
					<input
						bind:this={groupNameInput}
						type="text"
						name="name"
						maxlength={50}
						autofocus
					/>
				</label>
			</div>

			<div class="mt-4">
				<label>
					<span class="mt-4">Description</span>

					<input name="description" />
				</label>
			</div>

			<div class="mt-4 flex justify-between">
				<button type="button" on:click={() => (newGroupUi = 'TRANSITION')}
					>Cancel</button
				>
				<button type="submit">Create group</button>
			</div>
		</form>
	{/if}
</section>
