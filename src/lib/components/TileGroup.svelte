<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children, title }: { children: Snippet; title?: string } = $props();
</script>

<div class="p-2">
	<div>{title}</div>
	<div class="inline-grid grid-cols-4 gap-2">
		{@render children()}
	</div>
</div>
