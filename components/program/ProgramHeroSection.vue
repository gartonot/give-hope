<script lang="ts" setup>
  import { toRefs } from 'vue'
  import AppHeadline from '~/components/ui/AppHeadline.vue'

  interface IProps {
    settings: {
      title: string
      description: string
      image: string
    }
  }
  const props = defineProps<IProps>()
  const { settings } = toRefs(props)
</script>

<template>
  <section class="program-hero">
    <div class="container program-hero__container">
      <div class="program-hero__info">
        <div class="subtitle">Программа</div>
        <app-headline class="program-hero__title" :label="settings.title" />
        <p class="program-hero__description">{{ settings.description }}</p>
      </div>
      <div class="program-hero__image">
        <img class="image" :src="settings.image" width="418" height="493" alt="program image" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .subtitle {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.11;

    @media screen and (min-width: $breakpoint-md) {
      font-size: 24px;
    }
    @media screen and (min-width: $breakpoint-lg) {
      font-size: 30px;
    }
  }
  .program-hero {
    padding-top: 20px;

    @media screen and (min-width: $breakpoint-md) {
      padding-top: 60px;
    }
    @media screen and (min-width: $breakpoint-lg) {
      padding-top: 124px;
    }

    &__container {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      gap: 50px;

      @media screen and (min-width: $breakpoint-md) {
        flex-direction: row;
        gap: 0;
      }
    }

    &__title {
      margin-left: 0;
      margin-top: 20px;

      @media screen and (min-width: $breakpoint-md) {
        margin-top: 40px;
      }
      @media screen and (min-width: $breakpoint-lg) {
        margin-top: 70px;
      }
    }
    &__description {
      margin-top: 20px;

      @media screen and (min-width: $breakpoint-md) {
        max-width: 486px;
        margin-top: 28px;
        padding-right: 20px;
      }
      @media screen and (min-width: $breakpoint-lg) {
        margin-top: 36px;
      }
    }

    &__image {
      position: relative;

      &:hover {
        &::before {
          top: 0;
          left: 0;
          border-radius: 20px;
        }
      }

      .image {
        position: relative;
        width: fit-content;
        height: auto;
        border-radius: 20px;

        @media screen and (min-width: $breakpoint-md) {
          min-width: 300px;
          max-width: 300px;
        }
        @media screen and (min-width: $breakpoint-lg) {
          min-width: 418px;
          max-width: 418px;
        }
      }

      &::before {
        content: none;

        @media screen and (min-width: $breakpoint-md) {
          content: '';
          border: 2px solid $blue-color;
          position: absolute;
          top: -20px;
          left: -20px;
          width: 100%;
          height: 100%;
          border-radius: 16px;
          transition: 0.3s;
        }
      }
    }
  }
</style>
