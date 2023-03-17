<script lang="ts">
	import { groups } from '$lib/stores/groups';
	import { page } from '$app/stores';

	$: group = $groups.find((e) => e.id === $page.params.id);
</script>

<div>
	<h4>{group?.name}</h4>
	<h6>{group?.description}</h6>

	<h5>Members:</h5>
	{#each group?.members || [] as member}
		<p>{member.name}</p>
	{/each}
</div>
