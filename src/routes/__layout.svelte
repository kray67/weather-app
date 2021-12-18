<!-- * SCRIPTS -->
<script>
    // import NavComponent from '../components/NavComponent.svelte'
    import '../index.css';
</script>

<!-- * SLOTS -->
<!-- <NavComponent /> -->
<div class="h-full flex flex-col py-10 lg:px-10 lg:py-20 bg-amber-100 scrollable">
    <slot></slot>
</div>

<style>
    * {
        color: #0E2E3A
    }
</style>