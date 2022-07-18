import React from "react"
import n from "./Navbar.module.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
   return (
      <nav className={n.nav}>
         <ul>
            <li><NavLink to="/profile" >Profile</NavLink></li>
            <li><NavLink to="/dialogs" >Messages</NavLink></li>
            <li><NavLink to="/news">News</NavLink></li>
            <li><NavLink to="/music">Music</NavLink></li>
            <br></br>
            <li><NavLink to="/settings">Settings</NavLink></li>
         </ul>
      </nav>
   )
}

export default Navbar