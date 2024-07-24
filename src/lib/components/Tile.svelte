<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import type { Action } from 'svelte/action';

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

	let e: HTMLElement;
	let rect: DOMRect;

	let mouse = $state({
		x: 0,
		y: 0,
		w: 0,
		h: 0
	});

	function onmousemove(e: MouseEvent) {
		console.log(e);
		mouse = {
			x: e.offsetX,
			y: e.offsetY,
			w: e.currentTarget.offsetWidth,
			h: e.currentTarget.offsetHeight
		};
		console.log(mouse.x / mouse.w);
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_mouse_events_have_key_events -->
<div
	class="tile {size}"
	style:--color={color}
	style:--x={mouse.x}
	style:--y={mouse.y}
	style:--w={mouse.w}
	style:--h={mouse.h}
	style:--offsetX={size === 'smol' ? 2 : size === 'wide' ? 0.5 : 1}
	style:--offsetY={size === 'smol' ? 2 : 1}
	bind:this={e}
	{onmousemove}
>
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
		box-shadow: inset 0px 0px 0px calc(var(--spacing-0_5) / 2) rgba(255, 255, 255, 0.1);
		@supports (color: hsl(from white h s l)) {
			background: linear-gradient(
				to right,
				oklch(from var(--color) calc(l - 0.05) c h),
				oklch(from var(--color) calc(l + 0.05) c h)
			);
			color: oklch(from var(--color) calc(1 - ((l + 0.3) - mod(l + 0.3, 1))) 0 0);
			box-shadow: inset 0px 0px 0px calc(var(--spacing-0_5) / 2)
				oklch(from var(--color) calc(1 - ((l + 0.3) - mod(l + 0.3, 1))) 0 0 / 0.1);
		}
		display: flex;
		place-items: center;
		justify-content: center;
		transition: transform 0.2s;
		transform-style: preserve-3d;
		transform-origin: center center;
		user-select: none;
	}
	.tile > * {
		pointer-events: none;
	}

	/* eventually get these to take tile sizes into account */
	.tile:hover {
		transform: perspective(800px)
			rotateY(calc(2deg * var(--offsetY) * (var(--x) / var(--w) * 2 - 1)))
			rotateX(calc(-4deg * var(--offsetX) * (var(--y) / var(--h) * 2 - 1))) scale(0.999);
	}

	.tile:active {
		transform: perspective(800px)
			rotateY(calc(4deg * var(--offsetY) * (var(--x) / var(--w) * 2 - 1)))
			rotateX(calc(-6deg * var(--offsetX) * (var(--y) / var(--h) * 2 - 1))) scale(0.985);
	}

	.content {
		font-size: var(--font-size-4xl);
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
