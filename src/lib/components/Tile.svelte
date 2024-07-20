<script lang="ts">
	import type { Snippet } from 'svelte';

	const {
		children,
		title = undefined,
		notif = undefined,
		color = '#2A81EE',
		size = 'normal'
	}: {
		children: Snippet;
		title?: string | Snippet;
		notif?: string | Snippet;
		color?: string;
		size?: 'smol' | 'normal' | 'wide';
	} = $props();
</script>

<div class="tile {size}" style:--color={color}>
	{@render children()}
</div>

<style>
	.tile {
		width: calc(var(--spacing-32) + var(--spacing-2));
		height: calc(var(--spacing-32) + var(--spacing-2));
		grid-column: span 2 / span 2;
		grid-row: span 2 / span 2;
		position: relative;
		background-color: oklch(from var(--color) calc(l * 2) c h);
		display: flex;
		place-items: center;
		justify-content: center;
	}

	.smol {
		width: var(--spacing-16);
		height: var(--spacing-16);
		grid-column: span 1 / span 1;
		grid-row: span 1 / span 1;
	}

	.wide {
		width: calc(var(--spacing-64) + var(--spacing-6));
		grid-column: span 4 / span 4;
	}

	.title {
		position: absolute;
		bottom: 0;
		padding: var(--spacing-1) var(--spacing-2);
	}
</style>
