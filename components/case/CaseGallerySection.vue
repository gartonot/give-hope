<script setup lang="ts">
  import { toRefs } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Pagination } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/pagination'

  interface IProps {
    settings: {
      title: string
      images: string[]
    }
  }
  const props = defineProps<IProps>()
  const { settings } = toRefs(props)

  const breakpoints = {
    768: {
      slidesPerView: 2.5
    }
  }
  const modules = [Pagination]
</script>

<template>
  <section class="case-gallery">
    <div class="container">
      <h2 class="case-gallery__title">{{ settings.title }}</h2>
      <div class="case-gallery__gallery">
        <swiper
          :slides-per-view="1"
          :space-between="35"
          centered-slides
          :breakpoints="breakpoints"
          pagination
          :modules="modules"
        >
          <swiper-slide v-for="(img, index) in settings.images" :key="index" class="cs-slider-item">
            <img :src="img" :alt="`img${index}`" width="440" height="350" class="gallery-card" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .cs-slider-item {
    padding-block: 40px;
  }
  .case-gallery {
    position: relative;

    &__title {
      font-size: 34px;
      font-style: normal;
      font-weight: 700;
      line-height: 111%;
      position: relative;
      display: inline-block;

      @media screen and (min-width: $breakpoint-lg) {
        font-size: 50px;
      }

      &:before {
        content: '';
        position: absolute;
        height: 18px;
        width: 130%;
        z-index: -1;
        left: -15%;
        bottom: 4px;
        background-color: $primary-color;
      }
    }

    &__gallery {
      padding-top: 70px;
      position: relative;

      @media screen and (min-width: $breakpoint-lg) {
        padding-top: 170px;
      }

      &:before {
        content: '';
        position: absolute;
        background-image: url('/images/case/arrow.svg');
        height: 146px;
        width: 148px;
        bottom: 80px;
        left: 50px;
      }
    }

    .gallery-card {
      display: flex;
      margin: auto;
      height: 300px;
      width: 600px;
      object-fit: cover;
      border-radius: 20px;
    }
  }
</style>
