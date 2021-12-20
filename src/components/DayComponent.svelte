<script>
	export let day;
</script>

<div class="flex flex-row-reverse w-screen px-2 mb-3 lg:flex-col lg:w-36 lg:h-[26rem] lg:mb-0">
	<div class="flex flex-col items-center w-1/5 lg:w-full lg:h-1/4" style="color: #4DB0D3">
		<p class="text-xl lg:text-2xl font-mono">{day.parsedDate.weekday}</p>
		<p class="text-3xl lg:text-5xl font-bold">{day.parsedDate.day}</p>
	</div>

	<div
		class={`flex flex-row-reverse lg:flex-col items-center justify-end gap-x-3 lg:justify-center relative w-4/5 lg:pt-32 lg:w-full lg:h-3/4 ${day.weather[0].main.toLowerCase()} shadow-xl rounded-3xl`}
	>
		<img
			class="w-28 lg:w-60 max-w-none absolute -right-10 lg:-top-20 lg:right-auto drop-shadow-lg"
			src={`./images/animated/${day.weather[0].main}.svg`}
			alt="{day.weather[0].main}"
		/>
		<p class="font-bold text-4xl lg:text-7xl lg:mb-5">{`${Math.round(day.temp.max)}º`}</p>
		<div class="flex lg:flex-col items-center justify-evenly pl-3 lg:w-full lg:pl-0">
			<div class="flex w-1/2 items-center justify-around mr-5 lg:mb-1 lg:mr-0 lg:justify-center lg:w-full">
				<img class="w-6 lg:w-auto mr-1 lg:mr-0" src="./images/precipitation.svg" alt="precipitation" />
				<p class="w-5 lg:w-8 lg:text-lg text-left">{`${Math.round(day.humidity)}%`}</p>
			</div>
			<div class="flex w-1/2 items-center justify-around lg:justify-center lg:w-full">
				<img class="w-6 lg:w-auto" src="./images/low.svg" alt="low temp" />
				<p class="w-5 lg:w-8 lg:text-lg text-left">{`${Math.round(day.temp.min)}º`}</p>
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
