import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import withAuthRedirect from '../../HOC/withAuthRedirect'
import { setUserProfile, setProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator, savePhoto } from '../../redux/profile-reducer'
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { compose } from 'redux'


export function withRouter(Children) {
   return (props) => {

      const match = { params: useParams() };
      return <Children {...props} match={match} />
   }
}


class ProfileContainer extends React.Component {
   refreshProfile() {
      let userId = this.props.match.params.userId

      if (!userId) {
         if (this.props.isAuth) {
            userId = this.props.authorizedUserId
         }
      }
      this.props.setProfile(userId)
      this.props.getStatus(userId)

   }

   componentDidMount() {
      this.refreshProfile()


   }

   componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.match.params.userId != prevProps.match.params.userId) {
         this.refreshProfile()
      }

   }


   render() {
      return (
         <Profile {...this.props}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            isOwner={!this.props.match.params.userId}
            savePhoto={this.props.savePhoto} />
      )
   }
}

let mapStateToProps = (state) => ({
   status: state.profile.status,
   authorizedUserId: state.auth.userId,
   isAuth: state.auth.isAuth,
})



export default compose(
   connect(mapStateToProps, {
      setUserProfile,
      setProfile: setProfileThunkCreator,
      getStatus: getStatusThunkCreator,
      updateStatus: updateStatusThunkCreator,
      savePhoto: savePhoto
   }),
   withRouter,
   withAuthRedirect)(ProfileContainer)