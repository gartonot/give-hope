<script setup lang="ts">
  import { ref } from '#imports'
  import mainRepository from '~/services/repositories/main-repository'
  import DonationAccept from '~/components/DonationAccept.vue'

  const params = {
    fund: 'fund 1'
  }
  const paymentsResponse = await mainRepository.paymentFund(params)

  const donationsRemained = paymentsResponse.allSum - paymentsResponse.currentSum
  const donationsProcess = `${paymentsResponse.percent}%`

  const sum = ref()
  const formIsShown = ref(false)
  const sendForm = async () => {
    if (sum.value) {
      modalOpen()
    }
  }
  const openForm = () => (formIsShown.value = true)

  const modalIsShown = ref(false)

  const modalOpen = () => (modalIsShown.value = true)
  const modalClose = () => (modalIsShown.value = false)
</script>

<template>
  <div class="donations">
    <p class="donations__balance">{{ paymentsResponse.currentSum.toLocaleString() }} ₽</p>
    <div class="donations__slider">
      <p class="donations__slider-text">Из {{ paymentsResponse.allSum.toLocaleString() }}&nbsp;₽</p>
      <p class="donations__slider-text">
        <strong>{{ donationsRemained.toLocaleString() }}&nbsp;₽</strong>
      </p>
    </div>
    <div class="form">
      <div v-if="formIsShown" class="form-fields">
        <input v-model="sum" type="number" inputmode="numeric" />
        <button @click="sendForm()">
          <svg
            width="36"
            height="30"
            viewBox="0 0 36 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.4142 16.4142C36.1953 15.6332 36.1953 14.3668 35.4142 13.5858L22.6863 0.857864C21.9052 0.0768158 20.6389 0.0768158 19.8579 0.857864C19.0768 1.63891 19.0768 2.90524 19.8579 3.68629L31.1716 15L19.8579 26.3137C19.0768 27.0948 19.0768 28.3611 19.8579 29.1421C20.6389 29.9232 21.9052 29.9232 22.6863 29.1421L35.4142 16.4142ZM0 17L34 17V13L0 13L0 17Z"
              fill="#fff"
            />
          </svg>
        </button>
      </div>
      <button v-else id="payButton" class="donations__button" @click="openForm()">Помочь</button>
    </div>
    <div :class="['modal', { 'modal-shown': modalIsShown }]" @click="modalClose()">
      <div class="modal__container" @click.stop>
        <div class="close-button" @click="modalClose()">
          <svg
            width="20"
            height="20"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.212891"
              y="2.95435"
              width="4.17804"
              height="34.618"
              transform="rotate(-45 0.212891 2.95435)"
              fill="#78A8EF"
            />
            <rect
              x="2.95508"
              y="27.644"
              width="4.17804"
              height="34.618"
              transform="rotate(-135 2.95508 27.644)"
              fill="#78A8EF"
            />
          </svg>
        </div>
        <donation-accept :sum="sum" form-is-fund />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .modal {
    position: fixed;
    inset: 0;
    background-color: rgba(0 0 0 / 5%);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: 0.2s;
    z-index: 10;

    &.modal-shown {
      opacity: 1;
      visibility: visible;

      .modal__container {
        transform: unset;
      }
    }
    &__container {
      background-color: $white-color;
      padding: 48px 28px 24px 28px;
      border-radius: 20px;
      transform: translateY(100px);
      transition: 0.2s;
      margin: 20px;
      position: relative;
      width: 100%;
      max-width: 312px;

      .close-button {
        position: absolute;
        right: 24px;
        top: 24px;
        cursor: pointer;
      }

      @media screen and (min-width: $breakpoint-sm) {
        margin: unset;
      }
    }
  }
  .form {
    margin-top: 20px;
    min-height: 65px;
    max-height: 65px;
    height: 65px;

    input,
    button {
      min-height: 65px;
      max-height: 65px;
      height: 65px;
    }
    .form-fields {
      display: flex;
      gap: 12px;

      input {
        width: 100%;
        padding: 4px 12px;
        border-radius: 8px;
        border: 1px solid #9a9a9a;
        outline: none;
      }

      button {
        background-color: $blue-color;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        border: none;
        cursor: pointer;
      }
    }
  }
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
      color: $white-color;
      width: 100%;
      cursor: pointer;
    }
  }
</style>
