<script lang="ts">
	import Tile from '$lib/components/Tile.svelte';
	import TileGroup from '$lib/components/TileGroup.svelte';
	import Unikara from '$lib/components/Unikara.svelte';
	import DeviconPlainSvelte from '~icons/devicon-plain/svelte';
	import LogosTailwindcssIcon from '~icons/logos/tailwindcss-icon';
	import LogosVitejs from '~icons/logos/vitejs';
	import Fa6BrandsCss from '~icons/fa6-brands/css';
	import DeviconHtml5 from '~icons/devicon/html5';
	import LogosBun from '~icons/logos/bun';
	import DeviconNixos from '~icons/devicon/nixos';
	import Clock from '$lib/components/Clock.svelte';
</script>

<div class="w-full flex items-center">
	<div class="prose">
		<h1>Hi! I'm Tibet!</h1>

		<blockquote>Most things on this site don't work yet!</blockquote>
		<br />

		<div class="group inline-grid grid-flow-dense auto-rows-max gap-2 w-full">
			<Clock></Clock>
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
				<LogosTailwindcssIcon class="w-12"></LogosTailwindcssIcon>
			</Tile>
			<Tile size="smol" color="#2e3050">
				<LogosVitejs></LogosVitejs>
			</Tile>
			<Tile size="smol" color="white">
				<DeviconHtml5></DeviconHtml5>
			</Tile>
			<Tile size="smol" color="rebeccapurple">
				<Fa6BrandsCss></Fa6BrandsCss>
			</Tile>
			<Tile size="smol" color="#fbf0df"><LogosBun></LogosBun></Tile>
			<Tile size="smol" color="#2b2b2f"><DeviconNixos></DeviconNixos></Tile>
		</div>
		<p></p>

		<p>To work on these things:</p>

		<div class="group inline-grid grid-flow-dense auto-rows-max gap-2 w-full">
			<Tile color="#62BACF" href="https://unikara.moe" title="Unikara"><Unikara></Unikara></Tile>
			<Tile size="normal" href="https://crabrave.vercel.app/" title="Crabrave">🦀</Tile>
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
		grid-template-columns: repeat(auto-fit, minmax(16tw, 16tw));
	}
</style>
