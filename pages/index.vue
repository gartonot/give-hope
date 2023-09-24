<script lang="ts" setup>
  import MainHero from '~/components/main/MainHero.vue'
  import MainUrgentHelp from '~/components/main/MainUrgentHelp/Index.vue'
  import MainDonation from '~/components/main/MainDonation/Index.vue'
  import MainPrograms from '~/components/main/MainPrograms/Index.vue'
  import MainSlider from '~/components/main/MainSlider.vue'
</script>

<template>
  <main>
    <main-hero />
    <main-urgent-help v-if="false" class="main__urgent-help" />
    <main-donation class="main__donation" />
    <main-programs class="main__programs" />
    <main-slider class="main__slider" />
  </main>
</template>

<style scoped lang="scss">
  :global(body) {
    overflow-x: hidden;
  }

  .main {
    &__urgent-help {
      margin-top: 100px;

      @media screen and (min-width: $breakpoint-md) {
        margin-top: 170px;
      }
      @media screen and (min-width: $breakpoint-lg) {
        margin-top: 170px;
      }
    }
    &__donation {
      margin-top: 100px;

      @media screen and (min-width: $breakpoint-md) {
        margin-top: 200px;
      }
      @media screen and (min-width: $breakpoint-lg) {
        margin-top: 324px;
      }
    }
    &__programs {
      margin-top: 100px;

      @media screen and (min-width: $breakpoint-md) {
        margin-top: 200px;
      }
      @media screen and (min-width: $breakpoint-lg) {
        margin-top: 328px;
      }
    }
    &__slider {
      margin-top: 100px;

      @media screen and (min-width: $breakpoint-md) {
        margin-top: 150px;
      }
      @media screen and (min-width: $breakpoint-lg) {
        margin-top: 220px;
      }
    }
  }
</style>
