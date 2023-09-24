<script lang="ts" setup>
  import DonationForm from '~/components/DonationForm.vue'
  import SetOfWeek from '~/components/main/MainDonation/SetOfWeek.vue'
</script>

<template>
  <section class="donations container">
    <h2 class="donations__title">Делай добро</h2>
    <p class="donations__description">
      Подари надежду пенсионерам и инвалидам. Помощь является важной и неотъемлемой частью
      социальной ответственности каждого общества. Эти уязвимые группы населения часто сталкиваются
      с финансовыми и физическими трудностями, они нуждаются в нашей поддержке.
    </p>
    <div class="donations__variations">
      <donation-form />
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
