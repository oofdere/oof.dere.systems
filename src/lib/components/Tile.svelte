<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import type { Action } from 'svelte/action';

	const {
		children,
		live,
		title = undefined,
		notif = undefined,
		color = '#2A81EE',
		size = 'normal',
		href,
		...props
	}: {
		children: Snippet;
		live?: Snippet;
		title?: string | Snippet;
		notif?: string | Snippet;
		color?: string;
		size?: 'smol' | 'normal' | 'wide';
		href?: string;
		props?: any;
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
		mouse = {
			x: e.offsetX,
			y: e.offsetY,
			w: e.currentTarget.offsetWidth,
			h: e.currentTarget.offsetHeight
		};
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_mouse_events_have_key_events -->
<svelte:element
	this={href ? 'a' : 'button'}
	draggable={false}
	class="tile {size} flex flex-col px-4 p-0_5 gap-0_5"
	style:--color={color}
	style:--x={mouse.x}
	style:--y={mouse.y}
	style:--w={mouse.w}
	style:--h={mouse.h}
	style:--offsetX={size === 'smol' ? 2 : size === 'wide' ? 0.5 : 1}
	style:--offsetY={size === 'smol' ? 2 : 1}
	bind:this={e}
	{onmousemove}
	{href}
	{...props}
>
	<div
		class="content drag-none h-full {live
			? 'w-full'
			: ''} flex items-center place-items-center {size === 'smol' ? 'text-4xl' : 'text-6xl'}"
	>
		{#if live}
			{@render live()}
		{:else}
			{@render children()}
		{/if}
	</div>

	{#if size !== 'smol'}
		<div class="bo'om flex justify-between w-full items-center">
			{#if title}
				<div class="title">
					{#if typeof title === 'string'}
						{title}
					{:else}
						{@render title()}
					{/if}
				</div>
			{/if}
			<div class="notif">
				{#if notif}
					{#if typeof notif === 'string'}
						{notif}
					{:else}
						{@render notif()}
					{/if}
				{/if}
			</div>
		</div>
	{/if}

	<div
		class="b absolute top-0 left-0 w-full h-full mix-blend-overlay opacity-20 pointer-events-none"
	></div>
</svelte:element>

<style>
	.tile {
		user-drag: none;
		width: 34tw;
		height: 34tw;
		grid-column: span 2 / span 2;
		grid-row: span 2 / span 2;
		position: relative;
		background-color: var(--color);
		@supports (color: hsl(from white h s l)) {
			background: linear-gradient(
				to right,
				oklch(from var(--color) calc(l - 0.05) c h),
				oklch(from var(--color) calc(l + 0.05) c h)
			);
			color: oklch(from var(--color) calc(1 - ((l + 0.3) - mod(l + 0.3, 1))) 0 0);
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

	.tile:hover {
		transform: perspective(800px)
			rotateY(calc(4deg * var(--offsetY) * (var(--x) / var(--w) * 2 - 1)))
			rotateX(calc(-6deg * var(--offsetX) * (var(--y) / var(--h) * 2 - 1))) scale(0.999);
	}

	.tile:active {
		transform: perspective(800px)
			rotateY(calc(6deg * var(--offsetY) * (var(--x) / var(--w) * 2 - 1)))
			rotateX(calc(-8deg * var(--offsetX) * (var(--y) / var(--h) * 2 - 1))) scale(0.985);
	}

	.b {
		box-shadow: inset 0px 0px 0px 0.5tw rgba(255, 255, 255, 1);
	}

	.smol {
		width: 16tw;
		height: 16tw;
		grid-column: span 1 / span 1;
		grid-row: span 1 / span 1;
		font-size: var(--font-size-4xl) !important;
	}

	.wide {
		width: 70tw;
		grid-column: span 4 / span 4;
	}
</style>
