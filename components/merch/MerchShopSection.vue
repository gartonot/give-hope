<script setup lang="ts">
  import { backgroundColors } from 'chalk'

  const products = [
    {
      name: 'тёмно-серая',
      image: '/images/merch/shop/dark-grey-cap.png',
      color: '#68667B'
    },
    {
      name: 'голубая',
      image: '/images/merch/shop/blue-cap.png',
      color: '#4E91C3'
    },
    {
      name: 'красная',
      image: '/images/merch/shop/red-cap.png',
      color: '#A05A5F'
    },
    {
      name: 'розовая',
      image: '/images/merch/shop/pink-cap.png',
      color: '#DD94B2'
    },
    {
      name: 'серая',
      image: '/images/merch/shop/grey-cap.png',
      color: '#676765'
    }
  ]
</script>

<template>
  <section class="shop-section">
    <div class="container shop-section__container">
      <div class="shop-section__products-cards">
        <div v-for="product in products" :key="product.name" class="product-card">
          <div class="product-card__title">{{ product.name }}</div>
          <img class="product-card__image" :src="product.image" :alt="product.name" />
          <div class="product-card__color" :style="{ backgroundColor: product.color }" />
        </div>
      </div>
      <button class="shop-section__button">В магазин</button>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .shop-section {
    padding-bottom: 30px;
    overflow: hidden;

    &__container {
      padding-top: 290px;
      position: relative;

      &:before {
        content: '';
        position: absolute;
        background-image: url('/images/merch/shop/shop-sale.svg');
        height: 287px;
        width: 511px;
        left: 0;
        top: 0;
      }
    }

    &__products-cards {
      display: flex;
      gap: 15px;
      text-align: center;
      margin-top: 40px;
      flex-wrap: wrap;
      justify-content: space-around;

      @media screen and (min-width: $breakpoint-md) {
        flex-wrap: unset;
        justify-content: unset;
      }
    }

    &__button {
      padding: 18px 62px;
      border-radius: 25px;
      border: 1px solid transparent;
      background-color: $blue-color;
      color: $white-color;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 111%;
      margin-top: 100px;
      display: flex;
      white-space: nowrap;

      @media screen and (min-width: $breakpoint-sm) {
        font-size: 20px;
      }

      @media screen and (min-width: $breakpoint-lg) {
        font-size: 25px;
      }
    }

    .product-card {
      &__title {
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 111%;

        @media screen and (min-width: $breakpoint-lg) {
          font-size: 20px;
        }
      }
      &__image {
        border-radius: 20px;
        border: 1px solid $blue-color;
        margin-top: 20px;
      }
      &__color {
        width: 66px;
        height: 66px;
        border-radius: 50%;
        margin-top: 30px;
        margin-inline: auto;
      }
    }
  }
</style>
