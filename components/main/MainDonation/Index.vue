<script lang="ts" setup>
  import DonationForm from '~/components/DonationForm.vue'
  import SetOfWeek from '~/components/main/MainDonation/SetOfWeek.vue'
</script>

<template>
  <section id="donat" class="donations container">
    <h2 class="donations__title">Делай добро</h2>
    <p class="donations__description">
      Здесь вы можете сделать разовое пожертвование и оплатить продуктовый набор для одиноких
      пожилых людей,оказавшихся в трудной жизненной ситуации.
      <br />
      <br />
      Оформляя регулярное ежемесячное пожертвование, вы поддерживаете стабильное развитие фонда и
      гарантию регулярной помощи.Отказаться от подписки можно в любой момент.
    </p>
    <div class="donations__variations">
      <donation-form frequency-is-shown />
      <set-of-week />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .donations {
    &__title {
      font-size: 24px;
      font-weight: 700;
      line-height: 1.11;

      @media screen and (min-width: $breakpoint-md) {
        font-size: 36px;
      }
      @media screen and (min-width: $breakpoint-lg) {
        font-size: 50px;
      }
    }
    &__description {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.11;
      margin-top: 12px;
      max-width: 600px;
    }
    &__variations {
      display: flex;
      flex-direction: column;
      margin-top: 36px;
      gap: 34px;

      @media screen and (min-width: $breakpoint-md) {
        flex-direction: row;
      }
    }
  }
</style>
