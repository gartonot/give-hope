<script lang="ts" setup>
  import AppHeadline from '~/components/ui/AppHeadline.vue'
</script>

<template>
  <section class="map">
    <div class="container">
      <img
        class="particle-arrow-right-dotted"
        src="/images/main/particle/arrow-right-dotted.svg"
        width="464"
        height="135"
        alt="Arrow right dotted"
      />
      <img
        class="particle-stars"
        src="/images/main/particle/stars.svg"
        width="388"
        height="373"
        alt="Stars"
      />
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
  .particle-arrow-right-dotted {
    position: absolute;
    left: 45%;
    display: none;

    @media screen and (min-width: $breakpoint-lg) {
      display: block;
    }
  }
  .particle-stars {
    position: absolute;
    right: 70px;
    display: none;

    @media screen and (min-width: $breakpoint-lg) {
      display: block;
    }
  }
  .map {
    position: relative;

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
      position: relative;
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
