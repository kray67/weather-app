<!-- * SCRIPTS -->
<script>
    // import NavComponent from '../components/NavComponent.svelte'
    import '../index.css';
</script>

<!-- * SLOTS -->
<!-- <NavComponent /> -->
<div class="h-full flex flex-col px-10 pt-20 pb-20 bg-amber-100 scrollable">
    <slot></slot>
</div>

<style>
    * {
        color: #0E2E3A
    }
</style>