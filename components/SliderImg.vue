<script lang="ts" setup>
  import { toRefs } from '#imports'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Pagination } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/pagination'

  const modules = [Pagination]

  interface IProps {
    sliderImages: string[]
  }

  const props = defineProps<IProps>()
  const { sliderImages } = toRefs(props)
</script>

<template>
  <div class="slider">
    <swiper
      loop
      centered-slides
      :slides-per-view="1"
      :space-between="50"
      pagination
      :modules="modules"
    >
      <swiper-slide v-for="(imageSrc, index) in sliderImages" :key="index" class="cs-slider-item">
        <img :src="imageSrc" class="slider__image" alt="slider image" width="760" height="1010" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
  .cs-slider-item {
    display: flex;
    justify-content: center;
  }
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
    width: 760px;
    height: auto;
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
