import { stopSubmit } from "redux-form"
import { usersAPI, authMeAPI } from "../api/api"


const GET_USER_DATA = "auth/SET-USER-DATA"
const UNFOLLOW = "auth/UNFOLLOW"
const GET_CAPTCHA = "auth/GET_CAPTCHA"



let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
   captchaUrl: null,


}

const authReducer = (state = initialState, action) => {

   switch (action.type) {
      case GET_USER_DATA:
      case GET_CAPTCHA:
         return {
            ...state, ...action.payload,

         }

      default:
         return state
   }
}

export const getAuthUserData = (userId, email, login, isAuth) => ({
   type: GET_USER_DATA,
   payload: { userId, email, login, isAuth }
})

export const setCaptchaUrl = (captchaUrl) => ({
   type: GET_CAPTCHA,
   payload: { captchaUrl }
})



export const authMeThunkCreator = () => async (dispatch) => {
   let data = await authMeAPI.authMe()
   if (data.resultCode === 0) {
      let { id, login, email } = data.data
      dispatch(getAuthUserData(id, email, login, true))
   }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
   let data = await authMeAPI.login(email, password, rememberMe, captcha)
   if (data.resultCode === 0) {
      dispatch(authMeThunkCreator())
   }
   else {
      if (data.resultCode === 10) {
         dispatch(getCaptchaUrl())
      }
      let message = data.messages.length > 0 ? data.messages[0] : "Some error"
      let action = stopSubmit("login", { _error: message })
      dispatch(action)
   }
}

export const logout = () => async (dispatch) => {
   let data = await authMeAPI.logout()
   if (data.resultCode === 0) {
      dispatch(getAuthUserData(null, null, null, false))

   }
}

export const getCaptchaUrl = () => async (dispatch) => {
   let data = await authMeAPI.getCaptchaUrl()
   dispatch(setCaptchaUrl(data.url))
}







export default authReducer;