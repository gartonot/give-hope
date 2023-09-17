<script lang="ts" setup>
  import { useRoute } from '#imports'
  import { LogoIcon } from '~/components/icons'

  const route = useRoute()

  const headerLink = [
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

  const linkIsActive = (link: string) => route.path === link
</script>

<template>
  <header class="header container">
    <a href="/" class="header__logo">
      <logo-icon />
      <span>
        Благотворительный <br />
        Фонд
      </span>
    </a>
    <nav class="header__menu">
      <a
        v-for="link in headerLink"
        :key="link.id"
        :href="link.href"
        :class="['header__menu-link', { active: linkIsActive(link.href) }]"
      >
        {{ link.name }}
      </a>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 42px;

    &__logo {
      color: $grey-color;
      font-size: 20px;
      line-height: 1.11;
      text-transform: uppercase;
      display: flex;
      gap: 20px;
    }
    &__menu {
      &-link {
        color: $grey-color;
        padding: 12px 20px;
        border-radius: 25px;
        font-size: 20px;
        line-height: 1.11;

        &.active {
          background-color: $primary-color;
          color: $white-color;
        }
      }
    }
  }
</style>
