<script setup lang="ts">
  import { toRefs } from 'vue'

  interface IProps {
    settings: {
      title: string
      text: string
    }
  }
  const props = defineProps<IProps>()
  const { settings } = toRefs(props)
</script>

<template>
  <section class="case-body">
    <div class="container">
      <h2 class="case-body__title">{{ settings.title }}</h2>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p class="case-body__text" v-html="settings.text" />
    </div>
  </section>
</template>

<style scoped lang="scss">
  .case-body {
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
        width: 104%;
        z-index: -1;
        left: -2%;
        bottom: 0;
        background-color: $primary-color;
        transform: rotate(-1deg);
      }
    }

    &__text {
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 113%;
      margin-top: 35px;
    }
  }
</style>
