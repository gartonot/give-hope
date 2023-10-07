<script lang="ts" setup>
  import { ref, watch, toRefs } from '#imports'
  import AppButton from '~/components/ui/AppButton.vue'
  import DonationAccept from '~/components/DonationAccept.vue'

  interface IProps {
    frequencyIsShown?: boolean
  }

  interface IFormData {
    sum: number
    frequency: string
  }

  const buttonsFrequency = ref([
    {
      id: 1,
      label: 'Разово',
      isSelect: true
    },
    {
      id: 2,
      label: 'Ежемесячно',
      isSelect: false
    }
  ])
  const buttonsSum = ref([
    {
      id: 1,
      sum: 100,
      label: '100 ₽',
      isSelect: true
    },
    {
      id: 2,
      sum: 200,
      label: '200 ₽',
      isSelect: false
    },
    {
      id: 3,
      sum: 300,
      label: '300 ₽',
      isSelect: false
    },
    {
      id: 4,
      sum: 500,
      label: '500 ₽',
      isSelect: false
    },
    {
      id: 5,
      sum: 600,
      label: '600 ₽',
      isSelect: false
    },
    {
      id: 6,
      sum: 700,
      label: '700 ₽',
      isSelect: false
    }
  ])
  const customSum = ref()

  const props = withDefaults(defineProps<IProps>(), {
    frequencyIsShown: false
  })
  const { frequencyIsShown } = toRefs(props)

  watch(customSum, () => {
    buttonsSum.value.forEach(button => (button.isSelect = false))
  })

  const selectFrequency = (buttonId: number) => {
    buttonsFrequency.value.forEach(button => {
      button.isSelect = false
      if (button.id === buttonId) {
        button.isSelect = true
      }
    })
  }
  const selectSum = (buttonId: number) => {
    buttonsSum.value.forEach(button => {
      button.isSelect = false
      if (button.id === buttonId) {
        button.isSelect = true
      }
    })
  }

  const formData = ref<IFormData>({
    sum: 100,
    frequency: 'Разово'
  })

  const sendOnly = async () => {
    modalOpen()
  }

  const randomUser = () => {
    const user = '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, c =>
      (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
    )
    return `${user}@mail.ru`
  }

  const sendForm = () => {
    const selectedFrequency = buttonsFrequency.value.find(button => button.isSelect)
    formData.value.frequency = selectedFrequency?.label ?? 'Разово'

    if (customSum.value) {
      formData.value.sum = Number(customSum.value)
    } else {
      const selectedSum = buttonsSum.value.find(button => button.isSelect)
      formData.value.sum = selectedSum?.sum ?? 0
    }

    if (formData.value.frequency === 'Разово') {
      sendOnly()
    } else {
      payWidget(randomUser(), formData.value.sum)
    }
  }

  const payWidget = function (userMail, sum) {
    var widget = new cp.CloudPayments()
    var receipt = {
      Items: [
        {
          label: 'Пожертвование', //наименование товара
          price: sum, //цена
          quantity: 1.0, //количество
          amount: sum, //сумма
          vat: 20, //ставка НДС
          method: 0, // тег-1214 признак способа расчета - признак способа расчета
          object: 0 // тег-1212 признак предмета расчета - признак предмета товара, работы, услуги, платежа, выплаты, иного предмета расчета
        }
      ],
      taxationSystem: 0,
      email: '',
      phone: '',
      isBso: false,
      amounts: {
        electronic: 300.0,
        advancePayment: 0.0,
        credit: 0.0,
        provision: 0.0
      }
    }

    let data = {}
    data.CloudPayments = {
      CustomerReceipt: receipt, //чек для первого платежа
      recurrent: {
        interval: 'Month',
        period: 1,
        customerReceipt: receipt
      }
    }

    widget.charge(
      {
        publicId: 'pk_d8899cde6e845ec0c912c5ecebc75',
        description: 'Пожертвование на ежемесячной основе',
        amount: sum,
        currency: 'RUB',
        invoiceId: '1',
        accountId: userMail, //идентификатор плательщика (обязательно для создания подписки)
        data: data
      },
      function () {},
      function () {}
    )
  }

  const modalIsShown = ref(false)

  const modalOpen = () => (modalIsShown.value = true)
  const modalClose = () => (modalIsShown.value = false)
</script>

<template>
  <div class="donation-form">
    <div v-if="frequencyIsShown" class="donation-form__select form-select">
      <button
        v-for="button in buttonsFrequency"
        :key="button.id"
        :class="[
          'button-select form-select__select',
          { 'button-select_selected': button.isSelect }
        ]"
        @click="selectFrequency(button.id)"
      >
        {{ button.label }}
      </button>
    </div>
    <div class="donation-form__sum sum">
      <button
        v-for="button in buttonsSum"
        :key="button.id"
        :class="['button-select sum__button', { 'button-select_selected': button.isSelect }]"
        @click="selectSum(button.id)"
      >
        {{ button.label }}
      </button>
      <input
        v-model="customSum"
        type="number"
        inputmode="numeric"
        class="sum__input"
        placeholder="Другая сумма"
      />
    </div>
    <app-button label="Пожертвовать" class="donation-form__button" @click="sendForm()" />
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
        <donation-accept :sum="formData.sum" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

  .button-select {
    background-color: transparent;
    padding: 20px;
    border: none;
    border-radius: 18px;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.11;
    cursor: pointer;

    @media screen and (min-width: $breakpoint-md) {
      font-size: 20px;
    }
    @media screen and (min-width: $breakpoint-lg) {
      font-size: 25.171px;
    }

    &_selected {
      color: $white-color;
      background-color: $blue-color;
    }
  }
  .form-select {
    &__select {
      width: 50%;
    }
  }
  .donation-form {
    &__select {
      border-radius: 18.879px;
      border: 0.787px solid $blue-color;
    }
    .sum {
      margin-top: 16px;
      border-radius: 18.879px;
      border: 0.787px solid $blue-color;
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;

      &__input {
        width: 100%;
        border: 0;
        padding: 24px 30px;
        outline: none;
        font-size: 20px;
      }
      &__button {
        border: 1px solid $blue-color;
        border-radius: 0;
        flex-grow: 1;
        width: calc(100% / 3);
      }
    }
    &__button {
      margin-top: 16px;
    }
  }
</style>
