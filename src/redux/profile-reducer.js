const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

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
   newPostText: ""
}

export const addPostActionCreator = () => ({
   type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
   type: UPDATE_NEW_POST_TEXT,
   newPostText: text,
})

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 8,
            message: state.newPostText,
            likesCount: 4,
         }
         state.postsData.push(newPost)
         state.newPostText = ""
         return state
      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newPostText
         return state
      default:
         return state
   }
}




export default profileReducer;