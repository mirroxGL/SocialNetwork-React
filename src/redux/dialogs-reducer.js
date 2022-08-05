const ADD_MESSAGE = "dialogs/ADD-MESSAGE"

let initialState = {
   dialogsData: [
      { id: 1, name: "Nazar" },
      { id: 2, name: "Sasha" },
      { id: 3, name: "Mom" },
      { id: 4, name: "Dad" },
      { id: 5, name: "Grandpa" },
   ],

   messagesData: [
      { message: "Hi!" },
      { message: "Are you okay?" },
      { message: "I heard you broke your leg.." },
      { message: "Are you in the hospital?" },
   ],
}

export const sendMessageActionCreator = (message) => ({ type: ADD_MESSAGE, message })


export const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_MESSAGE:
         return {
            ...state,
            messagesData: [...state.messagesData,
            { message: action.message }]
         }

      default:
         return state
   }
}

export default dialogsReducer
