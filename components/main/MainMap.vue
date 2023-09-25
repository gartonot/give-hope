<script lang="ts" setup>
  import AppHeadline from '~/components/ui/AppHeadline.vue'
</script>

<template>
  <section class="map">
    <div class="container">
      <app-headline class="map__title" label="Мы работаем на территории" />
      <img
        class="map__img"
        src="/images/main/map.png"
        width="1160"
        height="489"
        alt="Карта Москвы и МО"
      />
      <div class="map__description">
        Московская область, Тульская область, Ярославская область, Тверская область, Ивановская
        область
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .map {
    &__title {
      margin-left: 0;
      max-width: 100%;

      @media screen and (min-width: $breakpoint-md) {
        max-width: 40%;
      }
      @media screen and (min-width: $breakpoint-lg) {
        max-width: 38%;
      }
    }
    &__img {
      width: 100%;
      height: auto;
      margin-top: 24px;

      @media screen and (min-width: $breakpoint-md) {
        margin-top: 36px;
      }
      @media screen and (min-width: $breakpoint-lg) {
        margin-top: 55px;
      }
    }
    &__description {
      text-align: center;
      margin-top: 20px;
      color: $primary-color;

      @media screen and (min-width: $breakpoint-md) {
        margin-top: 32px;
      }
      @media screen and (min-width: $breakpoint-lg) {
        margin-top: 40px;
      }
    }
  }
</style>
