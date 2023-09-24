<script setup lang="ts">
  const benefits = [
    {
      title: '«Добро до двери»',
      text: 'Закупка, сбор и доставка продуктовых коробок до двери нуждающихся людей',
      image: '/images/about/benefits/first.svg'
    },
    {
      title: '«Дари ремонт»',
      text: 'Адресный ремонт частного или муниципального жилья',
      image: '/images/about/benefits/second.svg'
    },
    {
      title: '«Уютная старость»',
      text: 'Косметический ремонт в интернатах, отделениях сестринского ухода и домах престарелых',
      image: '/images/about/benefits/third.svg'
    },
    {
      title: '«Пожилым людям»',
      text: 'Организация различных досуговых мероприятий, мастер-классов и праздников в государственных учреждениях',
      image: '/images/about/benefits/fourth.svg'
    }
  ]
</script>

<template>
  <section class="benefits-section container">
    <p class="benefits-section__description">
      Фонд оказывает помощь по различным направлениям и реализует несколько благотворительных
      программ:
    </p>
    <div class="benefits-section__cards">
      <div v-for="benefit in benefits" :key="benefit.title" class="benefit-card">
        <h2 class="benefit-card__title">{{ benefit.title }}</h2>
        <p class="benefit-card__text">{{ benefit.text }}</p>
        <img class="benefit-card__image" :src="benefit.image" :alt="benefit.title" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .benefits-section {
    &__description {
      position: relative;
      display: inline-block;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 111%;

      @media screen and (min-width: $breakpoint-sm) {
        font-size: 30px;
      }

      @media screen and (min-width: $breakpoint-lg) {
        width: 80%;
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

        @media screen and (min-width: $breakpoint-sm) {
          width: 110%;
          left: -5%;
        }
      }
    }

    &__cards {
      display: flex;
      text-align: center;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 50px 10px;
      margin-top: 120px;
      flex-direction: column;

      @media screen and (min-width: $breakpoint-md) {
        flex-direction: row;
      }

      .benefit-card {
        width: 100%;

        @media screen and (min-width: $breakpoint-md) {
          width: 48%;
        }

        &__title {
          font-size: 34px;
          font-style: normal;
          font-weight: 400;
          line-height: 111%;
          white-space: nowrap;

          @media screen and (min-width: $breakpoint-lg) {
            font-size: 50px;
          }
        }
        &__text {
          margin-top: 20px;
        }
        &__image {
          object-fit: contain;
          width: 100px;
          margin-inline: auto;
          margin-top: 20px;

          @media screen and (min-width: $breakpoint-md) {
            width: 180px;
            margin-top: 55px;
          }
        }
      }
    }
  }
</style>
