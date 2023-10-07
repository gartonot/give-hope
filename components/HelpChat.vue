<script setup lang="ts">
  import CustomCheckbox from '~/components/CustomCheckbox.vue'
  import { useNuxtApp } from '#imports'
  import { ref } from 'vue'
  import DonationAccept from '~/components/DonationAccept.vue'

  const { $helpChat } = useNuxtApp()
  const programs = [
    {
      name: 'Пожилым людям',
      id: 1,
      image: '/images/fond1.svg',
      price: 300
    },
    {
      name: 'Уютная старость',
      id: 2,
      image: '/images/fond2.svg',
      price: 300
    },
    {
      name: 'Дари ремонт',
      id: 3,
      image: '/images/fond3.svg',
      price: 300
    },
    {
      name: 'Добро до двери',
      id: 4,
      image: '/images/fond4.svg',
      price: 300
    }
  ]
  const selectedProgram = ref<number | null>(null)
  const otherSum = ref()
  const selectProgram = (id: number) => {
    selectedProgram.value = id === selectedProgram.value ? null : id
  }

  const donat_amount = ref(0)

  const sendForm = async () => {
    if (selectedProgram.value === null) {
      if (otherSum.value) {
        donat_amount.value = Number(otherSum.value)
      }
    } else {
      const selectedCard = programs.find(({ id }) => selectedProgram.value === id)
      donat_amount.value = selectedCard.price
    }

    if (donat_amount.value) {
      modalOpen()
    }
  }

  const modalIsShown = ref(false)
  const modalOpen = () => (modalIsShown.value = true)
  const modalClose = () => (modalIsShown.value = false)
</script>

<template>
  <div class="help-chat">
    <div class="help-chat__container">
      <div v-show="$helpChat.status" class="help-chat__dialog">
        <custom-checkbox />
        <p class="help-chat__dialog-title">Выбери программу</p>
        <button
          v-for="program in programs"
          :key="program.id"
          :class="[
            'help-chat__dialog-program',
            { 'active-program': selectedProgram === program.id }
          ]"
          @click="selectProgram(program.id)"
        >
          <img class="help-chat__dialog-image" :src="program.image" :alt="program.name" />
          <p class="text">{{ program.name }}</p>
          <strong class="price">{{ program.price }} ₽</strong>
        </button>

        <div class="help-chat__dialog-input-wrapper">
          Другая сумма —
          <input
            v-model="otherSum"
            class="help-chat__dialog-input"
            type="text"
            placeholder="500 ₽"
          />
        </div>
        <button class="help-chat__dialog-send" @click="sendForm()">Пожертвовать</button>
        <p class="help-chat__dialog-description">
          Совершая пожертвование, вы соглашаетесь с условиями договора-оферты и политики
          конфиденцальности
        </p>
      </div>
      <div class="help-chat__button-wrapper">
        <button class="help-chat__button" @click="$helpChat.change()">Помочь</button>
      </div>
    </div>
    <div :class="['modal', { 'modal-shown': modalIsShown }]" @click="modalClose()">
      <div class="modal__container" @click.stop>
        <div class="close-button" @click="modalClose()">
          <svg
            width="20"
            height="20"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.212891"
              y="2.95435"
              width="4.17804"
              height="34.618"
              transform="rotate(-45 0.212891 2.95435)"
              fill="#78A8EF"
            />
            <rect
              x="2.95508"
              y="27.644"
              width="4.17804"
              height="34.618"
              transform="rotate(-135 2.95508 27.644)"
              fill="#78A8EF"
            />
          </svg>
        </div>
        <donation-accept :sum="donat_amount" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
      padding: 48px 28px 24px 28px;
      border-radius: 20px;
      transform: translateY(100px);
      transition: 0.2s;
      margin: 20px;
      position: relative;
      width: 100%;
      max-width: 312px;

      .close-button {
        position: absolute;
        right: 24px;
        top: 24px;
        cursor: pointer;
      }

      @media screen and (min-width: $breakpoint-sm) {
        margin: unset;
      }
    }
  }

  .help-chat {
    position: relative;

    &__container {
      position: fixed;
      right: 20px;
      bottom: 10px;
      z-index: 2;

      @media screen and (min-width: $breakpoint-sm) {
        right: 50px;
        bottom: 40px;
      }
    }

    &__dialog {
      padding: 20px;
      background-color: $blue-dark-color;
      border-radius: 20px;
      max-width: 320px;
      min-width: 320px;

      &-program {
        width: 100%;
        margin-top: 8px;
        background-color: $white-color;
        border: 1px solid transparent;
        border-radius: 15px;
        padding: 10px;
        display: flex;
        align-items: center;
        cursor: pointer;

        .text {
          margin-left: 20px;
        }
        .price {
          margin-left: auto;
        }

        @media screen and (min-width: $breakpoint-sm) {
          margin-top: 12px;
        }
      }

      .active-program {
        background-color: rgba($white-color, 0.6);
      }

      &-title {
        color: $white-color;
        margin-top: 10px;

        @media screen and (min-width: $breakpoint-sm) {
          margin-top: 20px;
        }
      }

      &-image {
        width: 30px;
        height: 30px;
      }

      &-input-wrapper {
        margin-top: 20px;
        color: $white-color;
      }

      &-input {
        border: 1px solid transparent;
        border-radius: 15px;
        background-color: $white-color;
        padding: 12px;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 111%;
        width: 50%;
      }

      &-send {
        border-radius: 8px;
        border: 1px solid $white-color;
        background: linear-gradient(180deg, $blue-color 0%, rgba(120, 168, 239, 0) 100%);
        color: $white-color;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 111%;
        padding-block: 10px;
        width: 100%;
        margin-top: 16px;
        cursor: pointer;
      }
      &-description {
        color: $white-color;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 111%;
        margin-top: 16px;
      }
    }

    &__button-wrapper {
      margin-top: 10px;
      text-align: end;
    }

    &__button {
      border-radius: 20px;
      border: 1px solid $white-color;
      background-color: $blue-dark-color;
      color: $white-color;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 111%;
      padding: 10px 30px;
      cursor: pointer;

      @media screen and (min-width: $breakpoint-sm) {
        font-size: 25px;
        padding: 10px 52px;
      }
    }
  }
</style>
