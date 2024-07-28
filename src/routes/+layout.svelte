<script lang="ts">
	const { children } = $props();

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
	import FluentMdl2SurveyQuestions from '~icons/fluent-mdl2/survey-questions';
	import TwemojiConstruction from '~icons/twemoji/construction';

	import '../app.css';
</script>

<div class="flex h-screen w-[200vw] sm:w-screen snap-mandatory snap-x">
	<div
		class="flex flex-col gap-2 flex-none h-full overflow-y-scroll w-screen sm:w-auto snap-center"
	>
		<TileGroup>
			<Tile title="Under Construction"><TwemojiConstruction></TwemojiConstruction></Tile>
			<Tile title="About Me"><FluentMdl2SurveyQuestions></FluentMdl2SurveyQuestions></Tile>
		</TileGroup>

		<TileGroup title="find me on">
			<Tile href="https://last.fm/user/oofdere" color="#C3000D" title="last.fm" size="wide">
				<CibLastFm color="#fff"></CibLastFm>
				{#snippet live()}
					<div class="flex gap-2">
						<div class="size-24 bg-amber-300">
							<img
								class="aspect-square object-contain shrink"
								src="https://lastfm.freetls.fastly.net/i/u/300x300/036a4653579ed0945d8c410acc1a9472.jpg"
							/>
						</div>
						<div class="text-sm">
							<p class="text-lg">Now Playing</p>
							<p>Little Raindrop</p>
							<p>Static-P</p>
							<p>298th listen</p>
						</div>
					</div>
				{/snippet}

				{#snippet notif()}
					<FluentPlayCircleHint16Filled></FluentPlayCircleHint16Filled>
				{/snippet}
			</Tile>
			<Tile href="https://anilist.co/user/oofdere" color="#2B2E41" title="AniList" size="wide">
				<SimpleIconsAnilist></SimpleIconsAnilist>
			</Tile>
			<Tile href="https://twitter.com/oofdere" color="#1F9FF4" title="Twitter">
				<SimpleIconsTwitter></SimpleIconsTwitter>
			</Tile>
			<Tile href="https://github.com/oofdere" title="GitHub" color="#333">
				<SimpleIconsGithub></SimpleIconsGithub>
			</Tile>
		</TileGroup>

		<TileGroup title="built with">
			<Tile color="#ec4d29" title="Svelte 5" href="https://svelte-5-preview.vercel.app/">
				<DeviconPlainSvelte color="#fff"></DeviconPlainSvelte>
			</Tile>
			<Tile
				color="#eee"
				title="TailwindCSS 4"
				href="https://tailwindcss.com/blog/tailwindcss-v4-alpha"
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
		</TileGroup>

		<hr />

		copyright current year me<br /> all logos are property of their owners <br />reminder: put AACS
		key here
	</div>
	<div class="w-screen sm:w-full snap-center">
		{@render children()}
	</div>
</div>

<style>
	:root {
		background-color: black;
		color: white;
	}
</style>
