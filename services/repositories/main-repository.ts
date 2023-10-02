export default {
  paymentFund: async (params: any) => {
    const response = await fetch('https://darinadezhdu-api.ru/api/v1/fund-info/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(resp => resp.json())
    return response
  },
  paymentForFund: async (params: any) => {
    const response = await fetch('https://darinadezhdu-api.ru/api/v1/fund/yandex-payment/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(resp => resp.json())
    return response
  },
  payment: async (params: any) => {
    const response = await fetch('https://darinadezhdu-api.ru/api/v1/program/yandex-payment/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(resp => resp.json())
    return response
  }
}
