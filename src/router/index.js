import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/login";
import Index from  "../components/index";
import Error from "../components/error";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path:"/index",
    name:"Index",
    component: Index
  },
  {
    path:"/error",
    name:"Error",
    component:Error
  }
 
];
 
const router = new VueRouter({
  routes,
  mode:'history'
});
 
export default router;
