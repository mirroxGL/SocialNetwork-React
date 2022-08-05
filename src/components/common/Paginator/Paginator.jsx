import React, { useState } from 'react';
import s from "./Paginator.module.css"

const Paginator = (props, { portionSize = 5 }) => {
   let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
   let pages = [];

   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);

   }

   let portionsCount = Math.ceil(pagesCount / portionSize)
   let [portionNumber, setPortionNumber] = useState(1)
   let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
   let rightPortionPageNumber = portionNumber * portionSize

   return (
      <div>
         <div className={s.usersBlock}>

            <div className={s.pagination}>
               {leftPortionPageNumber > 1 && <button className={s.paginatorBtn} onClick={() => {
                  setPortionNumber(portionNumber - 1)
               }} >Prev</button>}

               {pages
                  .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                  .map(p => {
                     return <span onClick={() => { props.onPageChanged(p) }} className={props.currentPage === p ? s.selectedPage : ""}><span className={s.paginationNumber}>{p}</span></span>
                  })}
               {rightPortionPageNumber < portionsCount && <button className={s.paginatorBtn} onClick={() => {
                  setPortionNumber(portionNumber + 1)
               }}>Next</button>}

            </div>
         </div>
      </div>
   )
}

export default Paginator