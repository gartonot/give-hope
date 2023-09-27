<script setup lang="ts">
  const donations = 215230
  const donationsTotal = 500000
  const donationsRemained = donationsTotal - donations
  const donationsProcess = `${(donations * 100) / donationsTotal}%`
</script>

<template>
  <div class="donations">
    <p class="donations__balance">{{ donations }}&nbsp;₽</p>
    <div class="donations__slider">
      <p class="donations__slider-text">Из {{ donationsTotal }}&nbsp;₽</p>
      <p class="donations__slider-text">
        <strong>{{ donationsRemained }}&nbsp;₽</strong>
      </p>
    </div>
    <button class="donations__button">Помочь</button>
  </div>
</template>

<style scoped lang="scss">
  .donations {
    width: 100%;
    border-radius: 8px;
    background: $white-color;
    box-shadow: 0 4px 9px 0 rgba($black-color, 0.25);
    padding: 40px 20px 20px;

    &__balance {
      font-size: 30px;
      font-style: normal;
      font-weight: 700;
      line-height: 111%;
    }
    &__slider {
      position: relative;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      gap: 30px;
      margin-top: 40px;
      padding-bottom: 30px;

      &:before {
        content: '';
        position: absolute;
        border-radius: 36px;
        background-color: #e9eff5;
        height: 10px;
        width: 100%;
        top: 30px;
      }

      &:after {
        content: '';
        position: absolute;
        border-radius: 36px;
        background-color: $blue-color;
        height: 10px;
        width: v-bind(donationsProcess);
        top: 30px;
      }
    }
    &__slider-text {
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 111%;
      white-space: nowrap;
    }
    &__button {
      border: 1px solid transparent;
      border-radius: 8px;
      background: $blue-color;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 111%;
      padding: 20px;
      margin-top: 20px;
      color: $white-color;
      width: 100%;
    }
  }
</style>
