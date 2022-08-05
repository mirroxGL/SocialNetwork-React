import { stopSubmit } from "redux-form"
import { usersAPI, authMeAPI } from "../api/api"


const GET_USER_DATA = "auth/SET-USER-DATA"
const UNFOLLOW = "auth/UNFOLLOW"



let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,


}

const authReducer = (state = initialState, action) => {

   switch (action.type) {
      case GET_USER_DATA:
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



export const authMeThunkCreator = () => async (dispatch) => {
   let data = await usersAPI.authMe()
   if (data.resultCode === 0) {
      let { login, id, email } = data.data
      dispatch(getAuthUserData(id, email, login, true))
   }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
   let data = await authMeAPI.login(email, password, rememberMe)
   if (data.resultCode === 0) {
      dispatch(authMeThunkCreator())
   }
   else {
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







export default authReducer;