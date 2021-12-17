<!-- * SCRIPTS -->
<script>
    import { fly } from "svelte/transition"
	import Spinner from '../components/Spinner.svelte'
	import ButtonComponent from '../components/ButtonComponent.svelte'
	import DayComponent from '../components/DayComponent.svelte'
	import { weather, fetchWeather } from '../stores/weatherStore'
	import { cities } from '../mock/cities'
	let lat = '38.7167'
	let lon = '-9.1333'
	let updating = false;

	const fetchWeatherHandler = (lat, lon) => {
		updating = true
		$weather = undefined
		//! TIMEOUT TO SIMULATE SLOW RESPONSE
		// const rando = Math.floor(Math.random() * (1500 - 250) + 250);
		setTimeout(() => {
			fetchWeather(lat, lon)
			.then(() => {
					console.log($weather)
				})
		}, 2000);
		setTimeout(() => {
			updating = false
		}, 3500);
	};
	fetchWeatherHandler(lat, lon)
</script>

<!-- * HEAD -->
<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="flex items-center justify-evenly mb-10">
	{#each cities as city}
		<ButtonComponent {city} clicked={() => fetchWeatherHandler(city.lat, city.lon)} />
	{/each}
</div>
{#if $weather}
	{#if $weather.hasError}
		<div
		 in:fly={{ x: -5, duration: 500, delay: 1500 }} out:fly={{ x: 5, duration: 500}}
		 class="flex flex-col items-center justify-center w-full h-full">
		 	<img class="w-40" src="./images/animated/Error.svg" alt="Error">
			<p class="text-3xl font-mono font-bold text-red-700 text-center">An error has occured. <br> Please try again, later.</p>
		</div>
	{:else}
		<div class="flex flex-col">
			<h2 in:fly={{ x: -5, duration: 500, delay: 500 }} out:fly={{ x: 5, duration: 500}} class="text-4xl uppercase self-center mb-5">{`${$weather.city}, ${$weather.continent}`}</h2>

			<div class="flex items-center justify-evenly">
				{#each $weather.daily as day, idx}
					<div in:fly={{ x: -5, duration: 500, delay: 100 + (100 * idx) }} out:fly={{ x: 5, duration: 500, delay: 100 + (100 * idx) }}>
						<DayComponent {day} />
					</div>
				{/each}
			</div>
		</div>
	{/if}
{/if}
{#if updating}
	<Spinner />
{/if}
