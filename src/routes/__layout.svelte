<!-- * SCRIPTS -->
<script>
    // import NavComponent from '../components/NavComponent.svelte'
    import '../index.css';
</script>

<!-- * SLOTS -->
<!-- <NavComponent /> -->
<div class="flex flex-col flex-1 items-center justify-center py-10 md:px-10">
    <slot></slot>
</div>
<div class="p-2">
    <h1 class="text-xs md:text-base font-mono text-center">Weather App made with <br> SvelteKit and TailwindCss</h1>
</div>

<style>
    * {
        color: #0E2E3A
    }
</style>