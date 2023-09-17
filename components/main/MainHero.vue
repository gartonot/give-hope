<script lang="ts" setup>
  import { useNuxtApp, computed } from '#imports'
  const { $viewport } = useNuxtApp()

  const imageHandLeftByBreakpoint = computed(() => {
    return {
      desktop: {
        src: '/images/main/desktop/left-hand.svg',
        width: 1258,
        height: 420,
        alt: 'Левая рука'
      },
      tablet: {
        src: '/images/main/tablet/left-hand.svg',
        width: 842,
        height: 282,
        alt: 'Левая рука'
      },
      mobile: {
        src: '/images/main/mobile/left-hand.svg',
        width: 405,
        height: 136,
        alt: 'Левая рука'
      }
    }[$viewport.breakpoint.value]
  })
  const imageHandRightByBreakpoint = computed(() => {
    return {
      desktop: {
        src: '/images/main/desktop/right-hand.svg',
        width: 714,
        height: 307,
        alt: 'Правая рука'
      },
      tablet: {
        src: '/images/main/tablet/right-hand.svg',
        width: 472,
        height: 204,
        alt: 'Правая рука'
      },
      mobile: {
        src: '/images/main/mobile/right-hand.svg',
        width: 228,
        height: 100,
        alt: 'Правая рука'
      }
    }[$viewport.breakpoint.value]
  })
  const imageHeroTextByBreakpoint = computed(() => {
    return {
      desktop: {
        src: '/images/main/desktop/hero-text.svg',
        width: 707,
        height: 369,
        alt: 'Текст Дарить надежду'
      },
      tablet: {
        src: '/images/main/tablet/hero-text.svg',
        width: 453,
        height: 236,
        alt: 'Текст Дарить надежду'
      },
      mobile: {
        src: '/images/main/mobile/hero-text.svg',
        width: 291,
        height: 152,
        alt: 'Текст Дарить надежду'
      }
    }[$viewport.breakpoint.value]
  })
  const imageHeroSubtextByBreakpoint = computed(() => {
    return {
      desktop: {
        src: '/images/main/desktop/hero-subtext.svg',
        width: 325,
        height: 52,
        alt: 'Текст никогда не поздно'
      },
      tablet: {
        src: '/images/main/tablet/hero-subtext.svg',
        width: 325,
        height: 52,
        alt: 'Текст никогда не поздно'
      },
      mobile: {
        src: '/images/main/mobile/hero-subtext.svg',
        width: 209,
        height: 34,
        alt: 'Текст никогда не поздно'
      }
    }[$viewport.breakpoint.value]
  })
</script>

<template>
  <div class="hero">
    <img class="hero__text" v-bind="imageHeroTextByBreakpoint" />
    <img class="hero__subtext" v-bind="imageHeroSubtextByBreakpoint" />
    <div class="hero__hands">
      <img class="hero__hands-left" v-bind="imageHandLeftByBreakpoint" />
      <img class="hero__hands-right" v-bind="imageHandRightByBreakpoint" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .hero {
    position: relative;
    $animation-duration-hands: 0.8s;
    $animation-duration-text: 0.6s;
    padding-bottom: 125px;

    @media screen and (min-width: $breakpoint-md) {
      padding-bottom: 260px;
    }

    &__text {
      opacity: 0;
      margin-top: 70px;
      margin-inline: auto;
      animation-name: animationFromBottom;
      animation-duration: $animation-duration-text;
      animation-timing-function: ease-out;
      animation-delay: 0.6s;
      animation-fill-mode: forwards;
    }
    &__subtext {
      opacity: 0;
      margin-top: 50px;
      margin-inline: auto;
      animation-name: animationFromBottom;
      animation-duration: $animation-duration-text;
      animation-timing-function: ease-out;
      animation-delay: 0.7s;
      animation-fill-mode: forwards;
    }
    @keyframes animationFromBottom {
      0% {
        opacity: 0;
        transform: translateY(100px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    &__hands {
      &-left,
      &-right {
        position: absolute;
        opacity: 0;
        top: 250px;
        max-width: 100%;

        @media screen and (min-width: $breakpoint-md) {
          top: 350px;
        }
        @media screen and (min-width: $breakpoint-lg) {
          top: 400px;
        }
      }

      &-left {
        left: -220px;
        animation-name: animationFromLeft;
        animation-duration: $animation-duration-hands;
        animation-timing-function: ease-out;
        animation-fill-mode: forwards;

        @keyframes animationFromLeft {
          0% {
            opacity: 0;
            left: -1220px;
          }
          100% {
            opacity: 1;
            left: -220px;
          }
        }

        @media screen and (min-width: $breakpoint-md) {
          left: -480px;

          @keyframes animationFromLeft {
            0% {
              opacity: 0;
              left: -1480px;
            }
            100% {
              opacity: 1;
              left: -480px;
            }
          }
        }
        @media screen and (min-width: $breakpoint-lg) {
          left: -670px;

          @keyframes animationFromLeft {
            0% {
              opacity: 0;
              left: -1670px;
            }
            100% {
              opacity: 1;
              left: -670px;
            }
          }
        }
      }
      &-right {
        right: -86px;
        animation-name: animationFromRight;
        animation-duration: $animation-duration-hands;
        animation-timing-function: ease-out;
        animation-fill-mode: forwards;

        @keyframes animationFromRight {
          0% {
            opacity: 0;
            right: -1086px;
          }
          100% {
            opacity: 1;
            right: -86px;
          }
        }

        @media screen and (min-width: $breakpoint-md) {
          right: -126px;

          @keyframes animationFromRight {
            0% {
              opacity: 0;
              right: -1126px;
            }
            100% {
              opacity: 1;
              right: -126px;
            }
          }
        }
        @media screen and (min-width: $breakpoint-lg) {
          right: -270px;

          @keyframes animationFromRight {
            0% {
              opacity: 0;
              right: -1270px;
            }
            100% {
              opacity: 1;
              right: -270px;
            }
          }
        }
      }
    }
  }
</style>
