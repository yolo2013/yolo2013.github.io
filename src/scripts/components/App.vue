<template>
  <header class="gl-header">
    <global-brand></global-brand>
    <global-nav></global-nav>
  </header>
  <main></main>
  <global-footer></global-footer>
</template>
<style>
  .gl-header {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding-bottom: 3.125em;
    padding-top: 3.125em;
    text-align: center;
  }
</style>
<script>
  import Brand from './brand.vue'
  import Nav from './nav.vue'
  import Footer from './footer.vue'

  export default {
    components: {
      globalBrand: Brand,
      globalNav: Nav,
      globalFooter: Footer
    }
  }
</script>
