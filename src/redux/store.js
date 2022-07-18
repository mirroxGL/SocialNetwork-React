import { type } from '@testing-library/user-event/dist/type/index.js';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

let store = {

   _state: {
      profile: {
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
      },


      dialogs: {
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
      },
   },

   _callSubscriber() {
      console.log('State has changed');
   },

   dispatch(action) {
      this._state.profile = profileReducer(action, this._state.profile)
      this._state.dialogs = dialogsReducer(action, this._state.dialogs)
      this._callSubscriber(this._state)
   },


   subscribe(observer) {
      this._callSubscriber = observer
   },

   getState() {
      return this._state
   },

}






export default store