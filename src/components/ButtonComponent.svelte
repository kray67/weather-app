<script>
	export let city;
	export let clicked;
</script>

<button
	class="btn from-left py-2 px-3 rounded-lg overflow-hidden font-bold text-xl"
	on:click={() => clicked(city.lat, city.lon)}>{city.name}</button
>

<style>
	.btn {
		position: relative; 
		color: #4DB0D3;
		text-transform: uppercase;
		transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
		cursor: pointer;
		user-select: none;
        z-index: 1;
	}

	.btn:before,
	.btn:after {
		content: '';
		position: absolute;
		transition: inherit;
		z-index: -1;
        box-sizing: border-box;
	}

	.btn:hover {
		color: #fff;
		transition-delay: 0.15s;
	}

	.btn:hover:before {
		transition-delay: 0s;
	}

	.btn:hover:after {
		background: #0E2E3A;
		transition-delay: 0.15s;
	}
	.from-left:before,
	.from-left:after {
		top: 0;
		width: 0;
		height: 100%;
	}

	.from-left:before {
		right: 0;
		border: 2px solid #0E2E3A;
		border-left: 0;
		border-right: 0;
	}

	.from-left:after {
		left: 0;
	}

	.from-left:hover:before,
	.from-left:hover:after {
		width: 100%;
	}
</style>
