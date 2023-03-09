<script lang="ts">
	import { Icon } from '$lib/components/Icon';
	import { Button } from '$lib/components/Button';
</script>

<div class="min-v-screen flex min-h-screen flex-col items-center justify-center sm:flex-row">
	<Icon name="under-construction" width={320} />

	<div class="flex flex-col items-center">
		<h2 class="mt-8 mb-2 font-bold uppercase sm:ml-4">Under Construction</h2>
		<a href="/">
			<Button>Go back to Login</Button>
		</a>
	</div>
</div>
