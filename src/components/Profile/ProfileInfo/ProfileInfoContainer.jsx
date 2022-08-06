import { connect } from 'react-redux'
import ProfileInfo from './ProfileInfo'

let mapStateToProps = (state) => {
   return {
      profileData: state.profile.profileData,
      profile: state.profile.profile,
   }
}


let mapDispatchToProps = (dispatch) => {
   return {


   }
}


const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)


export default ProfileInfoContainer