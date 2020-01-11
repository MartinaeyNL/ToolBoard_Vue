import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("../views/Auth.vue")
    //props: route => ({
    //  access_token: route.query.access_token
    //code: "Lalalalalalalalalalalala"
    //})
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
