<script lang="ts">
	import Tile from '$lib/components/Tile.svelte';
	import TileGroup from '$lib/components/TileGroup.svelte';
	import DeviconPlainSvelte from '~icons/devicon-plain/svelte';
	import LogosSvelteKit from '~icons/logos/svelte-kit';

	let color = $state('#ec4d29');
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the docgerumentrfveration</p>

<Tile {color} title="Svelte 5"><DeviconPlainSvelte></DeviconPlainSvelte></Tile>
<input type="color" bind:value={color} />

<TileGroup title="group name">
	<Tile color="#EC4D29" size="smol"><DeviconPlainSvelte color="#fff"></DeviconPlainSvelte></Tile>
	<Tile color="#EC4D29" title="Svelte 5"><DeviconPlainSvelte></DeviconPlainSvelte></Tile><Tile
		color="#d6d2ff"
		title="Svelte 5"><DeviconPlainSvelte></DeviconPlainSvelte></Tile
	>
	<Tile size="smol">starts</Tile>
	<Tile size="wide"><DeviconPlainSvelte color="#fff"></DeviconPlainSvelte></Tile>
</TileGroup>
