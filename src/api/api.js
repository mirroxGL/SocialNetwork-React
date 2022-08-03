import * as axios from "axios"



const instance = axios.create({
   withCredentials: true,
   headers: { "api-key": "614d50f2-70aa-4cc3-91ef-5b0a8924ea2a" },
   baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 10) {
      return instance.get(`users?page=${currentPage}&count${pageSize}`, {
         withCredentials: true,
      }).then(response => response.data)
   },

   authMe() {
      return authMeAPI.authMe()
   },


   follow(u) {
      return instance.post(`follow/` + u.id, {}, {
      }).then(response => response.data)
   },

   unfollow(u) {
      return instance.delete(`follow/` + u.id, {
      }).then(response => response.data)
   },
   getProfile(userId) {
      return profileAPI.getProfile(userId)
   }

}

export const profileAPI = {
   getProfile(userId) {
      return instance.get(`profile/` + userId).then(response => response.data)

   },
   getStatus(userId) {
      return instance.get(`profile/status/` + userId).then(response => response.data)

   },
   updateStatus(status) {
      return instance.put(`profile/status/`, { status: status }).then(response => response.data)

   }
}

export const authMeAPI = {
   authMe() {
      return instance.get(`auth/me`, {
      }).then(response => response.data)
   },
   login(email, password, rememberMe = false) {
      return instance.post(`auth/login`, { email, password, rememberMe }).then(response => response.data)
   },
   logout() {
      return instance.delete(`auth/login`).then(response => response.data)
   }

}



