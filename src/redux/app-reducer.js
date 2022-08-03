import { stopSubmit } from "redux-form"
import { usersAPI, authMeAPI } from "../api/api"
import { getAuthUserData, authMeThunkCreator } from './auth-reducer'


const INITIALIZED_SECCESS = "INITIALIZED-SECCESS"




let initialState = {
   initialized: false,



}

const appReducer = (state = initialState, action) => {

   switch (action.type) {
      case INITIALIZED_SECCESS:
         return {
            ...state,
            initialized: true

         }

      default:
         return state
   }
}

export const initializedSuccess = () => ({
   type: INITIALIZED_SECCESS,
})



export const initializeApp = () => (dispatch) => {
   let userDataPromise = dispatch(getAuthUserData())
   let authMePromise = dispatch(authMeThunkCreator())
   Promise.all([userDataPromise, authMePromise]).then(() => {
      dispatch(initializedSuccess())
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







export default appReducer;