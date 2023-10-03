<script setup lang="ts">
  const ambassadors = [
    {
      name: 'Лаура Джугелия',
      image: '/images/about/ambassadors/laura.png'
    },
    {
      name: 'Александра Маркина',
      image: '/images/about/ambassadors/alexandra.png'
    },
    {
      name: 'Наталья Турецкая',
      image: '/images/about/ambassadors/natalia.png'
    },
    {
      name: 'Кристина Левиева',
      image: '/images/about/ambassadors/kristina.png'
    },
    {
      name: 'Ксения Шипилова',
      image: '/images/about/ambassadors/ksenia.png'
    },
    {
      name: 'Кристина Маркова',
      image: '/images/about/ambassadors/kristina-2.png'
    }
  ]
</script>

<template>
  <section class="ambassadors-section">
    <div class="container ambassadors-section-container">
      <h2 class="ambassadors-section__title">Амбассадоры фонда</h2>
      <div class="ambassadors-section__cards">
        <div v-for="ambassador in ambassadors" :key="ambassador.name" class="ambassador-card">
          <img
            class="ambassador-card__image"
            :src="ambassador.image"
            :alt="ambassador.name"
            loading="lazy"
          />
          <p class="ambassador-card__name">
            {{ ambassador.name }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .ambassadors-section {
    overflow: hidden;

    .ambassadors-section-container {
      position: relative;
    }

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
      position: relative;

      @media screen and (min-width: $breakpoint-sm) {
        margin-top: 100px;
      }

      @media screen and (min-width: $breakpoint-md) {
        gap: 90px 0;
      }

      @media screen and (min-width: $breakpoint-md) {
        gap: 90px 0;
      }
    }

    .message-image {
      object-fit: contain;
      display: none;

      @media screen and (min-width: $breakpoint-sm) {
        display: block;
      }
    }

    .ambassador-card {
      width: 100%;
      text-align: center;
      position: relative;

      @media screen and (min-width: $breakpoint-sm) {
        width: 40%;
      }

      &__image {
        object-fit: contain;
        width: 433px;
        max-height: 280px;
        min-height: 280px;
        margin-inline: auto;
      }

      &__name {
        color: $grey-color;
        position: relative;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 111%;
        margin-top: 20px;
        display: inline-block;

        @media screen and (min-width: $breakpoint-sm) {
          display: block;
        }

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
    }
  }
</style>
