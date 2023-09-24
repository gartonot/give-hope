<script lang="ts" setup>
  import MainHero from '~/components/main/MainHero.vue'
  import MainUrgentHelp from '~/components/main/MainUrgentHelp/Index.vue'
  import MainDonation from '~/components/main/MainDonation/Index.vue'
</script>

<template>
  <main>
    <main-hero />
    <main-urgent-help v-if="false" class="main__urgent-help" />
    <main-donation class="main__donation" />
  </main>
</template>

<style scoped lang="scss">
  :global(body) {
    overflow-x: hidden;
  }

  .main {
    &__urgent-help {
      margin-top: 170px;
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
  }
</style>
