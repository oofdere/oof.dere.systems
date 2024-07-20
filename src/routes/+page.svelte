<script lang="ts">
	import Tile from '$lib/components/Tile.svelte';
	import TileGroup from '$lib/components/TileGroup.svelte';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<TileGroup title="group name">
	<Tile size="smol">the</Tile>
	<Tile>WOW</Tile>
	<Tile size="smol">starts</Tile>
	<Tile size="wide">NOW</Tile>
</TileGroup>
