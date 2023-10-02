<script setup lang="ts"></script>

<template>
  <section class="merch-hero">
    <div class="container merch-hero__container">
      <div>
        <h1 class="merch-hero__title">
          ВЫ МОЖЕТЕ ПОДДЕРЖАТЬ ПРОЕКТ, КУПИВ МЕРЧ, В МАГАЗИНЕ НАШЕГО ПАРТНЁРА HFY
        </h1>
        <p class="merch-hero__text">
          Покупая мерч Фонда - Вы помогаете людям. 50% от каждой бейсболки и 100% от каждой худи
          будут переведены на счет фонда и распределены по благотворительным программам.
        </p>
        <button class="merch-hero__button">В магазин</button>
        <div class="merch-hero__icons">
          <img src="/images/merch/hero/image1.png" alt="image1" loading="lazy" />
          <img src="/images/merch/hero/image2.svg" alt="image2" loading="lazy" />
          <img src="/images/merch/hero/image3.png" alt="image3" loading="lazy" />
        </div>
      </div>
      <div class="image-container">
        <img
          class="merch-hero__image"
          src="/images/merch/hero/merch-dog.png"
          alt="dog"
          width="460"
          height="574"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .merch-hero {
    padding-block: 40px;
    overflow: hidden;

    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;

      @media screen and (min-width: $breakpoint-lg) {
        flex-direction: row;
      }
    }

    &__title {
      font-size: 30px;
      font-style: normal;
      font-weight: 700;
      line-height: 111%;
      position: relative;

      @media screen and (min-width: $breakpoint-lg) {
        max-width: 470px;
      }

      &:after {
        content: '';
        position: absolute;
        background-image: url('/images/merch/hero/arrow.svg');
        width: 46px;
        height: 171px;
        right: -20px;
        bottom: -160px;

        @media screen and (min-width: $breakpoint-lg) {
          right: -20px;
          bottom: -60px;
        }
      }
    }
    &__text {
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 111%;
      margin-top: 20px;

      @media screen and (min-width: $breakpoint-lg) {
        max-width: 300px;
      }
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
      margin-top: 25px;
      display: flex;
      white-space: nowrap;
      cursor: pointer;

      @media screen and (min-width: $breakpoint-sm) {
        font-size: 20px;
      }

      @media screen and (min-width: $breakpoint-lg) {
        font-size: 25px;
      }
    }
    &__icons {
      display: flex;
      gap: 20px;
      margin-top: 40px;
    }
    .image-container {
      position: relative;

      &:after {
        content: '';
        position: absolute;
        background-image: url('/images/merch/hero/diamond.svg');
        height: 201px;
        width: 195px;
        bottom: -80px;
        right: -100px;
      }
    }
    &__image {
      border-radius: 20px;
      object-fit: cover;
      margin-top: 30px;

      @media screen and (min-width: $breakpoint-lg) {
        margin-top: unset;
      }
    }
  }
</style>
