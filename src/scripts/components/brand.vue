<template>
  <div class="gl-branding">
    <h1 class="branding-title">
      <a href="{{ brand.link }}">{{ brand.title }}</a>
    </h1>
    <div class="brand-description">{{ brand.description }}</div>
  </div>
</template>
<style>
  .branding-title {
    color: #fff;
    font-size: 3.5rem;
    margin-bottom: 0.21818182em;
    font-weight: 300;
    letter-spacing: 0.1em;
    line-height: 1;
    text-align: center;
    text-transform: uppercase;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  .brand-description {
    font-size: 1.0rem;
    font-weight: 300;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
</style>
<script>
  export default{
    vuex: {
      getters: {
        brand: state => state.brand
      }
    }
  }
</script>
