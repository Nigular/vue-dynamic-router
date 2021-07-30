import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Index from "../views/Index"; //首页
import notFound from "../views/not-found"; //404页面
import service from "./service"; //服务商
import scenic from "./scenic"; //景区
import product from "./product"; //产品
import order from "./order"; //订单
import setting from "./setting"; //设置

import { getAsyncRoutes } from "./authorise";

//该方法用于屏蔽路由重复添加的控制台报错
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => error);
};

//首页路由
const Indexs = [
  {
    path: "/",
    name: "index",
    component: Index,
    meta: {
      title: "运营平台",
    },
  },
];
//404路由(默认存在)
const notFoundRoute = [
  {
    path: "/404",
    name: "notFound",
    component: notFound,
  },
];

//默认能访问的路由
const routes = [...notFoundRoute];

//动态加载的路由
const otherRouhes = [
  ...Indexs,
  ...service,
  ...scenic,
  ...product,
  ...order,
  ...setting,
];

//console.log(otherRouhes);

const router = new VueRouter({
  routes,
});

//异步获计算能访问的动态路由后，再添加动态路由
getAsyncRoutes(otherRouhes).then((asyncRoutes) => {
  asyncRoutes.forEach((item) => {
    router.addRoute(item);
  });
  //所有页面找不到时
  router.addRoute({
    path: "*",
    redirect: "/404",
  });
});

export default router;
