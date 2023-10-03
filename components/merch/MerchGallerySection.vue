<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Pagination } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/pagination'

  const modules = [Pagination]
  const images = [
    '/images/merch/gallery/image1.png',
    '/images/merch/gallery/image2.png',
    '/images/merch/gallery/image3.png',
    '/images/merch/gallery/image4.png',
    '/images/merch/gallery/image5.png',
    '/images/merch/gallery/image6.png',
    '/images/merch/gallery/image7.png',
    '/images/merch/gallery/image8.png',
    '/images/merch/gallery/image9.png',
    '/images/merch/gallery/image10.png',
    '/images/merch/gallery/image11.png',
    '/images/merch/gallery/image12.png',
    '/images/merch/gallery/image13.png',
    '/images/merch/gallery/image14.png',
    '/images/merch/gallery/image15.png',
    '/images/merch/gallery/image16.png',
    '/images/merch/gallery/image17.png',
    '/images/merch/gallery/image18.png',
    '/images/merch/gallery/image19.png',
    '/images/merch/gallery/image20.png',
    '/images/merch/gallery/image21.png',
    '/images/merch/gallery/image22.png',
    '/images/merch/gallery/image23.png',
    '/images/merch/gallery/image24.png',
    '/images/merch/gallery/image25.png'
  ]

  const breakpoints = {
    768: {
      slidesPerView: 3.5
    }
  }
</script>

<template>
  <section class="gallery-section">
    <div class="container">
      <h2 class="gallery-section__title">Уже с нами!</h2>
      <div class="gallery-section__gallery">
        <swiper
          :slides-per-view="1"
          :space-between="35"
          :breakpoints="breakpoints"
          loop
          pagination
          :modules="modules"
        >
          <swiper-slide v-for="(img, index) in images" :key="index" v-slot="{ isActive }">
            <img
              :src="img"
              :alt="`img${index}`"
              width="526"
              height="690"
              :class="['gallery-card', isActive ? 'gallery-card__active' : '']"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .gallery-section {
    padding-block: 60px 200px;
    overflow: hidden;

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
        width: 104%;
        z-index: -1;
        left: -2%;
        bottom: 8px;
        background-color: $primary-color;
        transform: rotate(-1deg);
      }

      &:after {
        content: '';
        position: absolute;
        background-image: url('/images/merch/gallery/heart.svg');
        height: 148px;
        width: 143px;
        top: -80px;
        right: -180px;
        object-fit: contain;
      }
    }

    &__gallery {
      padding-top: 40px;
      position: relative;

      &:before {
        content: '';
        position: absolute;
        background-image: url('/images/merch/gallery/lines.svg');
        height: 610px;
        width: 563px;
        bottom: -200px;
        left: -350px;
      }
    }

    .gallery-card {
      display: flex;
      margin: auto;
      height: 300px;
      width: 220px;
      object-fit: cover;
      border: 3px solid $blue-color;
      border-radius: 20px;

      &__active {
        border: 5px solid $blue-color;
        height: 400px;
        width: 400px;
        transition: 1s;
      }
    }
    :deep(.swiper-wrapper) {
      align-items: center;
      min-height: 400px;
    }
  }
</style>
