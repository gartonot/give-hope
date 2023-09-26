<script lang="ts" setup>
  import SliderImg from '~/components/SliderImg.vue'

  const sliderImages = [
    '/images/other/charityprogram/slide1.jpeg',
    '/images/other/charityprogram/slide2.jpeg',
    '/images/other/charityprogram/slide3.jpeg',
    '/images/other/charityprogram/slide4.jpeg',
    '/images/other/charityprogram/slide5.jpeg',
    '/images/other/charityprogram/slide6.jpeg',
    '/images/other/charityprogram/slide7.jpeg',
    '/images/other/charityprogram/slide8.jpeg',
    '/images/other/charityprogram/slide9.jpeg',
    '/images/other/charityprogram/slide10.jpeg'
  ]
</script>

<template>
  <main class="charityprogram">
    <div class="container">
      <h1 class="title">Благотворительная программа на 2021-2026 гг.</h1>
      <slider-img class="slider" :slider-images="sliderImages" />
    </div>
  </main>
</template>

<style scoped lang="scss">
  .title {
    color: $primary-color;
  }
  .slider {
    margin-top: 20px;
    padding: 50px 0;
  }
</style>
