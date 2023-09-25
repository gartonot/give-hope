<script lang="ts" setup>
  import AppHeadline from '~/components/ui/AppHeadline.vue'
  import ProgramCard from '~/components/main/MainPrograms/ProgramCard.vue'

  const programList = [
    {
      id: 1,
      title: 'Пожилым людям',
      description:
        'Улучшение качества жизни пожилых людей, нуждающихся в помощи и организация досуговых мероприятий в домах престарелых',
      programUrl: '/program/elderly-people',
      image: {
        src: '/images/programs/program-1.webp',
        width: 440,
        height: 230
      },
      isCollection: false
    },
    {
      id: 2,
      title: 'Уютная старость',
      description:
        'Страница посвящена людям, помощь которым необходима сейчас и как можно скорее. Быстрая и своевременная реакция - залог счастья пожилых людей.',
      programUrl: '/program/cozy-old-age',
      image: {
        src: '/images/programs/program-2.webp',
        width: 440,
        height: 230
      },
      isCollection: true
    },
    {
      id: 3,
      title: 'Дари ремонт',
      description:
        'Программа Фонда направлена на улучшение качества жизни людей старшего возраста, одиноко проживающих в квартирах или домах, которые нуждаются в ремонте.',
      programUrl: '/program/dari-repair',
      image: {
        src: '/images/programs/program-3.webp',
        width: 440,
        height: 230
      },
      isCollection: false
    },
    {
      id: 4,
      title: 'Добро до двери',
      description:
        'Страница посвящена людям, помощь которым необходима сейчас и как можно скорее. Быстрая и своевременная реакция - залог счастья пожилых людей.',
      programUrl: '/program/welcome-to-door',
      image: {
        src: '/images/programs/program-4.webp',
        width: 440,
        height: 230
      },
      isCollection: false
    }
  ]
</script>

<template>
  <section class="programs">
    <div class="container programs__container">
      <img
        class="particle-arrow-down"
        src="/images/main/particle/arrow-down.svg"
        width="30"
        height="101"
        alt="Arrow down"
      />
      <img
        class="particle-glasses"
        src="/images/main/particle/glasses.svg"
        width="147"
        height="53"
        alt="Glasses"
      />
      <app-headline label="Программа фонда" class="programs__title" />
      <div class="programs__list">
        <program-card
          v-for="program in programList"
          :key="program.id"
          :program="program"
          :class="['program-card', { 'program-card_collection': program.isCollection }]"
        />
        <img
          class="particle-explosion"
          src="/images/main/particle/explosion.svg"
          width="339"
          height="369"
          alt="Explosion image"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .particle-arrow-down {
    position: absolute;
    right: 0;
    top: -200px;
    display: none;

    @media screen and (min-width: $breakpoint-md) {
      display: block;
    }
  }
  .particle-glasses {
    position: absolute;
    right: 30%;
    display: none;

    @media screen and (min-width: $breakpoint-md) {
      display: block;
    }
  }
  .particle-explosion {
    position: absolute;
    bottom: -100px;
    left: -150px;
    display: none;

    @media screen and (min-width: $breakpoint-md) {
      display: block;
    }
  }
  .programs {
    &__container {
      position: relative;
    }
    &__title {
      margin-left: 0;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      margin-top: 60px;
      position: relative;

      @media screen and (min-width: $breakpoint-md) {
        margin-top: 120px;
      }
      @media screen and (min-width: $breakpoint-lg) {
        margin-top: 180px;
      }
    }
    .program-card {
      position: relative;
      z-index: 1;
      --count-card: 1;
      width: calc(100% / var(--count-card) - 20px);
      flex-grow: 1;

      @media screen and (min-width: $breakpoint-lg) {
        --count-card: 2;
      }
    }
  }
</style>
