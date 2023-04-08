import { createRouter, createWebHistory } from "vue-router";
import Botlist from "../views/Botlist.vue";
import Botactions from "../views/Botactions.vue";
import Tables from "../views/Tables.vue";
import Billing from "../views/Billing.vue";
import VirtualReality from "../views/VirtualReality.vue";
import RTL from "../views/Rtl.vue";
import EntriesAdd from "../views/EntriesAdd.vue";
import EntriesEdit from "../views/EntriesEdit.vue";
import EntriesFilter from "../views/EntriesFilter.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/botlist",
  },
  {
    path: "/botlist",
    name: "Botlist",
    component: Botlist,
  },
  {
    path: "/entriesfilter",
    name: "EntriesFilter",
    component: EntriesFilter,
  },
  {
    path: "/botactions",
    name: "Botactions",
    component: Botactions,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
  },
  {
    path: "/entriesedit",
    name: "EntriesEdit",
    component: EntriesEdit,
  },
  {
    path: "/entriesadd",
    name: "EntriesAdd",
    component: EntriesAdd,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/signin'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
        next('/signin');
    } else {
        next();
    }
});

export default router;
