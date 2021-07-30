export default {
  currentTopMenuList(state) {
    return state.currentTopMenuList;
  },
  currentTopMenuId(state) {
    return state.currentTopMenuId;
  },
  curretnLeftMenuId(state) {
    let target = state.currentRouterTreeLink.filter((item) => {
      return item.level === 3;
    });
    if (target) {
      return target[0].id;
    } else {
      return null;
    }
  },
  currentLeftMenuList(state) {
    let target = state.currentTopMenuList.filter((item) => {
      return item.id === state.currentTopMenuId;
    });
    if (target.length) {
      return target[0];
    } else {
      return null;
    }
  },
};
