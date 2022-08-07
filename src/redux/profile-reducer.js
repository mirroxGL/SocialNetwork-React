import { profileAPI, usersAPI } from "../api/api"

const ADD_POST = "profile/ADD-POST"
const SET_USER_PROFILE = "profile/SET-USER-PROFILE"
const SET_STATUS = "profile/SET-STATUS"
const LIKE_POST = "profile/LIKE-POST"
const SAVE_PHOTO_SUCCESS = "profile/SAVE-PHOTO-SUCCESS"
const SAVE_PROFILE_SUCCESS = "profile/SAVE-PROFILE-SUCCESS"

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
            postsData: [{
               id: 8,
               message: action.text,
               likesCount: 4,
            },
            ...state.postsData,]
         }
      case SET_USER_PROFILE: {
         return { ...state, profile: action.profile }
      }
      case SET_STATUS: {
         return { ...state, status: action.status }
      }
      case SAVE_PHOTO_SUCCESS: {
         return { ...state, profile: { ...state.profile, photos: action.photos } }
      }
      // case SAVE_PROFILE_SUCCESS: {
      //    return { ...state, profile: action.profile }
      // }


      // case LIKE_POST: {
      //    let postLikesCount = state.postsData[postId - 1].likesCount
      //    return { ...state, postsData: [state.postsData[postId - 1].likesCount = postLikesCount + 1, ...state.postsData] }
      // }

      default:
         return state
   }
}



// export const likePost = (postId) => ({
//    type: LIKE_POST,
//    postId
// })


export const addPostActionCreator = (text) => ({
   type: ADD_POST,
   text
})
export const savePhotoSuccess = (photos) => ({
   type: SAVE_PHOTO_SUCCESS,
   photos
})

// export const saveProfileSuccess = (profile) => ({
//    type: SAVE_PROFILE_SUCCESS,
//    profile
// })

export const setUserProfile = (profile) => ({
   type: SET_USER_PROFILE,
   profile
})

export const setStatus = (status) => ({
   type: SET_STATUS,
   status
})

export const setProfileThunkCreator = (userId) => async (dispatch) => {
   let data = await usersAPI.getProfile(userId)
   dispatch(setUserProfile(data))

}

export const getStatusThunkCreator = (userId) => async (dispatch) => {
   let data = await profileAPI.getStatus(userId)
   dispatch(setStatus(data))
}

export const updateStatusThunkCreator = (status) => async (dispatch) => {
   let data = await profileAPI.updateStatus(status)
   if (data.resultCode === 0) {
      dispatch(setStatus(status))
   }
}

export const savePhoto = (file) => async (dispatch) => {
   let data = await profileAPI.savePhoto(file)
   if (data.resultCode === 0) {

      dispatch(savePhotoSuccess(data.data.photos))
   }
}

export const saveProfileThunkCreator = (profile) => async (dispatch, getState) => {
   const userId = getState().auth.userId
   let data = await profileAPI.saveProfile(profile)
   if (data.resultCode === 0) {
      dispatch(setProfileThunkCreator(userId))
   }

}









export default profileReducer;