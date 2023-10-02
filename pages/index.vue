<script lang="ts" setup>
  import MainHero from '~/components/main/MainHero.vue'
  import MainUrgentHelp from '~/components/main/MainUrgentHelp/Index.vue'
  import MainDonation from '~/components/main/MainDonation/Index.vue'
  import MainPrograms from '~/components/main/MainPrograms/Index.vue'
  import MainSlider from '~/components/main/MainSlider.vue'
  import MainMap from '~/components/main/MainMap.vue'
  import MainHelp from '~/components/main/MainHelp.vue'
</script>

<template>
  <main class="main">
    <main-hero />
    <main-help />
    <main-donation class="main__donation" />
    <main-programs id="program" class="main__programs" />
    <main-slider class="main__slider" />
    <main-map class="main__map" />
  </main>
</template>

<style scoped lang="scss">
  :global(body) {
    overflow-x: hidden;
  }

  .main {
    padding-bottom: 40px;

    @media screen and (min-width: $breakpoint-md) {
      padding-bottom: 100px;
    }
    @media screen and (min-width: $breakpoint-lg) {
      padding-bottom: 200px;
    }

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
    &__map {
      margin-top: 100px;

      @media screen and (min-width: $breakpoint-md) {
        margin-top: 180px;
      }
      @media screen and (min-width: $breakpoint-lg) {
        margin-top: 270px;
      }
    }
  }
</style>
