export default [
  {
    path: "/order/OrderList",
    name: "OrderList",
    // route level code-splitting 路由级代码分割
    // this generates a separate chunk (about.[hash].js) for this route 为该路由生成一个单独的块(about.[hash].js)
    // which is lazy-loaded when the route is visited. 当路由被访问时，它是惰性加载的。
    component: () =>
      import(
        /* webpackChunkName: "platform-order" */ "../views/order/OrderList"
      ),
  },
  {
    // 订单详情
    path: "/order/OrderDetail",
    name: "OrderDetail",
    component: () =>
      import(
        /* webpackChunkName: "platform-order" */ "../views/order/OrderDetail"
      ),
  },
  {
    // 订单调整
    path: "/order/OrderAdjust",
    name: "OrderAdjust",
    component: () =>
      import(
        /* webpackChunkName: "platform-order" */ "../views/order/OrderAdjust"
      ),
  },
  {
    // 订单发货
    path: "/order/OrderSend",
    name: "OrderSend",
    component: () =>
      import(
        /* webpackChunkName: "platform-order" */ "../views/order/OrderSend"
      ),
  },
];
