<script lang="ts" setup>
  import { toRefs } from '#imports'

  interface IImage {
    src: string
    width: number
    height: number
  }
  interface IProgram {
    id: number
    title: string
    description: string
    programUrl: string
    image: IImage
    isCollection: boolean
  }
  interface IProps {
    program: IProgram
  }

  const props = defineProps<IProps>()
  const { program } = toRefs(props)
</script>

<template>
  <div class="card">
    <h3 class="card__title">
      {{ program.title }}
    </h3>
    <p class="card__description">
      {{ program.description }}
    </p>
    <div class="card__buttons">
      <a class="button" href="#donat">Хочу помочь</a>
      <a :href="program.programUrl" class="button button_outlined">Подробнее</a>
    </div>
    <img
      :src="program.image.src"
      :width="program.image.width"
      :height="program.image.height"
      class="card__image"
      alt="Пожилой человек"
    />
  </div>
</template>

<style lang="scss" scoped>
  .button {
    padding: 10px 40px;
    border-radius: 20px;
    text-align: center;
    background-color: $white-color;
    color: $primary-color;
    border: 2px solid $white-color;
    cursor: pointer;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    width: calc(100% / 1 - 10px);

    @media screen and (min-width: $breakpoint-md) {
      width: calc(100% / 2 - 10px);
    }

    &:hover {
      opacity: 0.7;
    }
    &_outlined {
      background-color: transparent;
      color: $white-color;
    }
  }
  .card {
    background-color: $blue-color;
    border-radius: 30px;
    padding: 40px;
    color: $white-color;

    &__title {
      font-weight: 700;
      line-height: 1.11;
      font-size: 24px;

      @media screen and (min-width: $breakpoint-md) {
        font-size: 28px;
      }
      @media screen and (min-width: $breakpoint-lg) {
        font-size: 35px;
      }
    }
    &__description {
      line-height: 1.11;
      font-size: 16px;
      margin-top: 16px;
    }
    &__buttons {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 30px;
      gap: 10px;
    }
    &__image {
      margin-top: 30px;
      object-fit: cover;
      border-radius: 30px;
    }
  }
</style>
