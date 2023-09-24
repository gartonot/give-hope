<script lang="ts" setup>
  import { toRefs, useRoute } from '#imports'
  import { IHeaderMenuLink } from '~/services/interfaces'
  interface IProps {
    headerMenuLinks: IHeaderMenuLink[]
  }

  const props = defineProps<IProps>()
  const { headerMenuLinks } = toRefs(props)

  const route = useRoute()

  const linkIsActive = (link: string) => route.path === link
</script>

<template>
  <nav class="header-menu">
    <a
      v-for="link in headerMenuLinks"
      :key="link.id"
      :href="link.href"
      :class="['header-menu__link', { active: linkIsActive(link.href) }]"
    >
      {{ link.name }}
    </a>
  </nav>
</template>

<style lang="scss" scoped>
  .header-menu {
    &__link {
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
</style>
