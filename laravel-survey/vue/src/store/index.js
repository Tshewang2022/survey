// import { createStore } from "vuex";
import { createStore } from "vuex";

import axiosClient from "../axios";
import axios from "axios";
const store = createStore({
  state: {
    user: {
      data: {},
      //this will store the user data in the sessionStorage and the user will not get logout automatically
      token: sessionStorage.getItem("TOKEN"),
    },
  },
  getters: {},

  actions: {
    // api routing for register
    async register(user) {
      try {
        const response = await axiosClient.get("/api/register", user);
        return response.data;
      } catch (error) {
        // console.log("Registration failed", error);
        throw error;
      }
      // console.log(user);
      // return axiosClient.post("/register", user).then(({ data }) => {
      //   commit("setUser", data.user);
      //   commit("setToken", data.token);
      //   return data;
      // });
      // return axios
      //   .post("http://127.0.0.1:8000/register", user)
      //   .then(({ data }) => {
      //     commit("setUser", data);
      //     return data;
      //   });
    },
    // api routing for login
    // login() {
    //   return axiosClient.post("/login", user).then(({ data }) => {
    //     commit("setUser", data);
    //     return data;
    //   });
    // },
  },
  mutations: {
    logout: (state) => {
      state.user.data = {};
      state.user.token = null;
    },
    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem("TOKEN", userData.token);
    },
  },
  modules: {},
});

export default store;
