import { stopSubmit } from "redux-form"
import { usersAPI, authMeAPI } from "../api/api"


const GET_USER_DATA = "SET-USER-DATA"
const UNFOLLOW = "UNFOLLOW"



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



export const authMeThunkCreator = () => (dispatch) => {
   return usersAPI.authMe().then(data => {
      if (data.resultCode === 0) {
         let { login, id, email } = data.data
         dispatch(getAuthUserData(id, email, login, true))
      }
   })
}

export const login = (email, password, rememberMe) => (dispatch) => {
   return authMeAPI.login(email, password, rememberMe).then(data => {
      if (data.resultCode === 0) {
         dispatch(authMeThunkCreator())
      }
      else {
         let message = data.messages.length > 0 ? data.messages[0] : "Some error"
         let action = stopSubmit("login", { _error: message })
         dispatch(action)
      }
   })
}

export const logout = () => (dispatch) => {
   return authMeAPI.logout().then(data => {
      if (data.resultCode === 0) {
         dispatch(getAuthUserData(null, null, null, false))

      }
   })
}







export default authReducer;