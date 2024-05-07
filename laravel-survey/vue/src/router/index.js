import { createRouter, createWebHistory } from "vue-router";
import Login from "../view/Login.vue";
import Dashboard from "../view/Dashboard.vue";
import Register from "../view/Register.vue";
import DefaultLayout from "../components/DefaultLayout.vue";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    // name: "DafaultLayout",
    component: DefaultLayout,
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
      {
        path: "/register",
        name: "Register",
        component: Register,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
