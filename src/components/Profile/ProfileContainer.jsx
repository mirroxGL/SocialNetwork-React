import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import withAuthRedirect from '../../HOC/withAuthRedirect'
import { setUserProfile, setProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator, savePhoto } from '../../redux/profile-reducer'
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { compose } from 'redux'
import { saveProfileThunkCreator } from '../../redux/profile-reducer'
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers'


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
            console.log(this.props.authorizedUserId);
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
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            isOwner={!this.props.match.params.userId}
            savePhoto={this.props.savePhoto}
            saveProfile={this.props.saveProfile} />
      )
   }
}

let mapStateToProps = (state) => ({
   profile: state.profile.profile,
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
      savePhoto: savePhoto,
      saveProfile: saveProfileThunkCreator
   }),
   withRouter,
   withAuthRedirect)(ProfileContainer)