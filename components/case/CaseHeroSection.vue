<script setup lang="ts">
  import { toRefs } from 'vue'

  interface IProps {
    settings: {
      title: string
      image: {
        src: string
        alt: string
      }
      description: string
    }
  }
  const props = defineProps<IProps>()
  const { settings } = toRefs(props)
</script>

<template>
  <section class="case-hero">
    <div class="container">
      <h1 class="case-hero__title">{{ settings.title }}</h1>
      <div class="case-hero__image-wrapper">
        <img class="case-hero__image" :src="settings.image.src" :alt="settings.image.alt" />
      </div>
      <p class="case-hero__description">{{ settings.description }}</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .case-hero {
    overflow: hidden;
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
        bottom: 0;
        background-color: $primary-color;
      }
    }

    &__image-wrapper {
      position: relative;

      &:before {
        content: '';
        position: absolute;
        background-image: url('/images/case/quote.svg');
        width: 94px;
        height: 82px;
        transform: rotate(180deg) scale(0.5);
        top: -70px;
        right: -40px;

        @media screen and (min-width: $breakpoint-sm) {
          transform: rotate(180deg) scale(0.8);
          right: -50px;
          top: -90px;
        }

        @media screen and (min-width: $breakpoint-lg) {
          transform: rotate(180deg);
          right: -90px;
        }
      }
      &:after {
        content: '';
        position: absolute;
        background-image: url('/images/case/quote.svg');
        width: 94px;
        height: 82px;
        transform: scale(0.5);
        left: -40px;
        bottom: -70px;

        @media screen and (min-width: $breakpoint-sm) {
          transform: scale(0.8);
          right: -50px;
          bottom: -90px;
        }

        @media screen and (min-width: $breakpoint-lg) {
          transform: unset;
          left: -90px;
        }
      }
    }

    &__image {
      margin-top: 75px;
      width: 100%;
      border-radius: 8px;
    }

    &__description {
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 111%;
      margin-top: 55px;

      @media screen and (min-width: $breakpoint-sm) {
        padding: 0 40px 10px;
      }

      @media screen and (min-width: $breakpoint-lg) {
        font-size: 35px;
        margin-top: 70px;
      }
    }
  }
</style>
