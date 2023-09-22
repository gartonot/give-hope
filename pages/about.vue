<script setup lang="ts">
  import AboutHeroSection from '~/components/about/AboutHeroSection.vue'
  import AboutBenefitsSection from '~/components/about/AboutBenefitsSection.vue'
</script>

<template>
  <main class="about">
    <about-hero-section />
    <about-benefits-section class="about-benefits" />
  </main>
</template>

<style scoped lang="scss">
  .about {
    padding-block: 40px;

    &-benefits {
      margin-top: 100px;
    }
  }
</style>
