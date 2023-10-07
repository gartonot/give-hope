<script lang="ts" setup="">
  import { toRefs, ref, computed } from '#imports'
  import AppButton from '~/components/ui/AppButton.vue'
  import mainRepository from '~/services/repositories/main-repository'

  interface IProps {
    sum: number
    formIsFund?: boolean
  }

  const props = withDefaults(defineProps<IProps>(), {
    formIsFund: false
  })

  const { sum, formIsFund } = toRefs(props)

  const fields = ref({
    name: {
      value: '',
      isInvalid: false
    },
    email: {
      value: '',
      isInvalid: false
    }
  })

  const fieldPhone = ref({
    value: '',
    isInvalid: false
  })

  const formIsValid = computed(() => {
    const filedInvalidCount = Object.values(fields.value).reduce((acc, filed) => {
      if (filed.isInvalid) {
        acc += 1
      }
      return acc
    }, 0)

    return filedInvalidCount === 0
  })

  const sendWithoutFundForm = async () => {
    const params = {
      donat_amount: sum.value,
      email: fields.value.email.value,
      name: fields.value.name.value,
      phone: String(fieldPhone.value.value)
    }

    const { redirect_url } = await mainRepository.payment(params)
    window.location.href = redirect_url
  }

  const sendFundForm = async () => {
    const params = {
      donat_amount: sum.value,
      fund: 'fund 1',
      email: fields.value.email.value,
      name: fields.value.name.value,
      phone: String(fieldPhone.value.value)
    }

    const { redirect_url } = await mainRepository.paymentForFund(params)
    window.location.href = redirect_url
  }

  const sendForm = async () => {
    Object.values(fields.value).forEach(field => {
      field.isInvalid = field.value.length <= 0 || field.value.length > 45
    })

    if (formIsValid.value) {
      if (formIsFund.value) {
        await sendFundForm()
      } else {
        await sendWithoutFundForm()
      }
    }
  }
</script>

<template>
  <section class="donation-accept">
    <h2 class="donation-accept__title">Сделать пожертвование</h2>
    <div class="form">
      <input
        v-model="fields.name.value"
        type="text"
        :class="['form__field', { 'invalid-field': fields.name.isInvalid }]"
        placeholder="Ваше имя"
      />
      <input
        v-model="fields.email.value"
        type="email"
        :class="['form__field', { 'invalid-field': fields.email.isInvalid }]"
        placeholder="E-mail"
      />
      <input
        v-model="fieldPhone.value"
        type="number"
        class="form__field"
        placeholder="Номер телефона"
      />
      <p class="text">
        Нажимая кнопку "Пожертвовать" Вы соглашаетесь с
        <a href="/offer" target="_blank" class="text__link">офертой</a>
      </p>
      <app-button label="Пожертвовать" class="form__button" @click="sendForm()" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .donation-accept {
    width: 100%;
  }
  .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 50px;

    &__field {
      padding: 12px 16px;
      border: 1px solid $primary-color;
      border-radius: 8px;
      outline: none;
    }
    .text {
      font-size: 14px;
      color: rgba(0 0 0 / 50%);

      &__link {
        text-decoration: underline;
        color: $primary-color;
      }
    }
    &__button {
      font-size: 16px;
      border-radius: 8px;
      padding-inline: 0;
      transition: 0.3s;

      &:hover {
        background-color: $primary-color;
      }
    }
  }
  .invalid-field {
    border-color: red;
  }
</style>
