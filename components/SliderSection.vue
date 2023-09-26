<script lang="ts" setup>
  import { useNuxtApp, computed } from '#imports'
  import AppHeadline from '~/components/ui/AppHeadline.vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Pagination } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/pagination'

  const { $viewport } = useNuxtApp()

  const sliderImages = [
    '/images/sliders/slide-1.png',
    '/images/sliders/slide-2.png',
    '/images/sliders/slide-3.png',
    '/images/sliders/slide-1.png',
    '/images/sliders/slide-2.png',
    '/images/sliders/slide-3.png'
  ]

  const modules = [Pagination]

  const isLessThanTablet = computed(() => $viewport.isLessThan('tablet'))
</script>

<template>
  <div class="slider">
    <div class="container">
      <app-headline class="slider__title" label="Мы постоянно помогаем" />
      <div class="slider__wrapper">
        <swiper
          loop
          centered-slides
          :slides-per-view="isLessThanTablet ? 1 : 3"
          :space-between="50"
          pagination
          :modules="modules"
        >
          <swiper-slide v-for="(imageSrc, index) in sliderImages" :key="index">
            <img
              :src="imageSrc"
              class="slider__image"
              alt="slider image"
              width="333"
              height="205"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  :deep(.swiper-pagination) {
    bottom: -6px !important;
  }
  .swiper-slide-active {
    transform: scale(1);

    @media screen and (min-width: $breakpoint-md) {
      transform: scale(1.2);
    }
  }
  .swiper-slide img {
    width: 100%;
    height: 300px;
  }
  .swiper-slide {
    transition: all 0.5s ease;
    padding: 40px 0;
  }

  .slider__image {
    object-fit: cover;
    border-radius: 10px;
  }
  .slider {
    &__title {
      margin-left: 0;
    }
    &__wrapper {
      margin-top: 116px;
    }
  }
</style>
