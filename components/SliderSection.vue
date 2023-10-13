<script lang="ts" setup>
  import { useNuxtApp, computed } from '#imports'
  import AppHeadline from '~/components/ui/AppHeadline.vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Pagination } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/pagination'

  const { $viewport } = useNuxtApp()

  const sliderImages = [
    '/images/programs/welcome-door/slider/image1.jpg',
    '/images/programs/welcome-door/slider/image2.jpg',
    '/images/programs/welcome-door/slider/image3.jpg',
    '/images/programs/welcome-door/slider/image4.jpg',
    '/images/programs/welcome-door/slider/image5.jpg',
    '/images/programs/welcome-door/slider/image6.jpg',
    '/images/programs/welcome-door/slider/image7.jpg',
    '/images/programs/welcome-door/slider/image8.jpg',
    '/images/programs/welcome-door/slider/image9.jpg',
    '/images/programs/welcome-door/slider/image10.jpg',
    '/images/programs/welcome-door/slider/image11.jpg',
    '/images/programs/welcome-door/slider/image12.jpg',
    '/images/programs/welcome-door/slider/image13.jpg',
    '/images/programs/welcome-door/slider/image14.jpg',
    '/images/programs/welcome-door/slider/image15.jpg',
    '/images/programs/welcome-door/slider/image16.jpg',
    '/images/programs/welcome-door/slider/image17.jpg',
    '/images/programs/welcome-door/slider/image18.jpg',
    '/images/programs/welcome-door/slider/image19.jpg',
    '/images/programs/welcome-door/slider/image20.jpg',
    '/images/programs/welcome-door/slider/image21.jpg',
    '/images/programs/welcome-door/slider/image22.jpg',
    '/images/programs/welcome-door/slider/image23.jpg',
    '/images/programs/welcome-door/slider/image24.jpg',
    '/images/programs/welcome-door/slider/image25.jpg',
    '/images/programs/welcome-door/slider/image26.jpg',
    '/images/programs/welcome-door/slider/image27.jpg',
    '/images/programs/welcome-door/slider/image28.jpg',
    '/images/programs/welcome-door/slider/image29.jpg',
    '/images/programs/welcome-door/slider/image30.jpg',
    '/images/programs/welcome-door/slider/image31.jpg',
    '/images/programs/welcome-door/slider/image32.jpg',
    '/images/programs/welcome-door/slider/image33.jpg',
    '/images/programs/welcome-door/slider/image34.jpg',
    '/images/programs/welcome-door/slider/image35.jpg',
    '/images/programs/welcome-door/slider/image36.jpg',
    '/images/programs/welcome-door/slider/image37.jpg',
    '/images/programs/welcome-door/slider/image38.jpg',
    '/images/programs/welcome-door/slider/image39.jpg',
    '/images/programs/welcome-door/slider/image40.jpg',
    '/images/programs/welcome-door/slider/image41.jpg',
    '/images/programs/welcome-door/slider/image42.jpg',
    '/images/programs/welcome-door/slider/image43.jpg',
    '/images/programs/welcome-door/slider/image44.jpg',
    '/images/programs/welcome-door/slider/image45.jpg'
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
