<script lang="ts" setup>
  import MainHero from '~/components/main/MainHero.vue'
  import MainUrgentHelp from '~/components/main/MainUrgentHelp/Index.vue'
</script>

<template>
  <main>
    <main-hero />
    <main-urgent-help v-if="false" class="main__urgent-help" />
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
  }
</style>
