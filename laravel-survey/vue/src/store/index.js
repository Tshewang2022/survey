// import { createStore } from "vuex";
import { createStore } from "vuex";
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
    async register({ commit }, user) {
      return fetch(`http://localhost:8000/register`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((res) => {
          commit("setUser", res);
          return res;
        });
    },
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
