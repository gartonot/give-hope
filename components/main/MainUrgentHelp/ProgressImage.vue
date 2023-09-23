<script lang="ts" setup>
  import { computed, ref } from '#imports'

  const progressCurrentValue = ref(100000)
  const progressMaxValue = ref(132573)

  const progressValue = computed(() => {
    return `${Math.floor((progressCurrentValue.value * 100) / progressMaxValue.value)}%`
  })
</script>

<template>
  <div class="progress-image">
    <img
      src="/images/main/donation-face.png"
      width="533"
      height="768"
      class="progress-image__face"
      alt="Лицо человека, которому требуется пожертвование"
    />
    <div class="progress-image__background">
      <div class="progress-value">{{ progressValue }}</div>
      <div class="donation">
        <span class="current">{{ progressCurrentValue.toLocaleString() }} &#8381;</span>
        <span class="max">{{ progressMaxValue.toLocaleString() }} &#8381;</span>
      </div>

      <p class="description">
        Наша команда предлагает помощь вашей бабушке в различных повседневных задачах. Мы понимаем,
        что каждая бабушка заслуживает внимания и заботы, и мы готовы предложить нашу экспертную
        помощь, чтобы облегчить ей повседневную жизнь.Наша команда предлагает помощь вашей бабушке в
        различных повседневных задачах. Мы понимаем, что каждая бабушка заслуживает внимания и
        заботы, и мы готовы предложить нашу экспертную помощь, чтобы облегчить ей повседневную
        жизнь.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .progress-image {
    position: relative;

    &__face {
      width: 100%;
      height: auto;
    }
    &__background {
      background-color: rgba(120, 168, 239, 0.64);
      border-radius: 0 0 18px 18px;
      padding: 40px;
      color: $white-color;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;

      &::before {
        content: '';
        position: absolute;
        top: -5px;
        left: 0;
        width: calc(77.5 * (v-bind(progressValue) / 100));
        background: $primary-color;
        height: 10px;
      }

      .progress-value {
        position: absolute;
        top: 0;
        left: calc(77.5 * (v-bind(progressValue) / 100));
        transform: translateY(-50%);
        font-weight: 700;
        color: $primary-color;
        background: $white-color;
        padding: 12px 12px 12px 15px;
        border-radius: 50px;
        font-size: 24px;
        border: 5px solid #65bcff;
      }

      .donation {
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        font-weight: 700;
        line-height: 1.11;
        margin-top: 16px;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        @media screen and (min-width: $breakpoint-md) {
          font-size: 24px;
          flex-direction: row;
          gap: 0;
        }
        @media screen and (min-width: $breakpoint-lg) {
          font-size: 30px;
        }
      }
      .description {
        font-size: 14px;
        line-height: 1.11;
        margin-top: 16px;
        display: none;

        @media screen and (min-width: $breakpoint-md) {
          display: block;
        }
      }
    }
  }
</style>
