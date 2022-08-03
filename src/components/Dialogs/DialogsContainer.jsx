import { sendMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import { connect } from 'react-redux'
import { compose } from "redux";
import { reset } from "redux-form";



let mapStateToProps = (state) => {
   return {
      newMessageText: state.dialogs.newMessageText,
      dialogs: state.dialogs.dialogsData,
      messages: state.dialogs.messagesData,
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      sendMessage: (message) => {
         dispatch(sendMessageActionCreator(message))
         dispatch(reset('dialogsForm'))

      }
   }
}





export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect)(Dialogs)
