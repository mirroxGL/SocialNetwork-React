
import React from 'react'
import s from "./FormsControls.module.css"



export const Textarea = ({ input, meta, ...props }) => {
   const hasError = meta.touched && meta.error
   return (
      <div className={s.formControlTextarea + " " + (hasError ? s.error : "")}>
         <textarea {...props} {...input}></textarea>
         {hasError && <div><span>{meta.error}</span></div>}
      </div >
   )
}

export const Input = ({ input, meta, ...props }) => {
   const hasError = meta.touched && meta.error
   return (
      <div className={s.formControlInput + " " + (hasError ? s.error : "")}>
         <input {...props} {...input}></input>
         {hasError && <span>{meta.error}</span>}
      </div >
   )
}
