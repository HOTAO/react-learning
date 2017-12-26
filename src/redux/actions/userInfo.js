import * as type from '../mutations'
import api from '../api/api'

const actions = {
  getUserInfo(state) {
    return api.getUserInfo()
      .then(response => {
        return response
      })
      .catch(error => {
        console.log(error)
        return Promise.reject(error)
      })
  }
}

export default actions
