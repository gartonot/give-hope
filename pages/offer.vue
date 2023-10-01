<script lang="ts" setup>
  import SliderImg from '~/components/SliderImg.vue'

  const sliderImages = [
    '/images/other/offer/slide1.jpg',
    '/images/other/offer/slide2.jpg',
    '/images/other/offer/slide3.jpg',
    '/images/other/offer/slide4.jpg',
    '/images/other/offer/slide5.jpg',
    '/images/other/offer/slide6.jpg',
    '/images/other/offer/slide7.jpg',
    '/images/other/offer/slide8.jpg'
  ]
</script>

<template>
  <main class="charityprogram">
    <div class="container">
      <h1 class="title">Публичная оферта</h1>
      <slider-img class="slider" :slider-images="sliderImages" />
    </div>
  </main>
</template>

<style scoped lang="scss">
  .slider {
    margin-top: 20px;
    padding: 50px 0;
  }
</style>
