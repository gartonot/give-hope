export default {
  payment: async (params: any) => {
    const response = await fetch('https://darinadezhdu-api.ru/api/v1/fund-info/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(resp => resp.json())
    return response
  }
}
