<script lang="ts" setup>
  import { toRefs } from '#imports'

  interface IProps {
    label: string
    href?: string
  }

  const props = defineProps<IProps>()
  const { href, label } = toRefs(props)
</script>

<template>
  <a v-if="!!href" class="button" :href="href">
    <slot>
      {{ label }}
    </slot>
  </a>
  <button v-else class="button">
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<style lang="scss" scoped>
  .button {
    padding: 20px 20px;
    text-align: center;
    background: $blue-color;
    border-radius: 20px;
    border: none;
    color: $white-color;
    width: 100%;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.11;
    cursor: pointer;

    @media screen and (min-width: $breakpoint-lg) {
      padding: 20px 40px;
      font-size: 20px;
    }
    @media screen and (min-width: $breakpoint-lg) {
      padding: 20px 80px;
      font-size: 24px;
    }
  }
</style>
