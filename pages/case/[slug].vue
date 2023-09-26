<script setup lang="ts">
  import CaseHeroSection from '~/components/case/CaseHeroSection.vue'
  import SubscribeNewsletter from '~/components/SubscribeNewsletter.vue'
  import { useRoute } from '#imports'
  import CaseBodySection from '~/components/case/CaseBodySection.vue'
  import CaseGallerySection from '~/components/case/CaseGallerySection.vue'

  const route = useRoute()
  const slug = route.params.slug as string
  const cases = {
    case1: {
      heroSection: {
        title: 'Кейс',
        image: {
          src: '/images/case/case1.png',
          alt: 'case1'
        },
        description: 'Татьня Олеговна (63 года) и Тимур Папиушвилли (72 года)'
      },
      bodySection: {
        title: 'Чем мы помогли?',
        text:
          'Программа "Купить еды" работает по принципу сбора пожертвований от добровольцев, которые затем используются для покупки еды для нуждающихся людей. Средства могут быть использованы для покупки продуктов питания или семян для выращивания собственной пищи в рамках устойчивого сельского хозяйства.</br></br>' +
          'Эта благотворительная программа работает в тесном партнерстве с местными организациями, такими как приюты для бездомных, церкви, некоммерческие организации и общественные фонды. Они предоставляют информацию о семьях и отдельных людях, которым необходима помощь, и координируют доставку продуктов до их дверей. Благодаря программе "Купить еды" у голодающих людей есть возможность получить достойное питание, которое позволяет им сохранять здоровье и продуктивность. Это также позволяет семьям сэкономить средства на покупке еды, которые могут быть использованы для других потребностей, таких как образование, медицинская помощь или жилище.</br></br>' +
          'Важной особенностью этой программы является прозрачность использования пожертвований. Добровольцы могут быть уверены, что их пожертвования будут использованы эффективно и надлежащим образом, чтобы помочь тем, кто в действительности нуждается в поддержке.'
      },
      gallerySection: {
        title: 'Галерея',
        images: [
          '/images/case/case-image1.png',
          '/images/case/case-image2.png',
          '/images/case/case-image3.png',
          '/images/case/case-image1.png',
          '/images/case/case-image2.png',
          '/images/case/case-image3.png'
        ]
      }
    }
  }

  const currentCase = cases[slug]
</script>

<template>
  <main class="case">
    <case-hero-section :settings="currentCase.heroSection" />
    <case-body-section :settings="currentCase.bodySection" class="body-section" />
    <case-gallery-section :settings="currentCase.gallerySection" class="gallery-section" />
    <subscribe-newsletter class="subscribe-section" />
  </main>
</template>

<style scoped lang="scss">
  .case {
    padding-block: 50px 150px;

    @media screen and (min-width: $breakpoint-lg) {
      padding-block: 100px 200px;
    }

    .body-section {
      margin-top: 100px;

      @media screen and (min-width: $breakpoint-lg) {
        margin-top: 160px;
      }
    }

    .gallery-section {
      margin-top: 130px;
    }

    .subscribe-section {
      margin-top: 100px;

      @media screen and (min-width: $breakpoint-lg) {
        margin-top: 200px;
      }
    }
  }
</style>
