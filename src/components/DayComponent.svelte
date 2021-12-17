<script>
	export let day;
</script>

<div class="flex flex-col w-36 h-[26rem]">
	<div class="flex flex-col items-center h-1/4" style="color: #4DB0D3">
		<p class="text-2xl font-mono">{day.parsedDate.weekday}</p>
		<p class="text-5xl font-bold">{day.parsedDate.day}</p>
	</div>

	<div
		class={`flex flex-col items-center relative pt-32 h-3/4 ${day.weather[0].main.toLowerCase()} shadow-xl rounded-3xl`}
	>
		<img
			class="w-60 max-w-none absolute -top-20 drop-shadow-lg"
			src={`./images/animated/${day.weather[0].main}.svg`}
			alt="{day.weather[0].main}"
		/>
		<p class="font-bold text-7xl mb-5">{`${Math.round(day.temp.max)}º`}</p>
		<div class="flex flex-col items-center justify-evenly w-full">
			<div class="flex w-1/2 items-center justify-around mb-1">
				<img src="./images/precipitation.svg" alt="precipitation" />
				<p class="w-5 text-lg text-left">{`${Math.round(day.humidity)}%`}</p>
			</div>
			<div class="flex w-1/2 items-center justify-around">
				<img src="./images/low.svg" alt="low temp" />
				<p class="w-5 text-lg text-left">{`${Math.round(day.temp.min)}º`}</p>
			</div>
		</div>
	</div>
</div>

<style>
	.clouds {
		background-color: #4db0d3;
		color: #e6df95;
	}
	.clear {
		background-color: #e6df95;
		color: #4db0d3;
	}
	.thunderstorm {
		background-color: #0e2e3a;
		color: #e6df95;
	}
	.snow {
		background-color: #bce1ef;
		color: #0e2e3a;
	}
	.rain {
		background-color: #2b8bad;
		color: #e6df95;
	}
</style>
