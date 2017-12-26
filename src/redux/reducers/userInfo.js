import * as type from '../mutations'

const initState = {
  isLoading: false,
  userInfo: {},
  errorMsg: ''
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case type.GET_USER_INFO_REQUEST:
      return {
        ...state,
        isLoading: true,
        userInfo: {},
        errorMsg: ''
      }
    case type.GET_USER_INFO_SUCCESS:
      console.log(action)
      return {
        ...state,
        isLoading: false,
        userInfo: action.result.data,
        errorMsg: ''
      }
    case type.GET_USER_INFO_FAIL:
      return {
        ...state,
        isLoading: false,
        userInfo: {},
        errorMsg: '请求错误'
      }
    default:
      return state
  }
}