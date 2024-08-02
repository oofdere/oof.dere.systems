<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children, title }: { children: Snippet; title?: string } = $props();
</script>

<div class="p-2">
	<div>{title}</div>
	<div class="group inline-grid grid-flow-dense auto-rows-max gap-2 w-full justify-center">
		{@render children()}
	</div>
</div>

<style>
	.group {
		grid-template-columns: repeat(auto-fit, minmax(16tw, 16tw));
		@media (width >= 48rem /* 768px */) {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}
</style>
