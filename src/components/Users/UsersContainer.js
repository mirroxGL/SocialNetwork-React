import React from "react";
import { connect } from 'react-redux'
import { setCurrentPageAC, requestUsersThunkCreator, unfollowThunkCreator, followThunkCreator } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "./../common/Preloader/Preloader"
import withAuthRedirect from "../../HOC/withAuthRedirect";
import { compose } from 'redux'
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../redux/users-selectors";



export class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize)


   }
   onPageChanged = (pageNumber) => {
      this.props.requestUsers(pageNumber, this.props.pageSize)
      this.props.setCurrentPage(pageNumber)

   }



   render() {
      return (<>
         {this.props.isFetching ? <Preloader /> : null}
         <Users onPageChanged={this.onPageChanged}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            totalUsersCount={this.props.totalUsersCount}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            toggleFollowingInProgress={this.props.toggleFollowingInProgress}
            followingInProgress={this.props.followingInProgress}
            isAuth={this.props.isAuth}
            setCurrentPage={this.props.setCurrentPage} />

      </>
      )
   }

}


let mapStateToProps = (state) => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state)
   }
}


export default compose(
   withAuthRedirect,
   connect(mapStateToProps, {
      unfollow: unfollowThunkCreator,
      follow: followThunkCreator,
      setCurrentPage: setCurrentPageAC,
      requestUsers: requestUsersThunkCreator,

   }),

)(UsersContainer)




