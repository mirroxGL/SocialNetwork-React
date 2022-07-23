import React from "react";
import { NavLink } from "react-router-dom";
import d from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageActionCreator } from "../../redux/dialogs-reducer";
import { updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from 'react-redux'


// const DialogsContainer = (props) => {


//    return (
//       <StoreContext.Consumer>
//          {
//             (store) => {
//                let state = store.getState()
//                let sendMessage = () => {
//                   store.dispatch(sendMessageActionCreator())

//                }
//                let onMessageChange = (message) => {
//                   let action = updateNewMessageTextActionCreator(message)
//                   store.dispatch(action)
//                }

//                return (<Dialogs sendMessage={sendMessage}
//                   onMessageChange={onMessageChange}
//                   dialogs={state.dialogs.dialogsData}
//                   messages={state.dialogs.messagesData}
//                   newMessageText={state.dialogs.newMessageText} />)
//             }
//          }
//       </StoreContext.Consumer>
//    )
// }


let mapStateToProps = (state) => {
   return {
      newMessageText: state.dialogs.newMessageText,
      dialogs: state.dialogs.dialogsData,
      messages: state.dialogs.messagesData
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      onMessageChange: (message) => {
         let action = updateNewMessageTextActionCreator(message)
         dispatch(action)

      },
      sendMessage: () => {
         dispatch(sendMessageActionCreator())
      }
   }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer