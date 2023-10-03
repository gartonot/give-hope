<script setup lang="ts">
  import { VkIcon } from '~/components/icons'
  import { useRuntimeConfig } from '#imports'

  const runtimeConfig = useRuntimeConfig()
  const { vkUrl } = runtimeConfig.public

  const benefits = [
    {
      title: 'Наша миссия',
      text:
        'Сделать помощь понятным и повседневным процессом, где каждый сможет найти применение своим возможностям через тепло человеческого общения \n' +
        'и поддержку людей в трудных ситуациях.'
    },
    {
      title: 'Наше видение',
      text:
        'В своей работе мы стремимся сделать благотворительность открытой и честной. А также призываем воспитывать в подрастающем поколении чувства уважения по отношению к пожилым людям.\n' +
        'Мы верим, что общество, в котором нет нуждающихся пенсионеров, имеет большой шанс на светлое будущее.'
    }
  ]
</script>

<template>
  <section class="about-hero">
    <div class="container background-image">
      <div class="about-hero__wrapper">
        <div class="about-hero__text">
          <h1 class="about-hero__title">
            От студенческого Волонтерского Проекта к Благотворительному Фонду.
          </h1>
          <br />
          <p>
            Наша деятельность началась в 2013 году, когда основательница Фонда Дарина Краснова
            собрала вокруг себя команду единомышленников. Шесть лет студенты-волонтеры посещали
            детские дома, интернаты, хосписы, приюты, сестринские уходы и дома престарелых.
          </p>
          <br />
          <p>
            По прошествии этого времени сформировалось четкое понимание того, какая социальная
            группа людей, на наш взгляд, менее всего защищена и больше всего нуждается в помощи.
            <br />
            В 2019 году был зарегистрирован Благотворительный Фонд помощи и поддержки людей старшего
            возраста «Дари Надежду».
          </p>
          <div class="about-hero__social">
            <vk-icon />
            <a :href="vkUrl" class="about-hero__social-link">dary_nadezhdu</a>
          </div>
        </div>
        <div class="about-hero__image-wrapper">
          <div class="about-hero__image-background">
            <img class="about-hero__image" src="/images/about/hero/image2.png" alt="foto" />
          </div>
        </div>
      </div>
      <div class="about-hero__target">
        <div v-for="(benefit, index) in benefits" :key="index" class="about-hero__target-wrapper">
          <h2 class="about-hero__target-title">{{ benefit.title }}</h2>
          <p class="about-hero__target-content">{{ benefit.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .background-image {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      width: 609px;
      height: 657px;
      right: 0;
      bottom: 120px;
      background-image: url('/images/about/hero/curved-line.svg');

      @media screen and (min-width: $breakpoint-lg) {
        right: -70px;
      }
    }
  }
  .about-hero {
    position: relative;
    overflow: hidden;
    &__wrapper {
      display: flex;
      flex-direction: column;

      @media screen and (min-width: $breakpoint-lg) {
        flex-direction: row;
        gap: 100px;
      }
    }
    &__text {
      position: relative;
      padding-block: 50px;

      &:before {
        content: '';
        position: absolute;
        height: 60px;
        width: 60px;
        top: -10px;
        left: -20px;
        background-image: url('/images/about/hero/star.svg');
        object-fit: contain;

        @media screen and (min-width: $breakpoint-lg) {
          left: -70px;
        }
      }

      &:after {
        content: '';
        position: absolute;
        height: 118px;
        width: 257px;
        bottom: 0;
        right: 0;
        background-image: url('/images/about/hero/arrow.svg');
        object-fit: contain;
        transform: scaleY(-1) rotate(-30deg);
        visibility: hidden;

        @media screen and (min-width: $breakpoint-sm) {
          visibility: visible;
        }

        @media screen and (min-width: $breakpoint-lg) {
          right: -60px;
          transform: unset;
        }
      }
    }
    &__title {
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 111%;

      @media screen and (min-width: $breakpoint-sm) {
        font-size: 34px;
      }
    }

    &__social {
      color: $blue-color;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 111%;
      display: flex;
      gap: 20px;
      align-items: center;
      margin-top: 42px;
    }

    &__social-link {
      color: $blue-color;
    }

    &__image-wrapper {
      position: relative;
      padding-block: 20px;
      margin-inline: auto;

      @media screen and (min-width: $breakpoint-sm) {
        padding-block: 90px;
      }
    }
    &__image-background {
      position: relative;

      &:before {
        content: '';
        position: absolute;
        background-image: url('/images/about/hero/image1.png');
        background-position: top;
        background-repeat: no-repeat;
        margin-inline: auto;
        height: 100%;
        width: 50%;
        left: 0;
        right: 0;
        top: -30px;
        border: 1px solid $blue-color;
        border-radius: 26px;
        transform: rotate(21.329deg);
        object-fit: cover;

        @media screen and (min-width: $breakpoint-sm) {
          width: 315px;
          height: 436px;
        }
      }
    }
    &__image {
      position: relative;
      border-radius: 26px;
      border: 1px solid $blue-color;
      min-width: 312px;
      object-fit: contain;
      display: block;

      @media screen and (min-width: $breakpoint-sm) {
        min-width: 498px;
        height: auto;
      }
    }
    &__target {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      gap: 50px;
      margin-top: 40px;

      @media screen and (min-width: $breakpoint-md) {
        flex-direction: row;
        gap: 100px;
        margin-top: 80px;
      }

      &-wrapper {
        width: 100%;

        @media screen and (min-width: $breakpoint-md) {
          width: 40%;
        }
      }

      &-title {
        font-size: 34px;
        font-style: normal;
        font-weight: 400;
        line-height: 111%;
        display: inline-block;
        position: relative;

        @media screen and (min-width: $breakpoint-lg) {
          font-size: 50px;
        }

        &:before {
          content: '';
          position: absolute;
          height: 18px;
          width: 110%;
          z-index: -1;
          left: -5%;
          bottom: 5px;
          background-color: rgba($primary-color, 0.37);
        }
      }

      &-content {
        margin-top: 10px;
      }
    }
  }
</style>
