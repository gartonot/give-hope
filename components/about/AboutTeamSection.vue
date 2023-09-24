<script setup lang="ts">
  const workingTeam = [
    {
      name: 'Краснова Дарина Борисовна',
      image: '/images/about/team/darina.png',
      text: 'Учредитель и руководитель программы "Дари Ремонт',
      class: 'worker-card__image-sun'
    },
    {
      name: 'Горяинова Анастасия Александровна',
      image: '/images/about/team/anastasia.png',
      text: 'Генеральный директор',
      class: ''
    },
    {
      name: 'Сидорова Эльмина Валерьевна',
      image: '/images/about/team/darina.png',
      text: 'Главный бухгалтер',
      class: ''
    },
    {
      name: 'Басиладзе Мариами Рамазиевна',
      image: '/images/about/team/mariami.png',
      text: 'Видеограф',
      class: ''
    },
    {
      name: 'Горяинова Анастасия Александровна',
      image: '/images/about/team/anastasia.png',
      text: 'Генеральный директор',
      class: 'worker-card__image-star'
    },
    {
      name: 'Сидорова Эльмина Валерьевна',
      image: '/images/about/team/darina.png',
      text: 'Главный бухгалтер',
      class: ''
    }
  ]
</script>

<template>
  <section class="team-section container">
    <h2 class="team-section__title">Наша команда</h2>
    <div class="team-section__cards">
      <div v-for="worker in workingTeam" :key="worker.name" class="worker-card">
        <div :class="[worker.class]">
          <img class="worker-card__image" :src="worker.image" :alt="worker.name" loading="lazy" />
        </div>
        <p class="worker-card__text">{{ worker.text }}</p>
        <p class="worker-card__name">
          {{ worker.name }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .team-section {
    overflow: hidden;

    &__title {
      color: $grey-color;
      font-size: 34px;
      font-style: normal;
      font-weight: 400;
      line-height: 111%;

      @media screen and (min-width: $breakpoint-lg) {
        font-size: 50px;
      }
    }

    &__cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 50px 0;
      margin-top: 50px;
      padding-top: 10px;

      @media screen and (min-width: $breakpoint-sm) {
        margin-top: 100px;
      }

      @media screen and (min-width: $breakpoint-md) {
        gap: 90px 0;
      }
    }

    .worker-card {
      width: 100%;
      text-align: center;
      position: relative;

      @media screen and (min-width: $breakpoint-sm) {
        width: 40%;
      }

      @media screen and (min-width: $breakpoint-lg) {
        width: 26%;
      }

      &__image {
        border-radius: 26px;
        border: 1px solid $blue-color;
        object-fit: cover;
        margin-inline: auto;
      }

      &__text {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 111%;

        @media screen and (min-width: $breakpoint-sm) {
          font-size: 16px;
        }

        @media screen and (min-width: $breakpoint-md) {
          height: 85px;
        }
      }
      &__name {
        color: $grey-color;
        position: relative;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 111%;
        display: inline-block;

        @media screen and (min-width: $breakpoint-lg) {
          font-size: 25px;
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
          transform: rotate(-1deg);
        }
      }
      &__image-star {
        position: relative;

        &:before {
          content: '';
          position: absolute;
          width: 100px;
          height: 100px;
          bottom: -25px;
          right: -50px;
          z-index: -1;
          background-repeat: no-repeat;
          background-position: bottom right;
          background-image: url('/images/about/team/star2.svg');
          background-size: contain;
        }
      }
      &__image-sun {
        position: relative;

        &:before {
          content: '';
          position: absolute;
          width: 70px;
          height: 70px;
          top: -30px;
          left: -20px;
          z-index: -1;
          background-repeat: no-repeat;
          background-image: url('/images/about/team/sun.svg');
          background-size: contain;
        }
      }
    }
  }
</style>
