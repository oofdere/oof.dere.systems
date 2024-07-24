<script lang="ts">
	import Tile from '$lib/components/Tile.svelte';
	import TileGroup from '$lib/components/TileGroup.svelte';
	import DeviconPlainSvelte from '~icons/devicon-plain/svelte';
	import LogosSvelteKit from '~icons/logos/svelte-kit';
	import CibLastFm from '~icons/cib/last-fm';
	import SimpleIconsAnilist from '~icons/simple-icons/anilist';
	import SimpleIconsTwitter from '~icons/simple-icons/twitter';
	import SimpleIconsGithub from '~icons/simple-icons/github';
	import LineMdRedditLoop from '~icons/line-md/reddit-loop';
	import FluentPlayCircleHint16Filled from '~icons/fluent/play-circle-hint-16-filled';
	import LogosTailwindcssIcon from '~icons/logos/tailwindcss-icon';
	import LogosVitejs from '~icons/logos/vitejs';
	import DeviconCss3 from '~icons/devicon/css3';
	import DeviconHtml5 from '~icons/devicon/html5';
	import LogosBun from '~icons/logos/bun';
	import DeviconNixos from '~icons/devicon/nixos';
	import LogosHuggingFaceIcon from '~icons/logos/hugging-face-icon';

	let color = $state('#ec4d29');
</script>

<div class="flex gap-2">
	<TileGroup title="find me on">
		<Tile color="#C3000D" title="last.fm" size="wide">
			<CibLastFm color="#fff"></CibLastFm>
			{#snippet notif()}
				<FluentPlayCircleHint16Filled></FluentPlayCircleHint16Filled>
			{/snippet}
		</Tile>
		<Tile color="#2B2E41" title="AniList" size="wide"
			><SimpleIconsAnilist></SimpleIconsAnilist></Tile
		>
		<Tile color="#1F9FF4" title="Twitter"><SimpleIconsTwitter></SimpleIconsTwitter></Tile>
		<Tile color="#333" size="smol"><SimpleIconsGithub></SimpleIconsGithub></Tile>
		<Tile color="#FF4500" size="smol"><LineMdRedditLoop></LineMdRedditLoop></Tile>
		<Tile size="smol"><LogosHuggingFaceIcon></LogosHuggingFaceIcon></Tile>
	</TileGroup>

	<TileGroup title="built with">
		<Tile color="#ec4d29" title="Svelte 5">
			<DeviconPlainSvelte color="#fff"></DeviconPlainSvelte>
		</Tile>
		<Tile color="#eee" title="TailwindCSS 4">
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
	</TileGroup>
</div>

<style>
	:root {
		background-color: black;
		color: white;
	}
</style>
