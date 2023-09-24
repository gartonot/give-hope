<script lang="ts" setup>
  import { LogoIcon } from '~/components/icons'
  import HeaderMenu from './HeaderMenu.vue'
  import HeaderBurgerMenu from '~/components/TheHeader/HeaderBurgerMenu.vue'

  const headerLinks = [
    {
      id: 1,
      name: 'О нас',
      href: '/about'
    },
    {
      id: 2,
      name: 'Программы',
      href: '/program'
    },
    {
      id: 3,
      name: 'Мерч',
      href: '/merch'
    },
    {
      id: 4,
      name: 'Контакты',
      href: '#contacts'
    }
  ]
</script>

<template>
  <header class="header container">
    <a href="/" class="header__logo">
      <logo-icon />
      <span class="header__logo-text">
        Благотворительный <br />
        Фонд
      </span>
    </a>
    <header-menu class="header__menu" :header-menu-links="headerLinks" />
    <header-burger-menu class="header__burger-menu" :header-menu-links="headerLinks" />
  </header>
</template>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 42px;

    &__logo {
      display: flex;
      gap: 20px;

      &-text {
        line-height: 1.11;
        text-transform: uppercase;
        font-size: 16px;

        @media screen and (min-width: $breakpoint-sm) {
          font-size: 20px;
        }
      }
    }
    &__menu {
      display: none;

      @media screen and (min-width: $breakpoint-lg) {
        display: flex;
      }
    }
    &__burger-menu {
      display: flex;

      @media screen and (min-width: $breakpoint-lg) {
        display: none;
      }
    }
  }
</style>
