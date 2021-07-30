import axios from "axios";
import store from "../store/index";

//获取到接口的菜单权限，跟本地的路由匹对，返回可访问的路由
export const getAsyncRoutes = (otherRouhes) => {
  return new Promise(function (resolve) {
    axios.get("/api/menulist").then((res) => {
      //把菜单按sort字段排序一下
      let currentTopMenuList = multilevelMenuSort(res.data, "sort");
      //筛选可访问路由
      let routes = filterRoutes(otherRouhes, currentTopMenuList);
      //同步到vuex
      store.commit("common/setCurrentTopMenuList", currentTopMenuList);
      //筛选所有可访问的按钮权限标记
      let allowMenuKeys = filterMenukey(res.data);
      store.commit("common/setCurrentBtnPermissionList", allowMenuKeys);
      resolve(routes);
    });
  });
};

/**
 * @description 排序
 */
function _sort(data, key) {
  data.sort((a, b) => a[key] - b[key]);
  return data;
}

/**
 * @description 多级菜单排序
 */
function multilevelMenuSort(data, key) {
  if (!data || !data.length) return "";
  function tree(newData) {
    for (let i in newData) {
      if (newData[i].children && newData[i].children.length) {
        const result = tree(_sort(newData[i].children, key));
        if (result) {
          return result;
        } else {
          continue;
        }
      }
    }
  }
  tree(_sort(data, key));
  return data;
}

/**
 * @description 递归比对菜单树，返回可访问的路由
 */
function filterRoutes(routes, menuTree) {
  let allowRoutes = [];
  function tree(newData) {
    for (const data of newData) {
      if (data.url) allowRoutes.push(data.url);
      if (data.children && data.children.length) {
        //如果有子菜单，继续递归
        tree(data.children);
      }
    }
  }
  tree(menuTree);

  //把拿到的数组去重
  let arr = [...new Set(allowRoutes)];
  //把路由跟权限菜单比对，过滤出拥有权限的路由
  let output = routes.filter((item) => {
    return arr.includes(item.path);
  });
  //返回可访问的路由
  return output;
}

/**
 * @description 筛选出所有menukey
 */
function filterMenukey(data) {
  let output = [];
  function findChild(target) {
    target.forEach((item) => {
      if (item.menuKey) {
        output.push(item.menuKey);
      }
      if (item.children && item.children.length) {
        findChild(item.children);
      }
    });
  }
  findChild(data);
  return output;
}
