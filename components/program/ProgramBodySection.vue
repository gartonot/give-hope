<script lang="ts" setup>
  import DonationForm from '~/components/DonationForm.vue'
  import { toRefs } from '#imports'
  import AppHeadline from '~/components/ui/AppHeadline.vue'

  interface IProps {
    settings: {
      title: string
      description: string
      list: string[]
      image: string
    }
  }
  const props = defineProps<IProps>()
  const { settings } = toRefs(props)
</script>

<template>
  <section class="program-body">
    <div class="container">
      <div class="program-body__donation">
        <img
          src="/images/text-with-arrow.svg"
          width="403"
          height="190"
          class="particle-text-with-arrow"
          alt="Text with arrow"
        />
        <donation-form class="program-body__donation-form" />
      </div>
      <div class="helps">
        <div>
          <app-headline class="helps__title" :label="settings.title" />
          <p class="helps__description">
            {{ settings.description }}
          </p>
          <ul class="helps__list">
            <li v-for="(item, index) in settings.list" :key="index" class="list-item">
              {{ item }}
            </li>
          </ul>
        </div>
        <img class="helps__image" :src="settings.image" width="444" height="542" alt="Image" />
      </div>
      <svg
        class="program-body__stars"
        width="140"
        height="140"
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M83.5286 67.0731L98.9981 28.6014L70.1094 57.9342L26.9148 44.1774L58.8807 74.422L44.1095 113.738L72.2999 83.561L112.543 95.242L83.5286 67.0731Z"
          stroke="#266EF1"
          stroke-opacity="0.44"
          stroke-width="3"
        />
      </svg>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .helps {
    display: flex;
    justify-content: space-between;
    margin-top: 184px;

    &__title {
      margin-left: 0;
    }
    &__description {
      font-weight: 400;
      line-height: 1.13;

      @media screen and (min-width: $breakpoint-lg) {
        max-width: 340px;
      }
    }
    &__list {
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding-left: 24px;

      @media screen and (min-width: $breakpoint-lg) {
        max-width: 530px;
        gap: 45px;
      }
      .list-item {
        font-size: 20px;
        font-weight: 700;
        line-height: 1.13;

        &::marker {
          color: $primary-color;
        }
      }
    }
    &__image {
      display: none;

      @media screen and (min-width: $breakpoint-lg) {
        display: block;
      }
    }
  }
  .particle-text-with-arrow {
    position: absolute;
    top: -100px;
    left: -50%;
    display: none;

    @media screen and (min-width: $breakpoint-lg) {
      display: block;
    }
  }
  .program-body__donation {
    display: flex;
    margin-top: 141px;
    position: relative;
    max-width: 690px;
    margin-left: auto;
  }
</style>
