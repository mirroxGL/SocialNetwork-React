import React from 'react'

const MyProfileInfo = () => {
   return (
      <div>
         <div className={p.profile_banner__img}><img src="https://i.pinimg.com/originals/7a/81/24/7a81240359e212d40a665222ff3d13aa.jpg" /></div>
         <div className={p.profile}>
            <div className={p.profile__img}><img src="https://cdn-icons-png.flaticon.com/512/146/146035.png" alt="" /></div>
            <div className={p.profile_info}>
               <div className={p.profile_info__name}>{profileData[0].name}</div>
               <div className={p.profile_info__description}>
                  <p>Date of Birth: {profileData[1].birthday}</p>
                  <p>City: {profileData[2].city}</p>
                  <p>Education: {profileData[3].education}</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MyProfileInfo