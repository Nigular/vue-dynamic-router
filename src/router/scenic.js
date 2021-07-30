/**
 * 景区路由配置
 */
export default [
  /**
   * 景区管理
   */
  // 景区列表
  {
    path: "/scenic/ScenicList",
    name: "ScenicList",
    // route level code-splitting 路由级代码分割
    // this generates a separate chunk (about.[hash].js) for this route 为该路由生成一个单独的块(about.[hash].js)
    // which is lazy-loaded when the route is visited. 当路由被访问时，它是惰性加载的。
    component: () =>
      import(
        /* webpackChunkName: "platform-scenicspot" */ "../views/scenic/ScenicList"
      ),
  },
  // 景区详情
  {
    path: "/scenic/ScenicDetail",
    name: "ScenicDetail",
    component: () =>
      import(
        /* webpackChunkName: "platform-scenicspot" */ "../views/scenic/ScenicDetail"
      ),
  },
];
