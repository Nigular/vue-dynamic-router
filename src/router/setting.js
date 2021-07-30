/**
 * 设置路由配置
 */
export default [
  /**
   * 角色管理
   */
  // 角色列表
  {
    path: "/setting/role/RoleList",
    name: "RoleList",
    // route level code-splitting 路由级代码分割
    // this generates a separate chunk (about.[hash].js) for this route 为该路由生成一个单独的块(about.[hash].js)
    // which is lazy-loaded when the route is visited. 当路由被访问时，它是惰性加载的。
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/role/RoleList"
      ),
  },
  // 角色新增、编辑
  {
    path: "/setting/role/RoleEdit",
    name: "RoleEdit",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/role/RoleEdit"
      ),
  },

  /**
   * 用户管理
   */
  // 用户列表
  {
    path: "/setting/user/UserList",
    name: "UserList",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/user/UserList"
      ),
  },
  // 用户编辑
  {
    path: "/setting/user/UserEdit",
    name: "UserEdit",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/user/UserEdit"
      ),
  },
  // 用户详情
  {
    path: "/setting/user/UserDetail",
    name: "UserDetail",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/user/UserDetail"
      ),
  },

  /**
   * 菜单管理
   */
  // 菜单列表
  {
    path: "/setting/menu/MenuList",
    name: "MenuList",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/menu/MenuList"
      ),
  },

  /**
   * 产品管理
   */
  // 产品模块权限管理列表
  {
    path: "/setting/product/ProductList",
    name: "ProductList",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/product/ProductList"
      ),
  },
  // 产品试用管理
  {
    path: "/setting/product/ProductTrial",
    name: "ProductTrial",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/product/ProductTrial"
      ),
  },
  // 产品授权页面
  {
    path: "/setting/product/ProductMenuTree",
    name: "ProductMenuTree",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/product/ProductMenuTree"
      ),
  },

  /**
   * 支付管理
   */
  // 支付通道列表
  {
    path: "/setting/pay/PayChannelList",
    name: "PayChannelList",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/pay/PayChannelList"
      ),
  },
  // 支付通道新增、编辑
  {
    path: "/setting/pay/PayChannelEdit",
    name: "PayChannelEdit",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/pay/PayChannelEdit"
      ),
  },
  // 支付授权列表
  {
    path: "/setting/pay/PayAuthList",
    name: "PayAuthList",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/pay/PayAuthList"
      ),
  },
  // 支付授权编辑
  {
    path: "/setting/pay/PayAuthEdit",
    name: "PayAuthEdit",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/pay/PayAuthEdit"
      ),
  },

  /**
   *OTA管理
   */
  // OTA通道
  {
    path: "/setting/ota/OTAChannelList",
    name: "OTAChannelList",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/ota/OTAChannelList"
      ),
  },
  // OTA通道编辑
  {
    path: "/setting/ota/OTAChannelEdit",
    name: "OTAChannelEdit",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/ota/OTAChannelEdit"
      ),
  },
  // 通道授权
  {
    path: "/setting/ota/ChannelAuthList",
    name: "ChannelAuth",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/ota/ChannelAuthList"
      ),
  },
  // 通道授权编辑
  {
    path: "/setting/ota/ChannelAuthEdit",
    name: "ChannelAuthEdit",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/ota/ChannelAuthEdit"
      ),
  },

  /**
   *短信管理
   */
  // 短信通道列表
  {
    path: "/setting/sms/SmsChannelList",
    name: "SmsChannelList",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/sms/SmsChannelList"
      ),
  },
  // 短信通道新增、编辑
  {
    path: "/setting/sms/SmsChannelEdit",
    name: "SmsChannelEdit",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/sms/SmsChannelEdit"
      ),
  },
  // 短信通道-充值账号
  {
    path: "/setting/sms/SmsChanneRecharge",
    name: "SmsChanneRecharge",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/sms/SmsChanneRecharge"
      ),
  },

  // 短信通道-子账户充值记录
  {
    path: "/setting/sms/SmsChanneSubAccount",
    name: "SmsChanneSubAccount",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/sms/SmsChanneSubAccount"
      ),
  },

  // 短信套餐列表
  {
    path: "/setting/sms/SmsPackageList",
    name: "SmsPackageList",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/sms/SmsPackageList"
      ),
  },
  // 短信套餐新增、编辑
  {
    path: "/setting/sms/SmsPackageEdit",
    name: "SmsPackageEdit",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/sms/SmsPackageEdit"
      ),
  },
  // 短信子账户列表
  {
    path: "/setting/sms/SubAccountList",
    name: "SubAccountList",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/sms/SubAccountList"
      ),
  },
  // 短信子账户新增
  {
    path: "/setting/sms/SubAccountAdd",
    name: "SubAccountAdd",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/sms/SubAccountAdd"
      ),
  },
  // 短信子账户编辑
  {
    path: "/setting/sms/SubAccountEdit",
    name: "SubAccountEdit",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/sms/SubAccountEdit"
      ),
  },
  // 短信子账户绑定
  {
    path: "/setting/sms/SubAccountBind",
    name: "SubAccountBind",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/sms/SubAccountBind"
      ),
  },

  /**
   * 公告管理
   */
  // 公告列表
  {
    path: "/setting/notice/NoticeList",
    name: "NoticeList",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/notice/NoticeList"
      ),
  },

  /**
   * 其他设置
   */
  // 应用管理
  {
    path: "/setting/other/OtherAppList",
    name: "OtherAppList",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/other/OtherAppList"
      ),
  },
  // 添加应用
  {
    path: "/setting/other/OtherAppAdd",
    name: "OtherAppAdd",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/other/OtherAppAdd"
      ),
  },
  // 管理应用
  {
    path: "/setting/other/OtherAppEdit",
    name: "OtherAppEdit",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/other/OtherAppEdit"
      ),
  },
  // 日历管理
  {
    path: "/setting/other/CalendarManagement",
    name: "CalendarManagement",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/other/CalendarManagement"
      ),
  },

  /**
   * 定时任务管理
   */
  // 定时任务列表
  {
    path: "/setting/timed-task/TimedTaskList",
    name: "TimedTaskList",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/timed-task/TimedTaskList"
      ),
  },

  /**
   *自定义表单
   */
  // 模板列表
  {
    path: "/setting/CustomList",
    name: "CustomList",
    component: () =>
      import(
        /* webpackChunkName: "custom-form-chuck" */ "../views/setting/custom-form/CustomList.vue"
      ),
  },
  // 自定义表单首页
  {
    path: "/setting/CustomIndex",
    name: "CustomIndex",
    component: () =>
      import(
        /* webpackChunkName: "custom-form-chuck" */ "../views/setting/custom-form/CustomIndex.vue"
      ),
  },
  // 自定义表单预览页
  {
    path: "/setting/CustomPreview",
    name: "CustomPreview",
    component: () =>
      import(
        /* webpackChunkName: "custom-form-chuck" */ "../views/setting/custom-form/CustomPreview.vue"
      ),
  },
  // 自定义表单展示页
  {
    path: "/setting/showTemplate",
    name: "ShowTemplate",
    component: () =>
      import(
        /* webpackChunkName: "custom-form-chuck" */ "../views/setting/custom-form/ShowTemplate.vue"
      ),
  },
  /**
   * 微信开放平台
   */
  // 微信开放平台列表
  {
    path: "/setting/open-weixin/OpenWeixinList",
    name: "SzOpenWeixinList",
    component: () =>
      import(
        /* webpackChunkName: "custom-form-chuck" */ "../views/setting/open-weixin/OpenWeixinList"
      ),
  },
  // 微信开放平台配置
  {
    path: "/setting/open-weixin/OpenWeixinSetting",
    name: "SzOpenWeixinSetting",
    component: () =>
      import(
        /* webpackChunkName: "custom-form-chuck" */ "../views/setting/open-weixin/OpenWeixinSetting"
      ),
  },
  // 微信开放平台授信公众号列表
  {
    path: "/setting/open-weixin/OpenWeixinAuthList",
    name: "SzOpenWeixinAuthList",
    component: () =>
      import(
        /* webpackChunkName: "custom-form-chuck" */ "../views/setting/open-weixin/OpenWeixinAuthList"
      ),
  },
  // 微信开放平台授信公众号详情
  {
    path: "/setting/open-weixin/OpenWeixinAuthDetail",
    name: "SzOpenWeixinAuthDetail",
    component: () =>
      import(
        /* webpackChunkName: "custom-form-chuck" */ "../views/setting/open-weixin/OpenWeixinAuthDetail"
      ),
  },
  /**
   * 电子发票
   */
  // 商户发票通道列表
  {
    path: "/setting/invoice/InvoiceChannelList",
    name: "SzInvoiceChannelList",
    component: () =>
      import(
        /* webpackChunkName: "custom-form-chuck" */ "../views/setting/invoice/InvoiceChannelList"
      ),
  },
  // 商户发票通道设置
  {
    path: "/setting/invoice/InvoiceChannelEdit",
    name: "SzInvoiceChannelEdit",
    component: () =>
      import(
        /* webpackChunkName: "custom-form-chuck" */ "../views/setting/invoice/InvoiceChannelEdit"
      ),
  },
  // 设备管理
  {
    path: "/setting/equipment/EquipmentList",
    name: "EquipmentList",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/equipment/EquipmentList"
      ),
  },
  {
    path: "/setting/equipment/EquipmentOperation",
    name: "EquipmentOperation",
    component: () =>
      import(
        /* webpackChunkName: "platform-setting" */ "../views/setting/equipment/EquipmentOperation"
      ),
  },
];
