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
	<div class="content">
		{@render children()}
	</div>

	{#if title}
		<div class="title">
			{#if typeof title === 'string'}
				{title}
			{:else}
				{@render title()}
			{/if}
		</div>
	{/if}

	{#if notif}
		<div class="notif">
			{#if typeof notif === 'string'}
				{notif}
			{:else}
				{@render notif()}
			{/if}
		</div>
	{/if}

	<div class="glow"></div>
</div>

<style>
	.tile {
		width: calc(var(--spacing-32) + var(--spacing-2));
		height: calc(var(--spacing-32) + var(--spacing-2));
		grid-column: span 2 / span 2;
		grid-row: span 2 / span 2;
		position: relative;
		background-color: var(--color);
		background: linear-gradient(
			to right,
			oklch(from var(--color) calc(l - 0.03) c h),
			oklch(from var(--color) calc(l + 0.03) c h)
		);
		display: flex;
		place-items: center;
		justify-content: center;
		color: oklch(from var(--color) calc(1 - ((l + 0.3) - mod(l + 0.3, 1))) 0 0);
		box-shadow: inset 0px 0px 0px calc(var(--spacing-0_5) / 2)
			oklch(from var(--color) calc(1 - ((l + 0.5) - mod(l + 0.5, 1))) 0 0 / 0.1);
	}

	.content {
		font-size: var(--font-size-3xl);
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
		left: 0;
		padding: var(--spacing-1) var(--spacing-2);
	}

	.notif {
		position: absolute;
		bottom: 0;
		right: 0;
		font-weight: 700;
		padding: var(--spacing-1) var(--spacing-2);
	}
</style>
