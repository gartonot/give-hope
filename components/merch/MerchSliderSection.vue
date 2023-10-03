<script lang="ts" setup>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Pagination } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/pagination'

  const modules = [Pagination]
  const images = [
    '/images/merch/hoodi/image1.png',
    '/images/merch/hoodi/image2.png',
    '/images/merch/hoodi/image3.png',
    '/images/merch/hoodi/image4.png',
    '/images/merch/hoodi/image5.png'
  ]
</script>

<template>
  <section class="slider">
    <div class="container">
      <swiper :slides-per-view="1" :space-between="35" loop pagination :modules="modules">
        <swiper-slide v-for="(img, index) in images" :key="index" class="cs-slider-item">
          <img :src="img" :alt="`img${index}`" class="gallery-card" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .slider {
    padding-block: 70px;
  }
  .cs-slider-item {
    padding-block: 40px;
  }
</style>
