import { profileAPI, usersAPI } from "../api/api"

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_STATUS = "SET-STATUS"
const RESET_MESSAGE = "RESET-MESSAGE"

let initialState = {
   profileData: [
      { name: "Volodya" },
      { birthday: "01.04.2004" },
      { city: "Wrocław" },
      { education: "Wyższa Szkoła Handlowa" },
   ],

   postsData: [
      { message: "Hello World!", id: 1, likesCount: 0 },
      { message: "My name is Volodya!", id: 2, likesCount: 1 },
      { message: "I'm 18 years old :)", id: 3, likesCount: 3 },

   ],
   status: "",
   profile: null,
}



const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         return {

            ...state,
            postsData: [...state.postsData, {
               id: 8,
               message: action.text,
               likesCount: 4,
            }],
         }
      case SET_USER_PROFILE: {
         return { ...state, profile: action.profile }
      }
      case SET_STATUS: {
         return { ...state, status: action.status }
      }

      default:
         return state
   }
}

export const addPostActionCreator = (text) => ({
   type: ADD_POST,
   text
})



export const setUserProfile = (profile) => ({
   type: SET_USER_PROFILE,
   profile
})

export const setProfileThunkCreator = (userId) => (dispatch) => {
   return usersAPI.getProfile(userId).then(data => {
      dispatch(setUserProfile(data))
   })
}

export const setStatus = (status) => ({
   type: SET_STATUS,
   status
})

export const getStatusThunkCreator = (userId) => (dispatch) => {
   return profileAPI.getStatus(userId).then(data => {
      dispatch(setStatus(data))
   })
}

export const updateStatusThunkCreator = (status) => (dispatch) => {
   return profileAPI.updateStatus(status).then(data => {
      if (data.resultCode === 0) {
         dispatch(setStatus(status))
      }

   })
}





export default profileReducer;