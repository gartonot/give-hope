<script lang="ts" setup>
  import { useRoute } from '#imports'
  import ProgramHeroSection from '~/components/program/ProgramHeroSection.vue'
  import ProgramBodySection from '~/components/program/ProgramBodySection.vue'
  import SliderSection from '~/components/SliderSection.vue'
  import ProgramCasesSection from '~/components/program/ProgramCasesSection.vue'
  import SubscribeNewsletter from '~/components/SubscribeNewsletter.vue'
  import ProgramVolunteer from '~/components/program/ProgramVolunteer.vue'

  const route = useRoute()
  const slug = route.params.slug as string

  const programs = {
    'welcome-to-door': {
      hero: {
        title: '«Добро до двери»',
        description:
          'Идея данной программы пришла к нам во время пандемии коронавируса, когда одинокие пенсионеры оказались заперты дома.Многие из них не имели возможности заказать, купить или попросить кого-то купить продуктов.',
        image: '/images/programs/program-1.png'
      },
      body: {
        title: 'Чем мы помогаем?',
        description:
          'Программа направлена на облегчение жизни одиноких пожилых людей и инвалидов, через оказание продовольственной гуманитарной помощи, которую доставляют до двери наши волонтеры, предварительно, собрав наборы на складе.',
        list: [
          'Передача только качественных продуктов питания с долгим сроком годности',
          'Осуществление доставки ответственными волонтерами фонда, прошедшими предварительный инструктаж',
          'Обеспечение благополучия, стабильности и надежной помощи'
        ],
        image: '/images/programs/helps/box.svg'
      },
      hasSlider: true,
      hasCases: false,
      hasVolunteer: true
    },
    'dari-repair': {
      hero: {
        title: '«Дари ремонт»',
        description:
          '«Дари Ремонт» – программа фонда , направленная на создание безопасных и комфортных условий для проживания пожилых людей и инвалидов. Организация благотворительных ремонтов частного или муниципального жилья для тех, кто нуждается в помощи.',
        image: '/images/programs/program-2.png'
      },
      body: {
        title: 'Чем мы помогаем?',
        description:
          'Наша цель - создать атмосферу, которая способствует спокойствию и благополучию пожилых людей. Мы создаём уютные пространства, в которых люди могут чувствовать себя более комфортно и улучшаем их бытовые условия, которые  значительно влияют на качество жизни пожилых людей, способствуя их как психологическому комфорту,      так и физическому.',
        list: [
          'Косметический ремонт и обновление дома',
          'Адаптация жилья под потребности',
          'Безопасность и достойные условия',
          'Поддержка и внимание'
        ],
        image: '/images/programs/helps/furniture.svg'
      },
      hasSlider: false,
      hasCases: true,
      hasVolunteer: false
    },
    'elderly-people': {
      hero: {
        title: '«Пожилым людям»',
        description:
          'Наша программа, направлена на организацию досуговых мероприятий в домах-интернатах для престарелых и инвалидов. Она играет ключевую роль в поддержании физического, психологического и эмоционального благополучия пожилых людей. Человеку в любом возрасте необходимо общение и разнообразный досуг. Потеря интереса к жизни и одиночество– распространенные проблемы пожилых людей.',
        image: '/images/programs/program-3.png'
      },
      body: {
        title: 'Чем мы помогаем?',
        description:
          'Задача фонда – вовлечь подопечных в новую созидательную деятельность, предоставить возможности для развития творческого потенциала и создать легкую атмосферу                в домах престарелых.',
        list: [
          'Поддержание физической и умственной активности',
          'Социализация и общение',
          'Поднятие настроения и борьба  с депрессией',
          'Поиск и развитие новых интересов'
        ],
        image: '/images/programs/helps/art.svg'
      },
      hasSlider: true,
      hasCases: false,
      hasVolunteer: false
    },
    'cozy-old-age': {
      hero: {
        title: '«Уютная старость»',
        description:
          'Программа фонда, направленная на создание достойных и безопасных условий для проживания пожилых людей и инвалидов, которые находятся в государственных домах-интернатах и отделениях сестринского ухода, которые содержатся за счет отчислений с пенсии  и региональных бюджетов, к сожалению, часто этого финансирования не хватает для поддержания необходимых для комфортного проживания условий.',
        image: '/images/programs/program-4.png'
      },
      body: {
        title: 'Чем мы помогаем?',
        description:
          'Целью программы является организация домашнего уюта и соблюдение современных стандартов оснащения государственных учреждений.',
        list: [
          'Организация косметических ремонтных работ и благоустройство территорий в государственных учреждениях',
          'Закупка необходимой мебели, функциональных кроватей, инвалидных кресел, техники, медицинского оборудования и т.п.',
          'Реализация программы «Доступная среда»'
        ],
        image: '/images/programs/helps/furniture.svg'
      },
      hasSlider: true,
      hasCases: false,
      hasVolunteer: false
    }
  }

  const currentProgram = programs[slug]
</script>

<template>
  <main class="program">
    <program-hero-section :settings="currentProgram.hero" />
    <program-body-section :settings="currentProgram.body" />
    <slider-section v-if="currentProgram.hasSlider" class="program__slider" />
    <program-cases-section v-if="currentProgram.hasCases" class="program__cases" />
    <program-volunteer v-if="currentProgram.hasVolunteer" class="program__volunteer" />
    <subscribe-newsletter class="program__subscribe" />
  </main>
</template>

<style lang="scss" scoped>
  .program {
    padding-bottom: 190px;

    &__slider {
      margin-top: 60px;

      @media screen and (min-width: $breakpoint-md) {
        margin-top: 120px;
      }
      @media screen and (min-width: $breakpoint-lg) {
        margin-top: 142px;
      }
    }
    &__cases {
      margin-top: 100px;

      @media screen and (min-width: $breakpoint-md) {
        margin-top: 150px;
      }
      @media screen and (min-width: $breakpoint-lg) {
        margin-top: 230px;
      }
    }
    &__volunteer {
      margin-top: 100px;

      @media screen and (min-width: $breakpoint-md) {
        margin-top: 142px;
      }
      @media screen and (min-width: $breakpoint-lg) {
        margin-top: 266px;
      }
    }
    &__subscribe {
      margin-top: 100px;

      @media screen and (min-width: $breakpoint-md) {
        margin-top: 142px;
      }
      @media screen and (min-width: $breakpoint-lg) {
        margin-top: 332px;
      }
    }
  }
</style>
