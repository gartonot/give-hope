<script lang="ts" setup>
  const reports = [
    {
      id: 1,
      label: '2022 год',
      list: [
        {
          id: 1,
          name: 'Отчёт за январь 2022',
          url: '/reports/2022/january-2022.pdf'
        },
        {
          id: 2,
          name: 'Отчёт за февраль 2022',
          url: '/reports/2022/february-2022.pdf'
        },
        {
          id: 3,
          name: 'Отчёт за март 2022',
          url: '/reports/2022/march-2022.pdf'
        },
        {
          id: 4,
          name: 'Отчёт за апрель 2022',
          url: '/reports/2022/april-2022.pdf'
        },
        {
          id: 5,
          name: 'Отчёт за май 2022',
          url: '/reports/2022/may-2022.pdf'
        },
        {
          id: 6,
          name: 'Отчёт за июнь 2022',
          url: '/reports/2022/june-2022.pdf'
        },
        {
          id: 7,
          name: 'Отчёт за июль 2022',
          url: '/reports/2022/jule-2022.pdf'
        },
        {
          id: 8,
          name: 'Отчёт за август 2022',
          url: '/reports/2022/august-2022.pdf'
        },
        {
          id: 9,
          name: 'Отчёт за сентябрь 2022',
          url: '/reports/2022/septamber-2022.pdf'
        },
        {
          id: 10,
          name: 'Отчёт за октябрь 2022',
          url: '/reports/2022/october-2022.pdf'
        },
        {
          id: 11,
          name: 'Отчёт за ноябрь 2022',
          url: '/reports/2022/november-2022.pdf'
        },
        {
          id: 12,
          name: 'Отчёт за декабрь 2022',
          url: '/reports/2022/december-2022.pdf'
        }
      ]
    },
    {
      id: 2,
      label: '2021 год',
      list: [
        {
          id: 1,
          name: 'Отчёт за январь 2021',
          url: '/reports/2021/january-2021.pdf'
        },
        {
          id: 2,
          name: 'Отчёт за февраль 2021',
          url: '/reports/2021/february-2021.pdf'
        },
        {
          id: 3,
          name: 'Отчёт за март 2021',
          url: '/reports/2021/march-2021.pdf'
        },
        {
          id: 4,
          name: 'Отчёт за апрель 2021',
          url: '/reports/2021/april-2021.pdf'
        },
        {
          id: 5,
          name: 'Отчёт за май 2021',
          url: '/reports/2021/may-2021.pdf'
        },
        {
          id: 6,
          name: 'Отчёт за июнь 2021',
          url: '/reports/2021/june-2021.pdf'
        },
        {
          id: 7,
          name: 'Отчёт за июль 2021',
          url: '/reports/2021/jule-2021.pdf'
        },
        {
          id: 8,
          name: 'Отчёт за август 2021',
          url: '/reports/2021/august-2021.pdf'
        },
        {
          id: 9,
          name: 'Отчёт за сентябрь 2021',
          url: '/reports/2021/septamber-2021.pdf'
        },
        {
          id: 10,
          name: 'Отчёт за октябрь 2021',
          url: '/reports/2021/october-2021.pdf'
        },
        {
          id: 11,
          name: 'Отчёт за ноябрь 2021',
          url: '/reports/2021/november-2021.pdf'
        },
        {
          id: 12,
          name: 'Отчёт за декабрь 2021',
          url: '/reports/2021/december-2021.pdf'
        }
      ]
    },
    {
      id: 3,
      label: '2020 год',
      list: [
        {
          id: 1,
          name: 'Отчёт за январь 2020',
          url: '/reports/2020/january-2020.pdf'
        },
        {
          id: 2,
          name: 'Отчёт за февраль 2020',
          url: '/reports/2020/february-2020.pdf'
        },
        {
          id: 3,
          name: 'Отчёт за март 2020',
          url: '/reports/2020/march-2020.pdf'
        },
        {
          id: 4,
          name: 'Отчёт за апрель 2020',
          url: '/reports/2020/april-2020.pdf'
        },
        {
          id: 5,
          name: 'Отчёт за май 2020',
          url: '/reports/2020/may-2020.pdf'
        },
        {
          id: 6,
          name: 'Отчёт за июнь 2020',
          url: '/reports/2020/june-2020.pdf'
        },
        {
          id: 7,
          name: 'Отчёт за июль 2020',
          url: '/reports/2020/jule-2020.pdf'
        },
        {
          id: 8,
          name: 'Отчёт за август 2020',
          url: '/reports/2020/august-2020.pdf'
        },
        {
          id: 9,
          name: 'Отчёт за сентябрь 2020',
          url: '/reports/2020/septamber-2020.pdf'
        },
        {
          id: 10,
          name: 'Отчёт за октябрь 2020',
          url: '/reports/2020/october-2020.pdf'
        },
        {
          id: 11,
          name: 'Отчёт за ноябрь 2020',
          url: '/reports/2020/november-2020.pdf'
        },
        {
          id: 12,
          name: 'Отчёт за декабрь 2020',
          url: '/reports/2020/december-2020.pdf'
        }
      ]
    },
    {
      id: 4,
      label: '2019 год',
      list: [
        {
          id: 4,
          name: 'Отчёт за апрель 2019',
          url: '/reports/2019/april-2019.pdf'
        },
        {
          id: 5,
          name: 'Отчёт за май 2019',
          url: '/reports/2019/may-2019.pdf'
        },
        {
          id: 6,
          name: 'Отчёт за июнь 2019',
          url: '/reports/2019/june-2019.pdf'
        },
        {
          id: 7,
          name: 'Отчёт за июль 2019',
          url: '/reports/2019/jule-2019.pdf'
        },
        {
          id: 8,
          name: 'Отчёт за август 2019',
          url: '/reports/2019/august-2019.pdf'
        },
        {
          id: 9,
          name: 'Отчёт за сентябрь 2019',
          url: '/reports/2019/septamber-2019.pdf'
        },
        {
          id: 10,
          name: 'Отчёт за октябрь 2019',
          url: '/reports/2019/october-2019.pdf'
        },
        {
          id: 11,
          name: 'Отчёт за ноябрь 2019',
          url: '/reports/2019/november-2019.pdf'
        },
        {
          id: 12,
          name: 'Отчёт за декабрь 2019',
          url: '/reports/2019/december-2019.pdf'
        }
      ]
    }
  ]
</script>

<template>
  <article class="acor-container">
    <template v-for="report in reports" :key="report.id">
      <input :id="`accor${report.id}`" type="radio" name="acor" />
      <label :for="`accor${report.id}`">{{ report.label }}</label>
      <div class="acor-body">
        <ul class="menu">
          <li v-for="link in report.list" :key="link.id">
            <a :href="link.url" class="menu__link" download>
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>
    </template>
  </article>
</template>

<style lang="scss" scoped>
  .menu {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding-left: 0;
    margin: 0;
    gap: 10px;

    &__link {
      font-size: 20px;
      font-weight: 500;
      line-height: 1.11;

      &:hover {
        color: $primary-color;
      }
    }
  }
  .acor-container {
    margin: 20px 0;

    .acor-body {
      line-height: 18px;
      font-size: 16px;
      padding-top: 0;
      height: 0;
      overflow: hidden;
      border-bottom: 1px solid $black-color;
      transition: 0.5s;
    }

    label {
      display: block;
      padding-block: 20px;
      color: $black-color;
      font-size: 20px;
      font-weight: 500;
      line-height: 1.11;
      cursor: pointer;

      transition: 0.3s;

      &:hover {
        opacity: 0.8;
      }
      &::before {
        content: '\002B';
        font-size: 28px;
        transition: 0.3s;
        float: right;
      }
    }

    input {
      display: none;
    }

    input:checked + label {
      color: $primary-color;

      &::before {
        content: '\2212';
        transform: rotate(360deg);
      }
      & + .acor-body {
        height: auto;
        padding-block: 24px;
      }
    }
  }
</style>
