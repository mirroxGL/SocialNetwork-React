import React from 'react'
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux'


let mapStateToPropsForRedirect = (state) => ({
   isAuth: state.auth.isAuth

})

const withAuthRedirect = (Component) => {
   class RedirectComponent extends React.Component {
      render() {

         if (!this.props.isAuth) {
            return <Navigate to={"/login"} />
         }
         return <Component {...this.props} />
      }
   }



   let ConnectedAuthRedirectContainer = connect(mapStateToPropsForRedirect, null)(RedirectComponent)

   return ConnectedAuthRedirectContainer

}

export default withAuthRedirect