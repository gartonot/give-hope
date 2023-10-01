<script setup lang="ts">
  import MerchHeroSection from '~/components/merch/MerchHeroSection.vue'
  import MerchShopSection from '~/components/merch/MerchShopSection.vue'
  import MerchGallerySection from '~/components/merch/MerchGallerySection.vue'
  import SubscribeNewsletter from '~/components/SubscribeNewsletter.vue'
  import MerchSliderSection from '~/components/merch/MerchSliderSection.vue'
</script>

<template>
  <main class="merch">
    <merch-hero-section />
    <merch-shop-section />
    <merch-slider-section />
    <merch-gallery-section />
    <subscribe-newsletter class="subscribe-section" />
  </main>
</template>

<style scoped lang="scss">
  .merch {
    padding-bottom: 200px;

    .subscribe-section {
      margin-top: 50px;
    }
  }
</style>
