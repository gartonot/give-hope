<script lang="ts" setup>
  import { ref, useNuxtApp } from '#imports'
  import { PackageIcon } from '~/components/icons'
  import AppButton from '~/components/ui/AppButton.vue'
  import mainRepository from '~/services/repositories/main-repository'

  const sendSetOfWeekForm = async () => {
    const { redirect_url } = await mainRepository.payment({ donat_amount: 2600 })
    window.location.href = redirect_url
  }
  const { $viewport } = useNuxtApp()

  const setWeek = {
    mobile: [
      '1 Гречка',
      '1 Рис',
      '1 Крупа перловая',
      '1 Макароны',
      '1 Молоко',
      '1 Мука',
      '1 Сахар',
      '1 Масло подсолнечное',
      '1 Молоко сгущенное',
      '2 Мясные консервы',
      '4 Рыбные консервы',
      '1 Консервированная кукуруза',
      '1 Консервированный горошек',
      '1 Пакетированный чай',
      '1 Кофе растворимый/цикорий',
      '1 Шоколад темный',
      '1 Баранки',
      '1 Вафли',
      '1 Печенье',
      '1 Зефир/пастила',
      '1 Конфеты'
    ],
    desktop: [
      '1 Гречка',
      '1 Консервированная кукуруза',
      '1 Рис',
      '1 Консервированный горошек',
      '1 Крупа перловая',
      '1 Пакетированный чай',
      '1 Макароны',
      '1 Кофе растворимый/цикорий',
      '1 Молоко',
      '1 Шоколад темный',
      '1 Мука',
      '1 Баранки',
      '1 Сахар',
      '1 Вафли',
      '1 Масло подсолнечное',
      '1 Печенье',
      '1 Молоко сгущенное',
      '1 Зефир/пастила',
      '2 Мясные консервы',
      '1 Конфеты',
      '4 Рыбные консервы'
    ]
  }[$viewport.isLessThan('tablet') ? 'mobile' : 'desktop']

  const modalIsShown = ref(false)

  const modalOpen = () => (modalIsShown.value = true)
  const modalClose = () => (modalIsShown.value = false)
</script>

<template>
  <div class="set">
    <div class="set__wrapper">
      <div class="set__title">Набор продуктов на 2 недели</div>
      <div class="set__body">
        <button class="button-more" @click="modalOpen()">
          Подробнее
          <svg
            width="13"
            height="10"
            viewBox="0 0 13 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.8771 5.71538C8.20092 5.71375 3.65739 5.71049 3.65739 5.71049C2.19077 5.70961 1 4.51809 1 3.05147C1 3.05147 1 2.07827 1 1M9.1554 9.44289L12.413 5.77808L9.1554 2.11328"
              stroke="#78A8EF"
              stroke-width="1.08"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <package-icon class="set__icon" />
      </div>
      <p class="set__description">Мука, молоко, макароны, крупы, консервы, чай, сладости</p>
    </div>
    <app-button label="Пожертвовать" class="set__button" @click="sendSetOfWeekForm()" />
    <div :class="['modal', { 'modal-shown': modalIsShown }]" @click="modalClose()">
      <div class="modal__container" @click.stop>
        <div class="set-week">
          <h2 class="set-week__title">Наш набор на 2 недели</h2>
          <ul class="set-week__list list">
            <li v-for="(item, index) in setWeek" :key="index" class="list__item">{{ item }}</li>
          </ul>
          <p class="set-week__price">Стоимость 2.600 руб</p>
        </div>
      </div>
    </div>
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
    &__body {
      display: flex;
      flex-direction: column;
      align-items: center;

      .button-more {
        background-color: transparent;
        border: none;
        color: $blue-color;
        font-weight: 500;
        line-height: 1.11;
        cursor: pointer;
      }
    }
    &__title {
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      max-width: 80%;
      margin-inline: auto;

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
  .modal {
    position: fixed;
    inset: 0;
    background-color: rgba(0 0 0 / 5%);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: 0.2s;
    z-index: 10;

    &.modal-shown {
      opacity: 1;
      visibility: visible;

      .modal__container {
        transform: unset;
      }
    }
    &__container {
      background-color: $white-color;
      padding: 24px 28px;
      border-radius: 20px;
      transform: translateY(100px);
      transition: 0.2s;
      margin: 20px;

      @media screen and (min-width: $breakpoint-sm) {
        margin: unset;
      }
    }
  }
  .set-week {
    display: flex;
    flex-direction: column;
    max-width: 510px;

    &__title {
      font-size: 20px;
      font-weight: 700;
      line-height: 1.11;
    }
    .list {
      display: flex;
      flex-wrap: wrap;
      column-gap: 32px;
      padding-left: 0;

      &__item {
        text-align: left;
        list-style: none;
        color: $primary-color;
        flex-grow: 1;
        width: 100%;

        @media screen and (min-width: $breakpoint-sm) {
          width: calc(100% / 2 - 32px);
        }
      }
    }
    &__list {
      margin-top: 36px;
    }
    &__price {
      margin-left: auto;
      margin-top: 16px;
      font-weight: 700;
      line-height: 1.11;
    }
  }
</style>
