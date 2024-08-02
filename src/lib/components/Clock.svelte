<script>
	import Tile from './Tile.svelte';
	import { formatDate, getHours, getMinutes, getSeconds, intlFormat } from 'date-fns';

	let t = $state({
		hour: 0,
		minute: 0,
		second: 0,
		day: 'day',
		behind: 'some hours behind'
	});

	setInterval(() => {
		const time = Date.now();
		t.hour = getHours(time);
		t.minute = getMinutes(time);
		t.second = getSeconds(time);
		t.day = intlFormat(time);
	}, 100);
</script>

<Tile size="wide" title="Clock">
	<div class="flex flex-col h-full place-content-center">
		<div class="text-6xl">{t.hour}:{t.minute}:{t.second}</div>
		<div class="text-2xl">{t.day}</div>
	</div>
</Tile>
