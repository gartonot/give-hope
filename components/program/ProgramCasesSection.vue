<script lang="ts" setup>
  import AppHeadline from '~/components/ui/AppHeadline.vue'

  const casesList = [
    {
      id: 1,
      title: 'Ремонт №1',
      name: 'Хомич Анатолй Семёнович',
      image: '/images/case/repair-1.png',
      href: '/case/remont-1'
    },
    {
      id: 2,
      title: 'Ремонт №2',
      name: 'Вера Евгеньевна',
      image: '/images/case/repair-2.png',
      href: '/case/remont-2'
    },
    {
      id: 3,
      title: 'Ремонт №3',
      name: 'Римма Сергеевна',
      image: '/images/case/repair-3.png',
      href: '/case/remont-3'
    },
    {
      id: 4,
      title: 'Ремонт №4',
      name: 'Любовь Михайловна',
      image: '/images/case/repair-4.png',
      href: '/case/remont-4'
    },
    {
      id: 5,
      title: 'Ремонт №5',
      name: 'Петр Анатольевич',
      image: '/images/case/repair-5.png',
      href: '/case/remont-5'
    },
    {
      id: 6,
      title: 'Ремонт №6',
      name: 'семьи Рузаковых',
      image: '/images/case/repair-6.png',
      href: '/case/remont-6'
    }
  ]
</script>

<template>
  <section class="program-case">
    <div class="container">
      <app-headline class="program-case__title" label="Ваша помощь имеет огромное значение!" />
      <div class="program-case__list">
        <div v-for="card in casesList" :key="card.id" class="card-item program-case__list-item">
          <img
            :src="card.image"
            width="562"
            height="283"
            class="card-item__image"
            alt="card image"
          />
          <div class="card-item__info">
            <p class="">{{ card.title }}</p>
            <div class="card-meta">
              <p class="">{{ card.name }}</p>
              <a class="card-item__href" :href="card.href">Подробнее</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .card-item {
    position: relative;
    color: $white-color;
    width: fit-content;
    font-size: 20px;
    text-shadow: 0 8px 16px rgba(120 120 120 / 10);

    a {
      color: $black-color;
    }

    &__image {
      object-fit: cover;
      border-radius: 25px;
    }

    &__info {
      position: absolute;
      top: 0;
      left: 0;
      padding: 20px;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .card-meta {
      display: flex;

      margin-top: auto;

      flex-direction: column;

      @media screen and (min-width: $breakpoint-lg) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
    }
    &__href {
      background-color: $white-color;
      padding: 12px 16px;
      border-radius: 50px;
      width: fit-content;
      margin-top: 20px;

      @media screen and (min-width: $breakpoint-lg) {
        margin-top: 0;
      }
      &:hover {
        background-color: #e1e1e1;
      }
    }
  }
  .program-case {
    &__title {
      max-width: 600px;
      margin-left: 0;
    }
    &__list {
      margin-top: 40px;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;

      &-item {
        width: 100%;
        flex-grow: 1;

        @media screen and (min-width: $breakpoint-md) {
          width: calc(100% / 2 - 20px);
        }
      }

      @media screen and (min-width: $breakpoint-md) {
        margin-top: 80px;
      }
      @media screen and (min-width: $breakpoint-lg) {
        margin-top: 120px;
      }
    }
  }
</style>
