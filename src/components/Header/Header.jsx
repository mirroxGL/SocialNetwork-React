
import h from "./Header.module.css"


const Header = () => {
   return (
      <header className={h.header}>
         <div className={h.logo}>
            <a href="/"><img src='https://about.gitlab.com/images/press/logo/png/gitlab-logo-700.png' /></a>
         </div>
      </header>
   )
}

export default Header