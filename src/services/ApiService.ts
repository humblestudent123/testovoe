import axios from 'axios'

const API_HOST = import.meta.env.VITE_API_HOST || 'http://109.73.206.144:6969'
const API_KEY = import.meta.env.VITE_API_KEY || 'E6kUTYrYwZq2tN4QEtyzsbEBk3ie'

const instance = axios.create({
  baseURL: API_HOST + '/api',
  timeout: 20000,
})

export async function fetchData(endpoint: string, params: Record<string, any> = {}) {
  try {
    const response = await instance.get(`/${endpoint}`, {
      params: { ...params, key: API_KEY },
    })
    return response.data
  } catch (err) {
    console.error(`Ошибка при запросе к ${endpoint}:`, err)
    throw err
  }
}
