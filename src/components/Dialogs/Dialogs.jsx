import React from "react";
import { NavLink } from "react-router-dom";
import d from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageActionCreator } from "../../redux/dialogs-reducer";
import { updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

   let dialogsElements = props.dialogs.map((dialog, i) => <DialogItem key={i} name={dialog.name} id={dialog.id} />)
   let messagesElements = props.messages.map((message, i) => <Message key={i} message={message.message} />)


   let sendMessage = () => {
      props.sendMessage()

   }
   let onMessageChange = (e) => {
      let message = e.target.value
      props.onMessageChange(message)
   }

   return (
      <div>
         <div className={d.dialogs}>
            <div className={d.dialogsItems}>
               {dialogsElements}
            </div>
            <div className={d.messages}>
               {messagesElements}
            </div>
         </div>
         <form className={d.sendMessageForm}>
            <textarea onChange={onMessageChange} value={props.newMessageText} className={d.textInput} ></textarea>
            <div><a onClick={sendMessage} className={d.sendMessageBtn}>Send</a></div>
         </form>


      </div>
   )
}

export default Dialogs