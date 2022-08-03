import React from "react";
import s from "./MyProfileInfoStatus.module.css"



class MyProfileInfoStatus extends React.Component {
   userId = this.props.userId

   state = {
      editMode: false,
      status: this.props.status

   }
   toggleEditMode = () => {

      if (this.userId == 25081) return { editMode: true }
      else return { editMode: false }
   }
   activateEditMode = () => {
      this.setState(this.toggleEditMode)
   }

   deactivateEditMode = () => {
      this.setState({
         editMode: false
      })
      this.props.updateStatus(this.state.status)
   }

   onStatusChange = (e) => {
      this.setState({
         status: e.currentTarget.value
      })
   }

   componentDidUpdate(prevProps, prevState) {
      if (prevProps.status !== this.props.status) {
         this.setState({
            status: this.props.status
         })
      }


   }

   render() {
      return <div className={s.status}>
         {this.state.editMode &&
            <div className={s.status_input}>
               <span onBlur={this.deactivateEditMode}><input onChange={this.onStatusChange} autoFocus={true} value={this.state.status} type="text" /></span>
            </div>}
         {!this.state.editMode &&
            <div className={s.status_text}><span onDoubleClick={this.activateEditMode}>{this.props.status || "------"}</span></div>}

      </div>
   }
}

export default MyProfileInfoStatus