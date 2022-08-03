import { connect } from 'react-redux'
import MyProfileInfo from './MyProfileInfo'

let mapStateToProps = (state) => {
   return {
      profileData: state.profile.profileData,
   }
}


let mapDispatchToProps = (dispatch) => {
   return {
   }
}


const MyProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(MyProfileInfo)


export default MyProfileInfoContainer