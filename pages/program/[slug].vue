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
    'elderly-people': {
      hero: {
        title: '«Пожилым людям»',
        description:
          'Программа направлена на организацию досуговых мероприятий в домах-интернатах для престарелых и инвалидов. Она играет ключевую роль в поддержании физического, психологического и эмоционального благополучия пожилых людей. Человеку в любом возрасте необходимо общение и разнообразный досуг. Потеря интереса к жизни и одиночество– распространенные проблемы пожилых людей.',
        image: '/images/programs/program-1.png'
      },
      body: {
        title: 'Чем мы помогаем?',
        description:
          'Задача фонда – вовлечь подопечных в новую созидательную деятельность, предоставить возможности для развития творческого потенциала и создать легкую атмосферу в домах престарелых.',
        list: [
          'Поддержание физической и умственной активности',
          'Социализация и общение',
          'Поднятие настроения и борьба  с депрессией',
          'Поиск и развитие новых интересов'
        ],
        image: '/images/programs/helps/art.svg'
      },
      cases: [
        {
          id: 1,
          title: 'Ржевский дом-интернат',
          name: '',
          image: '/images/programs/rzhevskij-dom-internat/covermini.jpg',
          href: '/case/rzhevskij-dom-internat'
        },
        {
          id: 2,
          title:
            'Отделение сестринского ухода при Клементьевской участковой больнице (Клементьево)',
          name: '',
          image: '/images/programs/psy-klimentevo-2/covermini.jpg',
          href: '/case/psy-klimentevo-2'
        },
        {
          id: 3,
          title: 'ЛОГБУ "Волосовский КЦСОН "Берегиня"',
          name: '',
          image: '/images/programs/bereginya/covermini.jpg',
          href: '/case/bereginya'
        }
      ],
      hasSlider: false,
      hasCases: true,
      hasVolunteer: false
    },
    'cozy-old-age': {
      hero: {
        title: '«Уютная старость»',
        description:
          'Программа фонда направлена на создание достойных и безопасных условий для проживания пожилых людей и инвалидов, которые находятся в государственных домах-интернатах и отделениях сестринского ухода, которые содержатся за счет отчислений с пенсии  и региональных бюджетов, к сожалению, часто этого финансирования не хватает для поддержания необходимых для комфортного проживания условий.',
        image: '/images/programs/program-2.png'
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
      cases: [
        {
          id: 1,
          title:
            'Отделение сестринского ухода при Клементьевской участковой больнице (Клементьево)',
          name: '',
          image: '/images/case/psy-klimentevo/covermini.jpg',
          href: '/case/psy-klimentevo'
        }
      ],
      hasSlider: false,
      hasCases: true,
      hasVolunteer: false
    },
    'dari-repair': {
      hero: {
        title: '«Дари ремонт»',
        description:
          '«Дари Ремонт» – программа фонда направлена на создание безопасных и комфортных условий для проживания пожилых людей и инвалидов. Организация благотворительных ремонтов частного или муниципального жилья для тех, кто нуждается в помощи.',
        image: '/images/programs/program-3.png'
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
      cases: [
        {
          id: 1,
          title: 'Ремонт №1',
          name: 'Хомич Анатолй Семёнович',
          image: '/images/programs/repair-1/covermini.png',
          href: '/case/remont-1'
        },
        {
          id: 2,
          title: 'Ремонт №2',
          name: 'Вера Евгеньевна',
          image: '/images/programs/repair-2/covermini.png',
          href: '/case/remont-2'
        },
        {
          id: 3,
          title: 'Ремонт №3',
          name: 'Римма Сергеевна',
          image: '/images/programs/repair-3/covermini.png',
          href: '/case/remont-3'
        },
        {
          id: 4,
          title: 'Ремонт №4',
          name: 'Любовь Михайловна',
          image: '/images/programs/repair-4/covermini.png',
          href: '/case/remont-4'
        },
        {
          id: 5,
          title: 'Ремонт №5',
          name: 'семьи Рузаковых',
          image: '/images/programs/repair-5/covermini.png',
          href: '/case/remont-5'
        },
        {
          id: 6,
          title: 'Ремонт №6',
          name: 'Петр Анатольевич',
          image: '/images/programs/repair-6/covermini.png',
          href: '/case/remont-6'
        },
        {
          id: 7,
          title: 'Ремонт №7',
          name: 'Васильченко Надежды Петровны',
          image: '/images/programs/repair-7/covermini.png',
          href: '/case/remont-7'
        },
        {
          id: 8,
          title: 'Ремонт №8',
          name: 'Гоша',
          image: '/images/programs/repair-8/covermini.png',
          href: '/case/remont-8'
        }
      ],
      hasSlider: false,
      hasCases: true,
      hasVolunteer: false
    },
    'welcome-to-door': {
      hero: {
        title: '«Добро до двери»',
        description:
          'Идея данной программы пришла к нам во время пандемии коронавируса, когда одинокие пенсионеры оказались заперты дома.Многие из них не имели возможности заказать, купить или попросить кого-то купить продуктов.',
        image: '/images/programs/program-4.png'
      },
      body: {
        title: 'Чем мы помогаем?',
        description:
          'Программа направлена на облегчение жизни одиноких пожилых людей и инвалидов, через оказание продовольственной гуманитарной помощи, которую доставляют до двери наши волонтеры, предварительно, собрав наборы на складе.',
        list: [
          'Передача только качественных продуктов питания с долгим сроком годности',
          'Осуществление доставки ответственными волонтерами фонда, прошедшими предварительный инструктаж',
          'Обеспечение благополучателей  стабильной и надежной помощью'
        ],
        image: '/images/programs/helps/box.svg'
      },
      hasSlider: true,
      hasCases: false,
      hasVolunteer: true
    }
  }

  const currentProgram = programs[slug]
</script>

<template>
  <main class="program">
    <program-hero-section :settings="currentProgram.hero" />
    <program-body-section :settings="currentProgram.body" />
    <slider-section v-if="currentProgram.hasSlider" class="program__slider" />
    <program-cases-section
      v-if="currentProgram.hasCases && currentProgram.cases"
      :cases-list="currentProgram.cases"
      class="program__cases"
    />
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
