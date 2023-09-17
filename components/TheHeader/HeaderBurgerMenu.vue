<script lang="ts" setup>
  import { toRefs, ref, useRoute } from '#imports'
  import { IHeaderMenuLink } from '~/services/interfaces'

  interface IProps {
    headerMenuLinks: IHeaderMenuLink[]
  }

  const props = defineProps<IProps>()
  const { headerMenuLinks } = toRefs(props)
  const route = useRoute()
  const linkIsActive = (link: string) => route.path === link
  const burgerIsActive = ref(false)
</script>

<template>
  <div :class="['header-burger', { active: burgerIsActive }]">
    <button class="burger" @click="burgerIsActive = !burgerIsActive">
      <span class="burger__line" />
    </button>

    <nav class="header-burger__menu">
      <a
        v-for="link in headerMenuLinks"
        :key="link.id"
        :href="link.href"
        :class="['header-burger__menu-link', { active: linkIsActive(link.href) }]"
      >
        {{ link.name }}
      </a>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
  .header-burger {
    position: relative;

    &.active {
      .header-burger__menu {
        top: 55px;
      }

      .burger__line {
        background: transparent;

        &::before {
          transform: rotate(45deg);
          top: 0;
        }
        &::after {
          transform: rotate(-225deg);
          top: 0;
        }
      }
    }

    .burger {
      display: flex;
      align-items: center;
      position: relative;
      z-index: 1;
      background: transparent;
      width: 45px;
      height: 45px;
      border: none;
      cursor: pointer;
      transition: 0.3s;

      &__line {
        width: 100%;
        height: 2px;
        background: $black-color;
        position: relative;
        display: flex;
        flex-direction: column;

        &::before,
        &::after {
          content: '';
          width: 100%;
          height: 2px;
          background: $black-color;
          position: absolute;
          transition: 0.3s;
          border-radius: 1px;
        }

        &::before {
          top: -10px;
        }
        &::after {
          top: 10px;
        }
      }
    }

    &__menu {
      position: absolute;
      right: 0;
      top: -1000px;
      box-shadow: 0 8px 16px rgb(120 120 120 / 15%);
      padding: 20px;
      border-radius: 8px;
      transition: 0.3s ease-out;

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
