import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    //include metadata in each path to require auth
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requireAuth: false
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        requireAuth: true
      }
    }
  ]
});

// Check this before loading each page
// redirect to login page before other pages (to protect the root)
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
