import { reduxForm } from "redux-form"
import { createField, Input, Textarea } from "../../common/FormsControls/FormsControls"
import ProfileStatusWithHooks from "./MyProfileInfo/MyProfileInfoStatus/ProfileStatusWithHooks"
import { Contact } from "./ProfileInfo"
import p from "./ProfileInfo.module.css"

const ProfileDataForm = (props) => {
   return <form onSubmit={props.handleSubmit} className={p.profileInfoBlock}>
      <div className={p.profile_info}>
         <div className={p.editNameFlex}>
            <div className={p.profile_info__name}><div className={p.fullNameLabel}>{createField("Full name", "fullName", [], Input)}</div></div>
            {props.isOwner && <button type="submit" className={p.saveInfoBtn} >Save</button>}
         </div>


         <div><b>Status:</b><ProfileStatusWithHooks isOwner={props.isOwner} status={props.status} updateStatus={props.updateStatus} userId={props.profile.userId} /></div>



         <b>Looking for a job:</b><div className={p.checkboxInput}>{createField("Looking for a job", "lookingForAJob", [], Input, { type: "checkbox" })}</div>
         <br />
         <b>My professional skills:</b><div className={p.aboutMeInputs}>{createField("My professional skills...", "lookingForAJobDescription", [], Textarea)}</div>
         <br />
         <b>About Me:</b><div className={p.aboutMeInputs}>{createField("About me...", "aboutMe", [], Textarea)}</div>
         {/* <b>Contacts:</b>{Object.keys(props.profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={createField("Type here...", "contacts", [], Input)} />

         })} */}
      </div>

   </form>
}

const ProfileDataReduxForm = reduxForm({ form: "edit-profile" })(ProfileDataForm)


export default ProfileDataReduxForm