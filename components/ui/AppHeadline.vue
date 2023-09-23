<script lang="ts" setup>
  import { toRefs } from '#imports'

  interface IProps {
    label: string
  }

  const props = defineProps<IProps>()
  const { label } = toRefs(props)
</script>

<template>
  <h2 class="headline">
    <span class="headline__label">
      {{ label }}
    </span>
  </h2>
</template>

<style lang="scss" scoped>
  .headline {
    color: $grey-color;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.11;
    position: relative;
    width: fit-content;
    margin-bottom: 20px;
    margin-inline: auto;

    @media screen and (min-width: $breakpoint-md) {
      font-size: 32px;
    }
    @media screen and (min-width: $breakpoint-lg) {
      font-size: 50px;
    }

    &__label {
      position: relative;
    }

    &::before {
      content: '';
      width: 100%;
      height: 16px;
      position: absolute;
      bottom: -5px;
      left: 0;
      background-color: $primary-color;
      transform: skewY(-1deg);
    }
  }
</style>
