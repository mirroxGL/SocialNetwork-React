import React from "react";
import { connect } from 'react-redux'
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC } from "../../redux/users-reducer";
import Users from "./Users";
import axios from "axios";
import Preloader from "./../common/Preloader/Preloader"



export class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.toggleIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items)
         this.props.setTotalUsersCount(response.data.totalCount)
         this.props.toggleIsFetching(false)
      })

   }
   onPageChanged = (pageNumber) => {
      this.props.toggleIsFetching(true)
      this.props.setCurrentPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items)
         this.props.toggleIsFetching(false)
      })
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
            follow={this.props.follow} />

      </>
      )
   }

}


let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,

   }
}

// let mapDispatchToProps = (dispatch) => {
//    return {
//       follow: (usersId) => {
//          dispatch(followAC(usersId))
//       },
//       unfollow: (usersId) => {
//          dispatch(unfollowAC(usersId))
//       },
//       setUsers: (users) => {
//          dispatch(setUsersAC(users))
//       },
//       setCurrentPage: (page) => {
//          dispatch(setCurrentPageAC(page))
//       },
//       setTotalUsersCount: (usersCount) => {
//          dispatch(setTotalUsersCountAC(usersCount))
//       },
//       toggleIsFetching: (isFetching) => {
//          dispatch(toggleIsFetchingAC(isFetching))
//       }
//    }
// }

export default connect(mapStateToProps, {
   follow: followAC,
   unfollow: unfollowAC,
   setUsers: setUsersAC,
   setCurrentPage: setCurrentPageAC,
   setTotalUsersCount: setTotalUsersCountAC,
   toggleIsFetching: toggleIsFetchingAC
})(UsersContainer)