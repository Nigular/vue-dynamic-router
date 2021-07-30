/**
 * 服务商路由配置
 */
export default [
  /**
   * 服务商管理
   */
  // 服务商新增、编辑
  {
    path: "/service/ServiceEdit",
    name: "ServiceEdit",
    component: () =>
      import(
        /* webpackChunkName: "platform-service" */ "../views/service/ServiceEdit"
      ),
  },
  // 服务商列表
  {
    path: "/service/ServiceList",
    name: "ServiceList",
    // route level code-splitting 路由级代码分割
    // this generates a separate chunk (about.[hash].js) for this route 为该路由生成一个单独的块(about.[hash].js)
    // which is lazy-loaded when the route is visited. 当路由被访问时，它是惰性加载的。
    component: () =>
      import(
        /* webpackChunkName: "platform-service" */ "../views/service/ServiceList"
      ),
  },
  // 服务商详情
  {
    path: "/service/ServiceDetail",
    name: "ServiceDetail",
    component: () =>
      import(
        /* webpackChunkName: "platform-service" */ "../views/service/ServiceDetail"
      ),
  },
  {
    // 发票列表
    path: "/service/InvoiceList",
    name: "InvoiceList",
    component: () =>
      import(
        /* webpackChunkName: "platform-service" */ "../views/service/InvoiceList"
      ),
  },
];
