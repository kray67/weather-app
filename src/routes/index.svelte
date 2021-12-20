<!-- * SCRIPTS -->
<script>
    import { fly, fade } from "svelte/transition"
	import Spinner from '../components/Spinner.svelte'
	import SearchComponent from '../components/SearchComponent.svelte'
	import SearchResultsComponent from "../components/SearchResultsComponent.svelte"
	// import ButtonComponent from '../components/ButtonComponent.svelte'
	import DayComponent from '../components/DayComponent.svelte'
	import { weather, fetchWeather, cityList, fetchCities } from '../stores/weatherStore'
	// import { cities } from '../mock/cities'
	
	let searchTerm = ''
	let updating = false;
	let userHasSearched = false
	let cityToShow = ''

	const fetchCitiesHandler = (searchTerm) => {
		updating = true
		$cityList = undefined
		//! TIMEOUT TO SIMULATE SLOW RESPONSE
		setTimeout(() => {
			fetchCities(searchTerm).then(() => {
				userHasSearched = true
			})
		}, 1500)
		setTimeout(() => {
			updating = false
		}, 2000)
	}

	const fetchWeatherHandler = (lat, lon, cityName) => {
		updating = true
		$cityList = undefined
		$weather = undefined
		userHasSearched = false
		//! TIMEOUT TO SIMULATE SLOW RESPONSE
		setTimeout(() => {
			fetchWeather(lat, lon).then(() => {
				cityToShow = cityName
				searchTerm = ''
			})
		}, 2000)
		setTimeout(() => {
			updating = false
		}, 3000)
	}
</script>

<!-- * HEAD -->
<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="flex flex-col items-center justify-center w-full mb-10">
	<SearchComponent {searchTerm} onSubmit={(searchTerm) => fetchCitiesHandler(searchTerm)} />
	{#if userHasSearched}
		{#if $cityList && $cityList.length}
			<div transition:fade class="flex flex-col gap-y-3 mx-auto">
				{#each $cityList as city}
					<SearchResultsComponent {city} clicked={() => fetchWeatherHandler(city.coord.lat, city.coord.lon, city.name)} />
				{/each}
			</div>
		{:else}
			<div transition:fade class="flex flex-col gap-y-3 mx-auto">
				<div class="row from-left rounded-lg py-2 px-5">
					<h1>No results</h1>
				</div>
			</div>
		{/if}
	{/if}
</div>

<!-- <div class="flex items-center justify-evenly mb-10 flex-wrap">
	{#each cities as city}
		<ButtonComponent {city} clicked={() => fetchWeatherHandler(city.lat, city.lon)} />
	{/each}
</div> -->

{#if $weather}
	{#if $weather.hasError}
		<div
		 in:fade={{ duration: 500, delay: 1500 }} out:fade={{ duration: 500}}
		 class="flex flex-col items-center justify-center w-full h-full">
		 	<img class="w-40" src="./images/animated/Error.svg" alt="Error">
			<p class="text-3xl font-mono font-bold text-red-700 text-center">An error has occured. <br> Please try again, later.</p>
		</div>
	{:else}
		<div class="flex flex-col">
			<h2 in:fly={{ y: -50, duration: 500, delay: 750 }} out:fade={{ duration: 500}} class="text-4xl px-3 uppercase self-center mb-5">{cityToShow}</h2>

			<div class="flex flex-col lg:flex-row items-center justify-evenly">
				{#each $weather.daily as day, idx}
					<div in:fly={{ x: -50, duration: 500, delay: 100 + (75 * idx) }} out:fly={{ x: 50, duration: 500, delay: 100 + (75 * idx) }}>
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
