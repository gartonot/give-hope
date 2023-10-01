<script lang="ts" setup>
  import { computed } from '#imports'
  import ReportsCard from '~/components/reports/ReportsCard.vue'
  import ReportsAccor from '~/components/reports/ReportsAccor.vue'

  const monthly = [
    {
      id: 1,
      label: 'Отчёты за январь 2023',
      url: '/reports/2023/january.pdf',
      isShown: true
    },
    {
      id: 2,
      label: 'Отчёты за февраль 2023',
      isShown: false
    },
    {
      id: 3,
      label: 'Отчёты за март 2023',
      isShown: false
    },
    {
      id: 4,
      label: 'Отчёты за апрель 2023',
      isShown: false
    },
    {
      id: 5,
      label: 'Отчёты за май 2023',
      isShown: false
    },
    {
      id: 6,
      label: 'Отчёты за июнь 2023',
      isShown: false
    },
    {
      id: 7,
      label: 'Отчёты за июль 2023',
      isShown: false
    },
    {
      id: 8,
      label: 'Отчёты за август 2023',
      isShown: false
    },
    {
      id: 9,
      label: 'Отчёты за сентябрь 2023',
      isShown: false
    },
    {
      id: 10,
      label: 'Отчёты за октябрь 2023',
      isShown: false
    },
    {
      id: 11,
      label: 'Отчёты за ноябрь 2023',
      isShown: false
    },
    {
      id: 12,
      label: 'Отчёты за декабрь 2023',
      isShown: false
    }
  ]
  const yearsly = [
    {
      id: 1,
      label: 'Отчёт за 2019',
      url: '/reports/years-2019.pdf'
    },
    {
      id: 2,
      label: 'Отчёт за 2020',
      url: '/reports/years-2020.pdf'
    },
    {
      id: 3,
      label: 'Отчёт за 2021',
      url: '/reports/years-2021.pdf'
    },
    {
      id: 4,
      label: 'Отчёт за 2022',
      url: '/reports/years-2022.pdf'
    }
  ]

  const monthlyReports = computed(() => monthly.filter(({ url }) => url))
  const yearslyReports = computed(() => yearsly.filter(({ url }) => url))
</script>

<template>
  <main class="reports">
    <div class="container">
      <h1 class="reports__title">Отчёты Фонда</h1>

      <div class="tabs">
        <input id="tab-btn-1" type="radio" name="tab-btn" />
        <label for="tab-btn-1">Годовые отчёты</label>
        <input id="tab-btn-2" type="radio" name="tab-btn" checked />
        <label for="tab-btn-2">Ежемесячные отчёты</label>

        <div id="content-1">
          <div class="reports__list">
            <reports-card
              v-for="report in yearslyReports"
              :key="report.id"
              class="reports__list-card"
              :label="report.label"
              :url="report.url"
            />
          </div>
        </div>
        <div id="content-2">
          <div class="reports__list">
            <reports-card
              v-for="report in monthlyReports"
              :key="report.id"
              class="reports__list-card"
              :label="report.label"
              :url="report.url"
            />
          </div>
        </div>
        <reports-accor class="reports-list" />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
  .reports {
    margin-bottom: 230px;

    &__title {
      text-align: center;
      font-size: 50px;
      font-weight: 700;
      line-height: 1.11;
      margin-top: 90px;
    }
    &__list {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;

      &-card {
        --count-card: 1;
        width: calc(100% / var(--count-card) - 12px);

        @media screen and (min-width: $breakpoint-sm) {
          --count-card: 2;
        }
        @media screen and (min-width: $breakpoint-md) {
          --count-card: 3;
        }
        @media screen and (min-width: $breakpoint-lg) {
          --count-card: 4;
        }
      }
    }
    &-list {
      margin-top: 90px;
    }
  }
  .tabs {
    margin-top: 72px;
    font-size: 0;

    & > input[type='radio'] {
      display: none;

      color: $black-color;
      font-size: 20px;
      font-weight: 600;
      line-height: 1.11;

      &:checked + label {
        color: $primary-color;
      }
    }
    & > div {
      display: none;
      border-top: 1px solid $black-color;
      padding: 28px 16px 28px 16px;
      font-size: 16px;
    }
    & > label {
      display: inline-block;
      user-select: none;
      padding: 12px 16px;
      font-size: 16px;
      line-height: 1.5;
      cursor: pointer;

      :not(:first-of-type) {
        border-left: none;
      }
    }
  }
  #tab-btn-1:checked ~ #content-1,
  #tab-btn-2:checked ~ #content-2 {
    display: block;
  }
</style>
