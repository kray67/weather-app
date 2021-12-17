<script>
	import { fly } from 'svelte/transition';
</script>

<div
	in:fly={{ x: -5, duration: 500 }}
	out:fly={{ x: 5, duration: 500 }}
	class="w-full h-full absolute top-0 left-0 flex flex-col items-center justify-center z-10"
>
	<img class="w-60 z-10" src="./images/animated/weather.svg" alt="Spinner" />
	<p class="font-mono text-white text-lg z-10">LOADING...</p>
	<div class="w-full h-full absolute opacity-75" style="background-color: #0E2E3A" />
</div>
