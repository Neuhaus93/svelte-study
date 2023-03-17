<script lang="ts">
	import { groups } from '$lib/stores/groups';
	import { page } from '$app/stores';

	export let data;

	$: ({ group } = data);
</script>

<div class="mx-8 mt-8 max-w-lg">
	<h4>{group.name}</h4>
	<h6>{group.description}</h6>

	<!-- <h6 class="mt-3">Members:</h6>
	{#each group.members || [] as member}
		<p>{member.name}</p>
	{/each} -->

	<form class="mt-5">
		<h3 class="mb-2">Nova despesa</h3>

		<div>
			<label>
				Título
				<input name="title" />
			</label>
		</div>

		<div>
			<label>
				Valor
				<input name="ammount" />
			</label>
		</div>

		<div>
			<label>
				Data
				<input type="date" />
			</label>
		</div>

		<!-- <div>
			<label>
				Pago por
				<select name="paid_for">
					{#each group?.members || [] as member}
						<option value={member.name}>{member.name}</option>
					{/each}
				</select>
			</label>
		</div> -->
	</form>
</div>
