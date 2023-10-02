<script setup lang="ts">
  const partners = [
    { image: '/images/about/partners/avito.svg' },
    { image: '/images/about/partners/esve.svg' },
    { image: '/images/about/partners/gazprom.svg' },
    { image: '/images/about/partners/fond.svg' },
    { image: '/images/about/partners/mosinjprogect.svg' },
    { image: '/images/about/partners/mgimo.svg' },
    { image: '/images/about/partners/keep-looking.svg' },
    { image: '/images/about/partners/leo.svg' },
    { image: '/images/about/partners/help.svg' }
  ]
</script>

<template>
  <section class="partners-section">
    <div class="container partners-section-container">
      <h2 class="partners-section__title">Наши друзья и партнеры</h2>
      <div class="partners-section__partners">
        <img
          v-for="(partner, index) in partners"
          :key="index"
          :src="partner.image"
          class="partners-img"
          alt="partner"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .partners-section {
    overflow: hidden;
    position: relative;

    &-container {
      position: relative;
      padding-bottom: 150px;

      &:before {
        content: '';
        position: absolute;
        background-image: url('/images/about/partners/plane.svg');
        width: 108px;
        height: 91px;
        bottom: 0;
        left: 30px;
      }
    }

    &__title {
      font-size: 34px;
      font-style: normal;
      font-weight: 400;
      line-height: 111%;
      position: relative;
      max-width: 250px;
      padding-bottom: 50px;

      @media screen and (min-width: $breakpoint-lg) {
        font-size: 50px;
        max-width: 400px;
      }

      &:before {
        content: '';
        position: absolute;
        background-image: url('/images/about/partners/line-arrow.svg');
        height: 165px;
        width: 173px;
        top: 40px;
        right: -70px;

        @media screen and (min-width: $breakpoint-sm) {
          top: 0;
          right: -170px;
        }
      }
    }

    &__partners {
      display: flex;
      flex-wrap: wrap;
      margin-top: 80px;
      gap: 40px;

      .partners-img {
        width: calc(100% / 2 - 40px);

        @media screen and (min-width: $breakpoint-sm) {
          width: calc(100% / 4 - 40px);
        }

        &:last-child {
          margin-top: 20px;
          margin-inline: auto;
          width: fit-content;
        }
      }
    }
  }
</style>
