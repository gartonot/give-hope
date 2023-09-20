<script lang="ts" setup>
  import TheHeader from '~/components/TheHeader/Index.vue'
  import TheFooter from '~/components/TheFooter.vue'
</script>

<template>
  <div>
    <the-header />
    <slot />
    <the-footer />
  </div>
</template>
