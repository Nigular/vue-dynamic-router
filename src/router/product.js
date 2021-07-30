/**
 * 产品路由配置
 */
export default [
  /**
   * 产品管理
   */
  // 硬件产品新增、编辑
  {
    path: "/product/HardwareEdit",
    name: "HardwareEdit",
    // route level code-splitting 路由级代码分割
    // this generates a separate chunk (about.[hash].js) for this route 为该路由生成一个单独的块(about.[hash].js)
    // which is lazy-loaded when the route is visited. 当路由被访问时，它是惰性加载的。
    component: () =>
      import(
        /* webpackChunkName: "platform-product" */ "../views/product/HardwareEdit"
      ),
  },
  // 硬件产品列表
  {
    path: "/product/HardwareList",
    name: "HardwareList",
    component: () =>
      import(
        /* webpackChunkName: "platform-product" */ "../views/product/HardwareList"
      ),
  },
  // 硬件产品详情
  {
    path: "/product/HardwareDetail",
    name: "HardwareDetail",
    component: () =>
      import(
        /* webpackChunkName: "platform-product" */ "../views/product/HardwareDetail"
      ),
  },
  // 软件产品新增、编辑
  {
    path: "/product/SoftwareEdit",
    name: "SoftwareEdit",
    component: () =>
      import(
        /* webpackChunkName: "platform-product" */ "../views/product/SoftwareEdit"
      ),
  },
  // 软件产品列表
  {
    path: "/product/SoftwareList",
    name: "SoftwareList",
    component: () =>
      import(
        /* webpackChunkName: "platform-product" */ "../views/product/SoftwareList"
      ),
  },
  // 软件产品详情
  {
    path: "/product/SoftwareDetail",
    name: "SoftwareDetail",
    component: () =>
      import(
        /* webpackChunkName: "platform-product" */ "../views/product/SoftwareDetail"
      ),
  },
];
