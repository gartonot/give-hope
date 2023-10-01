<script lang="ts" setup>
  import SliderImg from '~/components/SliderImg.vue'

  const sliderImages = [
    '/images/other/docs/slide1.png',
    '/images/other/docs/slide2.png',
    '/images/other/docs/slide3.png',
    '/images/other/docs/slide4.png',
    '/images/other/docs/slide5.png',
    '/images/other/docs/slide6.png',
    '/images/other/docs/slide7.png',
    '/images/other/docs/slide8.png',
    '/images/other/docs/slide9.png',
    '/images/other/docs/slide10.png',
    '/images/other/docs/slide11.png',
    '/images/other/docs/slide12.png',
    '/images/other/docs/slide13.png',
    '/images/other/docs/slide14.png'
  ]
</script>

<template>
  <main class="charityprogram">
    <div class="container">
      <h1 class="title">Уставные документы</h1>
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
