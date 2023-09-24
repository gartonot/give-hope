<script lang="ts" setup>
  import { PackageIcon } from '~/components/icons'
  import AppButton from '~/components/ui/AppButton.vue'

  const sendSetOfWeekForm = () => {
    const formData = {
      sum: 750
    }

    console.log(formData)
  }
</script>

<template>
  <div class="set">
    <div class="set__wrapper">
      <div class="set__title">НАБОР НЕДЕЛИ</div>
      <package-icon class="set__icon" />
      <p class="set__description">Мука, молоко, макароны, крупы, консервы, чай, сладости</p>
    </div>
    <app-button label="Пожертвовать" class="set__button" @click="sendSetOfWeekForm()" />
  </div>
</template>

<style lang="scss" scoped>
  .set {
    text-align: center;
    line-height: 1.11;
    display: flex;
    flex-direction: column;

    &__wrapper {
      padding: 12px;
      border-radius: 18.879px;
      border: 1px solid $blue-color;
      margin-bottom: 16px;

      @media screen and (min-width: $breakpoint-md) {
        padding: 20px;
      }
      @media screen and (min-width: $breakpoint-lg) {
        padding: 24px 48px;
      }
    }
    &__title {
      text-transform: uppercase;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;

      @media screen and (min-width: $breakpoint-md) {
        font-size: 20px;
      }
      @media screen and (min-width: $breakpoint-lg) {
        font-size: 25px;
      }
    }
    &__icon {
      margin-top: 28px;
    }
    &__description {
      font-size: 16px;
      font-weight: 500;
      margin-top: 28px;
      margin-inline: auto;

      @media screen and (min-width: $breakpoint-lg) {
        font-size: 20px;
      }
    }
    &__button {
      margin-top: auto;
    }
  }
</style>
