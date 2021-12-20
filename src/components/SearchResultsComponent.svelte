<script>
    export let city
    export let clicked
</script>

<div class="row from-left rounded-lg py-2 px-5">
    <h1 on:click={() => clicked()}>{`${city.name}, ${city.sys.country}`}</h1>
</div>

<style>
	.row {
		position: relative; 
		color: #0E2E3A;
		text-transform: uppercase;
		transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
		cursor: pointer;
		user-select: none;
        z-index: 1;
	}

	.row:before,
	.row:after {
		content: '';
		position: absolute;
		transition: inherit;
		z-index: -1;
        box-sizing: border-box;
	}

	.row:hover {
		color: #fff;
		transition-delay: 0.15s;
	}

	.row:hover:before {
		transition-delay: 0s;
	}

	.row:hover:after {
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