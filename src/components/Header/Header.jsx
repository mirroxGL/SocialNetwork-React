
import { NavLink } from "react-router-dom"
import h from "./Header.module.css"


const Header = (props) => {
   return (
      <header className={h.header}>
         <div className={h.logo}>
            <a href={process.env.PUBLIC_URL}><img src='https://about.gitlab.com/images/press/logo/png/gitlab-logo-700.png' /></a>
         </div>
         <div className={h.loginBlock}>
            {props.isAuth ? <div className={h.login}>{props.login} <br /> <button className={h.logout_btn} onClick={props.logout}>Log out</button></div> : <NavLink className={h.login_btn} to={"/login"}>Login</NavLink>}

         </div>
      </header>
   )
}

export default Header