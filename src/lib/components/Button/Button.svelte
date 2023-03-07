<script>
	import clsx from 'clsx';
</script>

<button {...$$props} class={clsx('btn', $$props.class)}>
	<slot />
</button>
