import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/posts/:postid",
      name: "postDetail",
      component: () => import("../views/DetailView.vue"),
    },
    {
      path: "/detail/",
      name: "Detail",
      component: () => import("../views/DetailBanner.vue"),
    },
    {
      path: "/news",
      name: "news",
      component: () => import("../views/NewsVue.vue"),
    },
    {
      path: "/show",
      name: "show",
      component: () => import("../views/ShowView.vue"),
    },
    {
      path: "/profile/account",
      name: "profile",
      component: () => import("../views/ProfileView.vue"),

      children: [
        {
          path: "info",
          name: "info",
          component: () => import("../components/ProfileComponent.vue"),
        },
        {
          path: "changePassword",
          name: "changePassword",
          component: () => import("../components/ChangePassComponent.vue"),
        },
        {
          path: "post",
          name: "post",
          component: () => import("../components/PostComponent.vue"),
        },
      ],
    },
  ],
});

export default router;
