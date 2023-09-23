<script lang="ts" setup>
  import ProgressImage from './ProgressImage.vue'
  import AppButton from '~/components/ui/AppButton.vue'
  import AppHeadline from '~/components/ui/AppHeadline.vue'
</script>

<template>
  <section class="urgent-help">
    <div class="container urgent-help_container">
      <progress-image />
      <div class="urgent-help__content">
        <app-headline class="urgent-help__headline" label="Срочная помощь" />
        <p class="donation-name">Анна Петровна, 67 лет</p>
        <p class="donation-description">
          Наша команда предлагает помощь вашей бабушке в различных повседневных задачах. Мы
          понимаем, что каждая бабушка заслуживает внимания и заботы, и мы готовы предложить нашу
          экспертную помощь, чтобы облегчить ей повседневную жизнь. Наша команда предлагает помощь
          вашей бабушке в различных повседневных задачах. Мы понимаем, что каждая бабушка
          заслуживает внимания и заботы, и мы готовы предложить нашу экспертную помощь, чтобы
          облегчить ей повседневную жизнь.
        </p>
        <app-button class="urgent-help__button" label="Пожертвовать" href="#" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .urgent-help {
    &_container {
      border: 4px solid $primary-color;
      padding: 35px 43px 35px 43px;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;

      @media screen and (min-width: $breakpoint-md) {
        flex-direction: row;
      }
      @media screen and (min-width: $breakpoint-lg) {
        padding: 35px 112px 35px 43px;

        gap: 119px;
      }

      .progress-image {
        width: 100%;
        height: fit-content;

        @media screen and (min-width: $breakpoint-md) {
          width: 60%;
        }

        @media screen and (min-width: $breakpoint-lg) {
          width: 50%;
        }
      }
      .urgent-help__content {
        width: 100%;

        @media screen and (min-width: $breakpoint-md) {
          width: 40%;
        }

        @media screen and (min-width: $breakpoint-lg) {
          width: 50%;
        }
      }
    }
    &__headline {
      text-transform: uppercase;
    }
    .donation-name {
      margin-top: 64px;
      color: $grey-color;
      font-size: 20px;
      font-weight: 700;
      line-height: 1.11;

      @media screen and (min-width: $breakpoint-md) {
        font-size: 28px;
      }
      @media screen and (min-width: $breakpoint-lg) {
        font-size: 30px;
      }
    }
    .donation-description {
      color: $grey-color;
      font-size: 20px;
      font-weight: 400;
      line-height: 111%;
      margin-top: 32px;
    }
    &__button {
      margin-top: 20px;

      @media screen and (min-width: $breakpoint-lg) {
        margin-top: 108px;
      }
    }
  }
</style>
