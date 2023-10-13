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
    '/images/main/slider-helps/image1.jpg',
    '/images/main/slider-helps/image2.jpg',
    '/images/main/slider-helps/image3.jpg',
    '/images/main/slider-helps/image4.jpg',
    '/images/main/slider-helps/image5.jpg',
    '/images/main/slider-helps/image6.jpg',
    '/images/main/slider-helps/image7.jpg',
    '/images/main/slider-helps/image8.jpg',
    '/images/main/slider-helps/image9.jpg',
    '/images/main/slider-helps/image10.jpg',
    '/images/main/slider-helps/image11.jpg',
    '/images/main/slider-helps/image12.jpg',
    '/images/main/slider-helps/image13.jpg',
    '/images/main/slider-helps/image14.jpg',
    '/images/main/slider-helps/image15.jpg',
    '/images/main/slider-helps/image16.jpg',
    '/images/main/slider-helps/image17.jpg',
    '/images/main/slider-helps/image18.jpg',
    '/images/main/slider-helps/image19.jpg',
    '/images/main/slider-helps/image20.jpg',
    '/images/main/slider-helps/image21.jpg',
    '/images/main/slider-helps/image22.jpg',
    '/images/main/slider-helps/image23.jpg',
    '/images/main/slider-helps/image24.jpg',
    '/images/main/slider-helps/image25.jpg',
    '/images/main/slider-helps/image26.jpg',
    '/images/main/slider-helps/image27.jpg',
    '/images/main/slider-helps/image28.jpg',
    '/images/main/slider-helps/image29.jpg',
    '/images/main/slider-helps/image30.jpg',
    '/images/main/slider-helps/image31.jpg'
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
