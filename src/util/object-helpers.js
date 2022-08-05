import { toggleFollowingInProgress } from "../redux/users-reducer";

export const followUnfollowSwitcher = (items, itemId, objPropName, newObjProps) => {

   return items.map(u => {
      if (u[objPropName] === itemId) {
         return { ...u, ...newObjProps }
      }
      else return u
   })
}

export const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
   dispatch(toggleFollowingInProgress(true, userId.id))
   let data = await apiMethod(userId)
   if (data.resultCode == 0) {
      dispatch(actionCreator(userId.id))
   }
   dispatch(toggleFollowingInProgress(false, userId.id))
}