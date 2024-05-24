import { createRouter, createWebHistory } from "vue-router";
import Login from "../view/Login.vue";
import Dashboard from "../view/Dashboard.vue";
import Register from "../view/Register.vue";
import Surveys from "../view/Surveys.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import AuthLayout from "../view/AuthLayout.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    // name: "DafaultLayout",
    component: DefaultLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
      },

      {
        path: "/surveys",
        name: "Survyes",
        component: Surveys,
      },
    ],
  },

  // for setting the password for the users
  {
    path: "/auth",
    redirect: "/login",
    component: AuthLayout,
    meta: { isGuest: true },
    name: "Auth",
    children: [
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

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: "Login" });
  } else if (
    store.state.user.token &&
    (to.name === "Login" || to.name === "Register")
  ) {
    next({ name: "Dashboard" });
  } else {
    next();
  }
});
export default router;
