<script setup lang="ts">
  import DonationCard from '~/components/main/DonationCard.vue'
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
            <h2 class="collecting-money__card-title">Дом пристарелых “Ромашка”</h2>
            <p class="collecting-money__card-text">
              Объявлен сбор средств для дома престарелых “Ромашка”. Бабушкам и дедушкам срочно нужен
              новый телевизор и робот пылесос
            </p>
            <div class="collecting-money__card-links">
              <a class="collecting-money__card-link1" href="">Читать подробнее</a>
              <a class="collecting-money__card-link2" href="">Смотреть видео</a>
            </div>
          </div>
        </div>
        <donation-card />
      </div>
      <p class="main-help__text">
        Программа "Купить еды" работает по принципу сбора пожертвований от добровольцев, которые
        затем используются для покупки еды для нуждающихся людей. Средства могут быть использованы
        для покупки продуктов питания или семян для выращивания собственной пищи в рамках
        устойчивогосельского хозяйства. Эта благотворительная программа работает в тесном
        партнерстве с местными организациями, такими как приюты для бездомных, церкви,
        некоммерческие организации и общественные фонды. Они предоставляют информацию о семьях и
        отдельных людях, которым необходима помощь, и координируют доставку продуктов до их дверей.
        Благодаря программе "Купить еды" у голодающих людей есть возможность получить достойное
        питание, которое позволяет им сохранять здоровье и продуктивность. Это также позволяет
        семьям сэкономить средства на покупке еды, которые могут быть использованы для других
        потребностей, таких как образование, медицинская помощь или жилище. Важной особенностью этой
        программы является прозрачность использования пожертвований. Добровольцы могут быть уверены,
        что их пожертвования будут использованы эффективно и надлежащим образом, чтобы помочь тем,
        кто в действительности нуждается в поддержке.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
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
    }
  }
</style>
