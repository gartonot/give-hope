<script lang="ts" setup>
  import { useNuxtApp, computed } from '#imports'
  import AppHeadline from '~/components/ui/AppHeadline.vue'
  import { WeInVkIcon } from '~/components/icons'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Pagination } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import { useRuntimeConfig } from '#imports'

  const runtimeConfig = useRuntimeConfig()
  const { vkUrl } = runtimeConfig.public
  const { $viewport } = useNuxtApp()

  const sliderImages = [
    '/images/sliders/img-1.jpg',
    '/images/sliders/img-2.jpg',
    '/images/sliders/img-3.jpg',
    '/images/sliders/img-4.jpg',
    '/images/sliders/img-5.jpg',
    '/images/sliders/img-6.jpg',
    '/images/sliders/img-7.jpg',
    '/images/sliders/img-8.jpg',
    '/images/sliders/img-9.jpg',
    '/images/sliders/img-10.jpg',
    '/images/sliders/img-11.jpg',
    '/images/sliders/img-12.jpg',
    '/images/sliders/img-13.jpg',
    '/images/sliders/img-14.jpg',
    '/images/sliders/img-15.jpg',
    '/images/sliders/img-16.jpg',
    '/images/sliders/img-17.jpg',
    '/images/sliders/img-18.jpg',
    '/images/sliders/img-19.jpg',
    '/images/sliders/img-20.jpg',
    '/images/sliders/img-21.jpg',
    '/images/sliders/img-22.jpg',
    '/images/sliders/img-23.jpg',
    '/images/sliders/img-24.jpg',
    '/images/sliders/img-25.jpg',
    '/images/sliders/img-26.jpg',
    '/images/sliders/img-27.jpg',
    '/images/sliders/img-28.jpg',
    '/images/sliders/img-29.jpg',
    '/images/sliders/img-30.jpg',
    '/images/sliders/img-31.jpg',
    '/images/sliders/img-32.jpg',
    '/images/sliders/img-33.jpg',
    '/images/sliders/img-34.png'
  ]

  const modules = [Pagination]

  const isLessThanTablet = computed(() => $viewport.isLessThan('tablet'))
</script>

<template>
  <div class="slider">
    <div class="container">
      <app-headline label="Мы постоянно помогаем" />
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
      <a :href="vkUrl" target="_blank" class="slider__link">
        <we-in-vk-icon />
      </a>
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
    &__link {
      margin-top: 64px;
    }
  }
</style>
