<script lang="ts">
	import { groups } from '$lib/stores/groups';
	import { page } from '$app/stores';

	$: group = $groups.find((e) => e.id === $page.params.id);
</script>

<div>
	{JSON.stringify(group)}
</div>
