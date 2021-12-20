<script>
	export let searchTerm
    export let onSubmit
</script>

<form class="flex flex-col items-center" on:submit|preventDefault={(e) => onSubmit(e.target[0].value)}>
	<label class="text-lg font-mono mb-3" for="search">Search Weather by City</label>
	<input id="search" type="search" pattern=".*\S.*" required bind:value={searchTerm} autocomplete="off" />
	<span class="caret" />
</form>

<style>
	input,
	.caret {
		display: block;
		transition: all calc(1s * 0.5) linear;
	}
	input {
		background: transparent;
		border-radius: 50%;
		box-shadow: 0 0 0 0.25em inset;
		caret-color: #0e2e3a;
		width: 2em;
		height: 2em;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
        cursor: pointer;
	}
	input:focus,
	input:valid {
		background: #fff;
		border-radius: 0.25em;
		box-shadow: none;
		padding: 0.75em 1em;
		transition-duration: calc(1s * 0.25);
		transition-delay: calc(1s * 0.25);
		width: 100%;
		height: 3em;
	}
	input:focus {
		animation: showCaret 1s steps(1);
		outline: transparent;
        cursor: text;
	}
	input:focus + .caret,
	input:valid + .caret {
		animation: handleToCaret 1s linear;
		background: transparent;
		width: 1px;
		height: 1.5em;
		transform: translate(0, -1em) rotate(-180deg) translate(7.5em, -0.25em);
	}
	input::-webkit-search-decoration {
		-webkit-appearance: none;
	}
	.caret {
		background: currentColor;
		border-radius: 0 0 0.125em 0.125em;
		margin-bottom: -0.6em;
		width: 0.25em;
		height: 1em;
		transform: translate(0, -1em) rotate(-45deg) translate(0, 0.875em);
		transform-origin: 50% 0;
	}

	/* Animations */
	@keyframes showCaret {
		from {
			caret-color: transparent;
		}
		to {
			caret-color: #0e2e3a;
		}
	}
	@keyframes handleToCaret {
		from {
			background: currentColor;
			width: 0.25em;
			height: 1em;
			transform: translate(0, -1em) rotate(-45deg) translate(0, 0.875em);
		}
		25% {
			background: currentColor;
			width: 0.25em;
			height: 1em;
			transform: translate(0, -1em) rotate(-180deg) translate(0, 0.875em);
		}
		50%,
		62.5% {
			background: #0e2e3a;
			width: 1px;
			height: 1.5em;
			transform: translate(0, -1em) rotate(-180deg) translate(5.75em, 2.5em);
		}
		75%,
		99% {
			background: #0e2e3a;
			width: 1px;
			height: 1.5em;
			transform: translate(0, -1em) rotate(-180deg) translate(5.75em, -0.25em);
		}
		87.5% {
			background: #0e2e3a;
			width: 1px;
			height: 1.5em;
			transform: translate(0, -1em) rotate(-180deg) translate(5.75em, 0.125em);
		}
		to {
			background: transparent;
			width: 1px;
			height: 1.5em;
			transform: translate(0, -1em) rotate(-180deg) translate(5.75em, -0.25em);
		}
	}
</style>
