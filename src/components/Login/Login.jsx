import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form"
import { required } from "../../util/validators/validators";
import { createField, Input } from "../common/FormsControls/FormsControls";
import { getCaptchaUrl, login } from "../../redux/auth-reducer"
import { Navigate } from 'react-router-dom';
import s from "../common/FormsControls/FormsControls.module.css"
import p from "./Login.module.css"



const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
   return (
      <div>
         <form onSubmit={handleSubmit}>
            <div>
               <Field className={p.inputArea} placeholder="Login" name="email" component={Input} validate={required} />
            </div>
            <div>
               <Field className={p.inputArea} placeholder="Password" name="password" type="password" component={Input} validate={required} />
            </div>
            <div>
               <Field name="rememberMe" type={"checkbox"} component={"input"} /><span className={p.rememberMe_label}>remember me</span>
            </div>
            {captchaUrl && <img src={captchaUrl}></img>}
            {captchaUrl && createField("Symbols for image", "captcha", [required], Input, {})}
            {error && <div className={s.formSummaryError} >{error}</div>}
            <div>
               <button className={p.login_btn}>Login</button>
            </div>
         </form>

      </div>
   )
}

const LoginReduxForm = reduxForm({
   form: "login"
})(LoginForm)



const Login = (props) => {

   const handleSubmit = (formData) => {
      props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
   }

   if (props.isAuth) {
      return <Navigate to="/profile" />
   }

   return (
      <div className={p.login_block}>
         <div className={p.login_title}>Login</div>
         <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={handleSubmit} />
      </div>
   )
}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { login })(Login)