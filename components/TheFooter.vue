<script setup lang="ts">
  const contacts = [
    {
      text: 'darinadezhduu@gmail.com',
      url: 'mailto:darinadejduu@gmail.com'
    },
    {
      text: '+7 (985) 622-21-01',
      url: 'tel:+79856222101'
    },
    {
      text: 'Николоямская улица 26с',
      url: undefined
    }
  ]
  const information = [
    {
      text: 'Политика в отношени  обработки персональных данных',
      url: '/personaldatapolicy'
    },
    {
      text: 'Пользовательское соглашение',
      url: '/useragreement'
    },
    {
      text: 'Финансовая отчётность',
      url: '/reports'
    }
  ]
  const documents = [
    {
      text: 'Благотворительная программа',
      url: '/charityprogram'
    },
    {
      text: 'Уставные документы',
      url: '/docs'
    },
    {
      text: 'Оферта',
      url: '/offer'
    }
  ]
</script>

<template>
  <footer id="contacts" class="footer">
    <div class="container footer-background">
      <div class="footer-wrapper">
        <div class="footer-contacts">
          <span>КОНТАКТЫ</span>
          <a
            v-for="(contact, index) in contacts"
            :key="index"
            class="footer_link"
            :href="contact.url"
          >
            {{ contact.text }}
          </a>
        </div>
        <div class="footer-information">
          <span>ИНФОРМАЦИЯ</span>
          <a v-for="(info, index) in information" :key="index" class="footer_link" :href="info.url">
            {{ info.text }}
          </a>
        </div>
        <div class="footer-documents">
          <span>ДОКУМЕНТЫ</span>
          <a
            v-for="(document, index) in documents"
            :key="index"
            class="footer_link"
            :href="document.url"
          >
            {{ document.text }}
          </a>
        </div>
        <div class="footer-social">
          <div class="footer-social__image">
            <img src="/images/footer/vk.svg" alt="vk logo" width="24" height="24" />
          </div>
          <div class="footer-social__subscribe">
            <div>ПОДПИСАТЬСЯ</div>
            <input class="footer-social__input" type="text" placeholder="ваш имейл" />
          </div>
          <button class="footer-social__subscribe-send">
            <img
              src="/images/footer/send-svgrepo-com.svg"
              alt="send"
              class="footer-social__subscribe-send-image"
            />
          </button>
        </div>
      </div>
      <div class="footer-project-info">© 2023 Благотворительный фонд "Дари Надежду"</div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  .footer {
    color: $white-color;
    font-weight: 400;
    line-height: 111%;
    font-size: 16px;
    overflow: hidden;

    @media screen and (min-width: $breakpoint-lg) {
      font-size: 20px;
    }

    &-background {
      position: relative;
      height: 100%;
      padding-block: 50px;

      @media screen and (min-width: $breakpoint-lg) {
        padding-block: 70px;
      }

      &:before {
        content: '';
        position: absolute;
        background-color: $blue-color;
        width: 110%;
        height: 100%;
        left: -5%;
        top: 0;
        border-radius: 50px 50px 0 0;

        @media screen and (min-width: $breakpoint-sm) {
          border-radius: 90px 90px 0 0;
        }

        @media screen and (min-width: $breakpoint-lg) {
          border-radius: 125px 125px 0 0;
        }
      }
    }

    &-wrapper {
      position: relative;
      display: flex;
      justify-content: space-between;
      gap: 30px;
      flex-wrap: wrap;
      flex-direction: column;

      @media screen and (min-width: $breakpoint-sm) {
        flex-direction: row;
      }
    }

    &-information,
    &-contacts,
    &-documents {
      width: 100%;

      @media screen and (min-width: $breakpoint-sm) {
        width: 40%;
      }

      @media screen and (min-width: $breakpoint-lg) {
        width: 30%;
      }
    }

    &_link {
      margin-top: 12px;
      display: block;
      color: $white-color;

      @media screen and (min-width: $breakpoint-lg) {
        margin-top: 20px;
      }
    }
    &-social {
      position: relative;
      display: flex;
      gap: 12px;
      width: 100%;

      @media screen and (min-width: $breakpoint-sm) {
        width: 45%;
      }

      &__image {
        padding-top: 40px;

        @media screen and (min-width: $breakpoint-lg) {
          padding-top: 46px;
        }
      }

      &__subscribe {
        display: flex;
        flex-direction: column;
        text-align: center;
      }

      &__subscribe-send {
        background-color: $white-color;
        max-height: 30px;
        border: 1px solid transparent;
        border-radius: 5px;
        margin-top: 38px;
        cursor: pointer;

        @media screen and (min-width: $breakpoint-lg) {
          margin-top: 44px;
        }
      }

      &__subscribe-send-image {
        width: 20px;
        height: 20px;
        object-fit: contain;
      }

      &__input {
        border: 1px solid transparent;
        border-radius: 10px;
        background-color: $white-color;
        color: rgba($grey-color, 0.46);
        padding: 10px;
        margin-top: 14px;
        font-size: 10px;
        width: 200px;
      }
    }
    &-project-info {
      position: relative;
      margin-top: 80px;
    }
  }
</style>
