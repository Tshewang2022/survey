import { createApp } from "vue";
// import './style.css'
import App from "./App.vue";
import store from "./store";
// import VueRouter from "vue-router";
import "./index.css";
import router from "./router";
createApp(App).use(store).use(router).mount("#app");
