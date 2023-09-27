<script setup lang="ts">
  import CustomCheckbox from '~/components/CustomCheckbox.vue'
  import { useNuxtApp } from '#imports'
  import { ref } from 'vue'

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
      name: 'Добро до двери',
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
  const selectProgram = (id: number) => {
    selectedProgram.value = id === selectedProgram.value ? null : id
  }
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
          {{ program.name }}
          <strong>{{ program.price }} ₽</strong>
        </button>

        <div class="help-chat__dialog-input-wrapper">
          Другая сумма —
          <input class="help-chat__dialog-input" type="text" placeholder="500 ₽" />
        </div>
        <input
          class="help-chat__dialog-input-email"
          type="text"
          placeholder="Ваш e-mail для чека"
        />
        <button class="help-chat__dialog-send">Пожертвовать</button>
        <p class="help-chat__dialog-description">
          Совершая пожертвование, вы соглашаетесь с условиями договора-оферты и политики
          конфиденцальности
        </p>
      </div>
      <div class="help-chat__button-wrapper">
        <button class="help-chat__button" @click="$helpChat.change()">Помочь</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
      padding: 20px 20px 20px;
      background-color: $blue-dark-color;
      border-radius: 20px;
      max-width: 320px;
      min-width: 320px;

      @media screen and (min-width: $breakpoint-sm) {
        padding: 30px 30px 50px;
      }

      &-program {
        width: 100%;
        margin-top: 8px;
        background-color: $white-color;
        border: 1px solid transparent;
        border-radius: 15px;
        padding: 10px 20px 10px 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;

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

      &-input-email {
        border: 1px solid transparent;
        border-radius: 9px;
        background-color: $white-color;
        padding: 8px;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 111%;
        width: 100%;
        margin-top: 20px;
      }
      &-send {
        border-radius: 20px;
        border: 1px solid $white-color;
        background: linear-gradient(180deg, $blue-color 0%, rgba(120, 168, 239, 0) 100%);
        color: $white-color;
        font-size: 25px;
        font-style: normal;
        font-weight: 700;
        line-height: 111%;
        padding-block: 10px;
        width: 100%;
        margin-top: 16px;
        cursor: pointer;

        @media screen and (min-width: $breakpoint-sm) {
          font-size: 20px;
          padding-block: 20px;
        }
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

      @media screen and (min-width: $breakpoint-sm) {
        margin-top: 30px;
      }
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
        padding: 14px 52px;
      }
    }
  }
</style>
