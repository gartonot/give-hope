<script setup lang="ts">
  import DonationCard from '~/components/main/DonationCard.vue'
  import { ref } from '#imports'

  const modalIsShown = ref(false)
  const openModal = () => (modalIsShown.value = true)
  const modalClose = () => (modalIsShown.value = false)
</script>

<template>
  <section class="main-help">
    <div class="container">
      <h2 class="main-help__title">Cрочная помощь</h2>
      <div class="main-help__help-wrapper">
        <div class="collecting-money">
          <div class="collecting-money__image-container">
            <img src="/images/main/help-image.png" alt="" width="279" height="279" />
          </div>
          <div class="collecting-money__card-wrapper">
            <h2 class="collecting-money__card-title">Пучежский дом-интернат</h2>
            <p class="collecting-money__card-text">
              Друзья, мы открываем новый большой и достаточно сложный сбор,но мы ведь знаем, что нет
              ничего невозможного для нас с вами!
            </p>
            <div class="collecting-money__card-links">
              <a class="collecting-money__card-link2" href="#" @click.prevent="openModal()"
                >Смотреть видео</a
              >
            </div>
          </div>
        </div>
        <donation-card />
      </div>
      <div class="main-help__text">
        <p>
          До нового года мы хотим отремонтировать десять палат в отделении милосердия и одну общую
          ванную комнату в Пучежском доме-интернате для престарелых и инвалидов. Учреждение
          считается лучшим в Ивановской области.Мы сами в этом убедились,когда приехали в гости.
        </p>
        <p>
          В доме-интернате уже идёт ремонт столовой,так же были отремонтированы несколько этажей,но
          на все палаты и отделения средств,конечно,не хватает.
        </p>
        <p>
          Также хотим рассказать вам о самом крупном сотрудничестве фонда по программе #ДариРемонт.
          Нашим партнером на данный ремонт стала сеть строительных гипермаркетов OBI
          (https://obi.ru).
        </p>
        <p>
          Компания предоставляет нам необходимые для ремонта стройматериалы,включенные в смету. Это
          огромнейшая помощь.Теперь осталось найти средства на оплату строительных работ и здесь нам
          не обойтись без вашей помощи!
        </p>
        <ul>
          <li>ОБЩАЯ СУММА СБОРА : 4 586 929 ₽</li>
          <li>СОБРАНО НА ДАННЫЙ МОМЕНТ : 1.500.000 ₽</li>
          <li>ОСТАТОК СБОРА : 3.086.929 ₽</li>
        </ul>
      </div>
    </div>
    <div :class="['modal', { 'modal-shown': modalIsShown }]" @click="modalClose()">
      <div class="modal__container" @click.stop>
        <video src="/videos/urgent-help-video.mp4" controls></video>
      </div>
    </div>
  </section>
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

    &.modal-shown {
      opacity: 1;
      visibility: visible;

      .modal__container {
        transform: unset;
      }
    }
    &__container {
      background-color: $white-color;
      padding: 24px 28px;
      border-radius: 20px;
      transform: translateY(100px);
      transition: 0.2s;
      margin: 20px;
      max-width: 80%;

      @media screen and (min-width: $breakpoint-sm) {
        margin: unset;
      }
    }
  }
  video {
    width: 100%;
    margin: auto;
    display: block;

    @media screen and (min-width: $breakpoint-md) {
      width: 80%;
    }
  }
  .main-help {
    padding-top: 35px;
    overflow: hidden;

    &__title {
      font-size: 34px;
      font-style: normal;
      font-weight: 700;
      line-height: 111%;
      position: relative;
      display: inline-block;

      @media screen and (min-width: $breakpoint-lg) {
        font-size: 50px;
      }

      &:before {
        content: '';
        position: absolute;
        background-image: url('/images/main/particle/exclamation-marks.svg');
        height: 300px;
        width: 254px;
        top: -130px;
        right: -150px;
        object-fit: contain;

        @media screen and (min-width: $breakpoint-sm) {
          right: -200px;
        }
      }
    }

    &__help-wrapper {
      margin-top: 80px;
      display: flex;
      gap: 100px;
      flex-direction: column;

      @media screen and (min-width: $breakpoint-lg) {
        flex-direction: row;
      }
    }

    .collecting-money {
      display: flex;
      gap: 40px;
      min-width: 60%;
      flex-direction: column;
      position: relative;

      &::after {
        content: '';
        background-image: url('/images/main/obi.png');
        position: absolute;
        width: 150px;
        height: 60px;
        right: 0;
        bottom: 0;

        @media screen and (min-width: $breakpoint-lg) {
          right: -70px;
          bottom: 0;
        }
      }

      @media screen and (min-width: $breakpoint-md) {
        flex-direction: row;
      }

      &__image-container {
        position: relative;
        min-width: 279px;
        max-width: 279px;
        height: 279px;
        margin-inline: auto;

        &:before {
          content: 'Идут сборы';
          position: absolute;
          background-color: $white-color;
          transform: rotate(-30deg);
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: 111%;
          border-radius: 14px;
          border: 1px solid $black-color;
          color: $black-color;
          padding: 10px 50px;
          left: -40px;
          top: 20px;
        }
      }

      &__card-title {
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 111%;
      }

      &__card-text {
        margin-top: 20px;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
      }

      &__card-links {
        margin-top: 60px;
        display: flex;
        justify-content: space-between;
      }

      &__card-link1 {
        color: $grey-color;
        font-size: 16px;
        font-style: normal;
        font-weight: 300;
        line-height: 111%;
      }
      &__card-link2 {
        color: $blue-color;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 111%;
      }
    }

    &__text {
      margin-top: 80px;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 120%;

      p {
        margin-bottom: 20px;
      }

      ul {
        list-style: none;
        padding-left: 0;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
    }
  }
</style>
