import React from "react";
import d from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from "redux-form"
import { Textarea } from "../common/FormsControls/FormsControls";
import { required, maxLengthCreator } from "../../util/validators/validators";

const maxLength50 = maxLengthCreator(50)
const DialogsForm = (props) => {

   return <div>
      <form onSubmit={props.handleSubmit} className={d.sendMessageForm}>
         <Field validate={[required, maxLength50]} placeholder="Your message..." name="message" component={Textarea} className={d.textInput} />
         <div><button className={d.sendMessageBtn}>Send</button></div>
      </form>
   </div>
}



const DialogsReduxForm = reduxForm({
   form: "dialogsForm"
})(DialogsForm)



const Dialogs = (props) => {

   let dialogsElements = props.dialogs.map((dialog, i) => <DialogItem key={i} name={dialog.name} id={dialog.id} />)
   let messagesElements = props.messages.map((message, i) => <Message key={i} message={message.message} />)

   let sendMessage = (message) => {
      props.sendMessage(message)

   }
   const handleSubmit = (formData) => {
      sendMessage(formData.message);

   }
   if (!props.isAuth) {
      return <Navigate to={"/login"} />
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
         <DialogsReduxForm onSubmit={handleSubmit} />
      </div>
   )
}

export default Dialogs

