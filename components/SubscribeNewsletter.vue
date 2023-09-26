<script setup lang="ts"></script>

<template>
  <section class="subscribe-section">
    <div class="container">
      <div class="subscribe-section__content">
        <h2 class="subscribe-section__title">Подпишитесь на нашу рассылку</h2>
        <p class="subscribe-section__text">
          И каждый месяц получай новости проекта с отчетами о деятельности
        </p>
        <div class="subscribe-section__input-wrapper">
          <input class="subscribe-section__input" type="text" placeholder="E-mail" />
          <input class="subscribe-section__input" type="text" placeholder="Ваше имя" />
        </div>
        <button class="subscribe-section__button">Подписаться</button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .subscribe-section {
    overflow: hidden;
    position: relative;
    padding-top: 50px;

    &__content {
      position: relative;

      @media screen and (min-width: $breakpoint-sm) {
        max-width: 80%;
      }

      @media screen and (min-width: $breakpoint-md) {
        max-width: 60%;
      }

      &:before {
        content: '';
        position: absolute;
        background-image: url('/images/pencil.svg');
        width: 136px;
        height: 154px;
        top: -60px;
        right: -100px;
        z-index: -1;

        @media screen and (min-width: $breakpoint-sm) {
          top: 0;
          right: -150px;
        }

        @media screen and (min-width: $breakpoint-md) {
          right: -300px;
        }
      }
    }

    &__title {
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 111%;
      position: relative;
      display: inline-block;

      &:before {
        content: '';
        position: absolute;
        height: 18px;
        width: 104%;
        z-index: -1;
        left: -2%;
        bottom: -10px;
        background-color: $primary-color;
        transform: rotate(1deg);
      }
    }

    &__text {
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 111%;
      margin-top: 20px;

      @media screen and (min-width: $breakpoint-md) {
        font-size: 20px;
      }
    }

    &__button {
      padding: 18px 62px;
      border-radius: 25px;
      border: 1px solid transparent;
      background-color: $blue-color;
      color: $white-color;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 111%;
      margin-top: 26px;
      display: flex;
      white-space: nowrap;
      width: 100%;
      justify-content: center;
      cursor: pointer;

      @media screen and (min-width: $breakpoint-sm) {
        font-size: 20px;
      }

      @media screen and (min-width: $breakpoint-lg) {
        font-size: 25px;
      }
    }

    &__input-wrapper {
      display: flex;
      gap: 20px;
      margin-top: 40px;
      flex-direction: column;

      @media screen and (min-width: $breakpoint-sm) {
        flex-direction: row;
      }

      @media screen and (min-width: $breakpoint-md) {
        gap: 40px;
      }
    }

    &__input {
      border-radius: 20px;
      border: 3px solid $blue-color;
      padding: 16px 20px;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 111%;
      width: 100%;

      @media screen and (min-width: $breakpoint-sm) {
        font-size: 20px;
      }

      @media screen and (min-width: $breakpoint-md) {
        padding: 20px 30px;
      }
    }
  }
</style>
