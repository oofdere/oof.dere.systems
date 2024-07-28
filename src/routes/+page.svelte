<script lang="ts">
	import Tile from '$lib/components/Tile.svelte';
	import TileGroup from '$lib/components/TileGroup.svelte';
	import Unikara from '$lib/components/Unikara.svelte';
	import DeviconPlainSvelte from '~icons/devicon-plain/svelte';
	import LogosTailwindcssIcon from '~icons/logos/tailwindcss-icon';
	import LogosVitejs from '~icons/logos/vitejs';
	import DeviconCss3 from '~icons/devicon/css3';
	import DeviconHtml5 from '~icons/devicon/html5';
	import LogosBun from '~icons/logos/bun';
	import DeviconNixos from '~icons/devicon/nixos';
	let color = $state('#ec4d29');
</script>

<div class="w-full flex items-center">
	<div class="prose">
		<h1>Hi! I'm Tibet!</h1>

		<blockquote>Most things on this site don't work yet!</blockquote>
		<br />

		<div class="group inline-grid grid-flow-dense auto-rows-max gap-2 w-full">
			<Tile size="wide">clock</Tile>
			<Tile size="wide">weather</Tile>
		</div>
		<p></p>

		<p>
			I like making things, with a particular focus on things that make it possible for others to
			make more things.
		</p>

		<p>I use these things:</p>
		<div class="group inline-grid grid-flow-dense auto-rows-max gap-2 w-full">
			<Tile
				size="smol"
				color="#ec4d29"
				title="Svelte 5"
				href="https://svelte-5-preview.vercel.app/"
			>
				<DeviconPlainSvelte color="#fff"></DeviconPlainSvelte>
			</Tile>
			<Tile
				color="#eee"
				title="TailwindCSS 4"
				href="https://tailwindcss.com/blog/tailwindcss-v4-alpha"
				size="smol"
			>
				<LogosTailwindcssIcon></LogosTailwindcssIcon>
			</Tile>
			<Tile size="smol">
				<LogosVitejs></LogosVitejs>
			</Tile>
			<Tile size="smol">
				<DeviconHtml5></DeviconHtml5>
			</Tile>
			<Tile size="smol">
				<DeviconCss3></DeviconCss3>
			</Tile>
			<Tile size="smol"><LogosBun></LogosBun></Tile>
			<Tile size="smol"><DeviconNixos></DeviconNixos></Tile>
		</div>
		<p></p>

		<p>To work on these things:</p>

		<div class="group inline-grid grid-flow-dense auto-rows-max gap-2 w-full">
			<Tile color="#62BACF" href="https://unikara.moe" title="Unikara"><Unikara></Unikara></Tile>
			<Tile size="normal" href="https://crabrave.vercel.app/" title="Crabrave">🦀</Tile>
			<Tile size="normal" href="https://mts.muda.software/" title="Multi-track Search">🚅</Tile>
			<Tile size="normal" color="#7FFF6A" href="https://beta.kvcm.live/" title="kvcm.live">
				<img
					src="/kvcmlive.png"
					alt="kvcm.live"
					class="w-[1.25em] aspect-square"
					width="1.2em"
					height="1.2em"
				/>
			</Tile>
		</div>
		<p></p>
		<p>You can contact me at oofdere (at) hey (dot) com or Discord @oofdere.</p>

		<p>love you &lt;3</p>
	</div>
</div>

<style>
	.group {
		grid-template-columns: repeat(auto-fit, minmax(var(--spacing-16), var(--spacing-16)));
	}
</style>
