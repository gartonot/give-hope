<script lang="ts" setup>
  import AppHeadline from '~/components/ui/AppHeadline.vue'
  import { WeInVkIcon } from '~/components/icons'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/scss/navigation'

  const sliderImages = [
    '/images/sliders/slide-1.png',
    '/images/sliders/slide-2.png',
    '/images/sliders/slide-3.png',
    '/images/sliders/slide-1.png',
    '/images/sliders/slide-2.png',
    '/images/sliders/slide-3.png'
  ]

  const modules = [Navigation]
</script>

<template>
  <div class="slider">
    <div class="container">
      <app-headline label="Мы постоянно помогаем" />
      <div class="slider__wrapper">
        <swiper loop centered-slides :slides-per-view="3" :space-between="50" :modules="modules">
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
      <a href="https://vk.com/darinadezhduu" target="_blank" class="slider__link">
        <we-in-vk-icon />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .swiper-slide-active {
    transform: scale(1.2);
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
