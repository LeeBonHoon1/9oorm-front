import axios from 'axios'

const baseUrl = 'https://k3283e2c439eda.user-app.krampoline.com'

export const getImages = async (prompt: string) => {
  const res = await axios.get(`${baseUrl}/create?${prompt}`)
  return res.data
}

export const test = async (param: any) => {
  const { keyword } = param || {}
  if (keyword.length > 5) {
    const res = await axios.post(`${baseUrl}/create`, param)
    return res.data
  } else {
    const newParam = { ...param, keyword: 'test' }
    const res = await axios.post(`${baseUrl}/create`, newParam)
    return res.data
  }
}
const APIs = {
  getImages,
  test
}

export default APIs
