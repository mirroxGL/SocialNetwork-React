const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const ADD_MESSAGE = "ADD-MESSAGE"

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
   newMessageText: ""
}

export const sendMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const updateNewMessageTextActionCreator = (message) => ({
   type: UPDATE_NEW_MESSAGE_TEXT,
   newMessageText: message,
})

export const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_MESSAGE:
         let newMessage = {
            message: state.newMessageText,
         }
         state.messagesData.push(newMessage)
         state.newMessageText = ""
         return state
      case UPDATE_NEW_MESSAGE_TEXT:
         state.newMessageText = action.newMessageText
         return state
      default:
         return state
   }
}

export default dialogsReducer
