<script lang="ts" setup>
  import { useRuntimeConfig } from '#imports'

  const runtimeConfig = useRuntimeConfig()
  const { whatsAppUrl } = runtimeConfig.public
</script>

<template>
  <section class="volunteers-section">
    <div class="container">
      <h2 class="volunteers-section__title">Стань частью команды!</h2>
      <div class="volunteers-section__card">
        <img src="/images/about/volunteers/avatars.png" alt="avatars" class="card__avatars" />
        <p class="card__text">
          Команда волонтеров Фонда «Дари Надежду» это комьюнити замечательных и добрых людей из
          разных сфер деятельности , объединенные общей целью сделать этот мир лучше.
        </p>
        <a :href="whatsAppUrl" target="_blank" class="card__button">Стать волонтером</a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .volunteers-section {
    padding-bottom: 250px;

    @media screen and (min-width: $breakpoint-md) {
      padding-bottom: 400px;
    }

    &__title {
      font-size: 34px;
      font-style: normal;
      font-weight: 400;
      line-height: 111%;
      position: relative;
      max-width: 400px;

      @media screen and (min-width: $breakpoint-lg) {
        font-size: 50px;
      }

      &:before {
        content: '';
        position: absolute;
        height: 18px;
        width: 104%;
        z-index: -1;
        left: -2%;
        bottom: 0;
        background-color: rgba($primary-color, 0.37);
        transform: rotate(-1deg);
      }
    }

    &__card {
      border: 3px solid $blue-color;
      border-radius: 43px;
      margin-top: 130px;
      padding: 110px 20px 80px;
      position: relative;
      text-align: center;

      &:before {
        content: '';
        position: absolute;
        background-image: url('/images/about/volunteers/stars.svg');
        top: -130px;
        right: 0;
        width: 201px;
        height: 201px;
      }
      &:after {
        content: '';
        position: absolute;
        background-image: url('/images/about/volunteers/background-image-sm.png');
        width: 269px;
        height: 223px;
        right: 0;
        left: 0;
        margin-inline: auto;
        bottom: -240px;

        @media screen and (min-width: $breakpoint-md) {
          background-image: url('/images/about/volunteers/background-image-md.png');
          width: 564px;
          height: 644px;
          right: 0;
          bottom: -360px;
          left: unset;
        }
      }
    }
    .card {
      &__avatars {
        margin-inline: auto;
        object-fit: contain;
      }

      &__text {
        text-align: center;
        max-width: 420px;
        margin-inline: auto;
        margin-top: 34px;
        color: $grey-color;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 1.11;
      }

      &__button {
        padding: 18px 62px;
        border-radius: 25px;
        border: 1px solid transparent;
        background-color: $blue-color;
        color: $white-color;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 111%;
        margin-top: 30px;
        display: inline-flex;
        white-space: nowrap;
        position: relative;
        z-index: 1;

        @media screen and (min-width: $breakpoint-sm) {
          font-size: 20px;
        }

        @media screen and (min-width: $breakpoint-lg) {
          font-size: 30px;
        }
      }
    }
  }
</style>
