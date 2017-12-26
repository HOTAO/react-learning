import axios from 'axios'
// axios.defaults.baseURL = API_ROOT
axios.defaults.headers.Accept = 'application/json'

axios.interceptors.request.use((config) => {
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error.response)
})

const api = {
  getUserInfo(data) {
    return axios.get('/api/user')
  }
}

export default api