<script setup lang="ts">
  import AboutHeroSection from '~/components/about/AboutHeroSection.vue'
  import AboutBenefitsSection from '~/components/about/AboutBenefitsSection.vue'
  import AboutAmbassadorsSection from '~/components/about/AboutAmbassadorsSection.vue'
  import AboutTeamSection from '~/components/about/AboutTeamSection.vue'
  import AboutVolunteersSection from '~/components/about/AboutVolunteersSection.vue'
</script>

<template>
  <main class="about">
    <about-hero-section />
    <about-benefits-section class="about-benefits" />
    <about-team-section class="about-benefits" />
    <about-ambassadors-section class="about-ambassadors" />
    <about-volunteers-section class="about-volunteers" />
  </main>
</template>

<style scoped lang="scss">
  .about {
    padding-block: 40px;

    &-benefits {
      margin-top: 100px;
    }

    &-ambassadors {
      margin-top: 100px;
    }

    &-volunteers {
      margin-top: 280px;
    }
  }
</style>
