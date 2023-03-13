<script lang="ts">
	let values: any = {
		name: '',
		description: '',
		category: undefined
	};
	$: ({ name, description, category } = values);

	let nameError = '';
	let descriptionError = '';

	$: {
		console.log('[1]');
		if (name.length > 10) {
			nameError = 'Name too long';
		}
	}

	$: {
		console.log('[2]');
		if (description.length > 10) {
			descriptionError = 'Description too long';
		}
	}
</script>

<form>
	<input class="input-bordered input" bind:value={values.name} name="name" />
	<p>{nameError}</p>

	<input
		class="input-bordered input mt-2"
		bind:value={values.description}
		name="description"
	/>
	<p>{descriptionError}</p>
</form>
