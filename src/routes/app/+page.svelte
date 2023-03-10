<script lang="ts">
	import { Button, Dialog, Input, Icon } from '$lib/components/index';

	const categories = ['Trip', 'House', 'Couple', 'Event', 'Project', 'Other'] as const;

	let selectedCategory: (typeof categories)[number] | undefined = undefined;
	let members: string[] = [''];

	let createGroupDialogOpen = false;

	const focusInput = (el: HTMLElement) => {
		el.focus();
	};

	const handleAddMember = () => {
		members = [...members, ''];
	};
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

	<Dialog open onClose={() => (createGroupDialogOpen = false)}>
		<form class="pb-2">
			<Input label="Group name" type="text" />
			<Input label="Description" multiline class="mt-2" />

			<div class="mt-2 text-start">
				<p class="label">Category</p>

				<fieldset class="categories">
					{#each categories as category}
						<div class="inline-block">
							<label
								class:badge-outline={selectedCategory !== category}
								class="badge badge-lg cursor-pointer"
								for={category}>{category}</label
							>
							<input
								id={category}
								type="radio"
								class="hidden"
								on:click={() => (selectedCategory = category)}
							/>
						</div>
					{/each}
				</fieldset>
			</div>

			<div class="mt-2">
				<p class="label -mb-2">Members</p>

				{#each members as member, i}
					<div class="flex">
						<Input
							useFn={focusInput}
							bind:value={member}
							class="flex-1"
							label={i === 0 ? 'My name' : 'Other member'}
							on:keydown={(e) => {
								if (e.code === 'Enter') {
									handleAddMember();
								}
							}}
						/>
						{#if i === members.length - 1}
							<Button type="button" class="ml-3 mt-9 px-6" on:click={handleAddMember}>Add</Button>
						{/if}
					</div>
				{/each}
			</div>
		</form>
	</Dialog>
</div>

<style lang="postcss">
	.categories > div + div {
		@apply ml-2;
	}
</style>
