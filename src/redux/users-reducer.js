import { usersAPI } from "../api/api"

const SET_USERS = "SET-USERS"
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE-FOLLOWING-IN-PROGRESS"


let initialState = {
   users: [

   ],
   totalUsersCount: 0,
   pageSize: 5,
   currentPage: 1,
   isFetching: true,
   followingInProgress: []

}

// ===========================USER REDUCER========================== //

const usersReducer = (state = initialState, action) => {

   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               }
               else return u
            }),
         }

      case UNFOLLOW: {
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               }
               else return u
            }),
         }
      }
      case SET_USERS: {
         return {
            ...state, users: action.users
         }

      }
      case SET_CURRENT_PAGE: {
         return {
            ...state, currentPage: action.currentPage
         }
      }
      case SET_TOTAL_USERS_COUNT: {
         return {
            ...state, totalUsersCount: action.count
         }
      }
      case TOGGLE_IS_FETCHING: {
         return {
            ...state, isFetching: action.isFetching
         }

      }
      case TOGGLE_FOLLOWING_IN_PROGRESS: {
         return {
            ...state, followingInProgress: action.isFetching
               ? [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter(id => id != action.userId)
         }

      }
      default:
         return state
   }
}




// ===========================ACTION CREATORS========================== //

export const followAC = (userId) => ({
   type: FOLLOW,
   userId
})

export const unfollowAC = (userId) => ({
   type: UNFOLLOW,
   userId
})

export const setUsersAC = (users) => ({
   type: SET_USERS,
   users
})
export const setCurrentPageAC = (currentPage) => ({
   type: SET_CURRENT_PAGE,
   currentPage
})
export const setTotalUsersCountAC = (totalUsersCount) => ({
   type: SET_TOTAL_USERS_COUNT,
   count: totalUsersCount
})

export const toggleIsFetchingAC = (isFetching) => ({
   type: TOGGLE_IS_FETCHING,
   isFetching
})
export const toggleFollowingInProgress = (isFetching, userId) => ({
   type: TOGGLE_FOLLOWING_IN_PROGRESS,
   isFetching,
   userId
})





// ===========================THUNK CREATORS========================== //

export const requestUsersThunkCreator = (currentPage, pageSize) => {
   return (dispatch) => {
      dispatch(toggleIsFetchingAC(true))
      usersAPI.getUsers(currentPage, pageSize).then(data => {
         dispatch(toggleIsFetchingAC(false))
         dispatch(setUsersAC(data.items))
         dispatch(setTotalUsersCountAC(data.totalCount))

      })
   }
}

export const unfollowThunkCreator = (userId) => {
   return (dispatch) => {
      dispatch(toggleFollowingInProgress(true, userId.id))
      usersAPI.unfollow(userId).then(data => {
         if (data.resultCode == 0) {
            dispatch(unfollowAC(userId.id))


         }
         dispatch(toggleFollowingInProgress(false, userId.id))
      })
   }
}

export const followThunkCreator = (userId) => {
   return (dispatch) => {
      dispatch(toggleFollowingInProgress(true, userId.id))
      usersAPI.follow(userId).then(data => {
         if (data.resultCode == 0) {
            dispatch(followAC(userId.id))

         }
         dispatch(toggleFollowingInProgress(false, userId.id))
      })
   }
}






export default usersReducer;