<!-- * SCRIPTS -->
<script>
    // import NavComponent from '../components/NavComponent.svelte'
    import '../index.css';
</script>

<!-- * SLOTS -->
<!-- <NavComponent /> -->
<div class="h-full flex flex-col items-center justify-center py-10 lg:px-10">
    <slot></slot>
</div>

<style>
    * {
        color: #0E2E3A
    }
</style>