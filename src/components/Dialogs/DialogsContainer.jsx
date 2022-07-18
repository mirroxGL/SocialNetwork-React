import React from "react";
import { NavLink } from "react-router-dom";
import d from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageActionCreator } from "../../redux/dialogs-reducer";
import { updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

   let state = props.store.getState()
   let sendMessage = () => {
      props.store.dispatch(sendMessageActionCreator())

   }
   let onMessageChange = (message) => {
      let action = updateNewMessageTextActionCreator(message)
      props.store.dispatch(action)
   }

   return (
      <Dialogs sendMessage={sendMessage} onMessageChange={onMessageChange} dialogs={state.dialogs.dialogsData} messages={state.dialogs.messagesData} newMessageText={state.dialogs.newMessageText} />
   )
}

export default DialogsContainer