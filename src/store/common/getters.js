export default {
  currentTopMenuList(state) {
    return state.currentTopMenuList;
  },
  currentTopMenuId(state) {
    return state.currentTopMenuId;
  },
  currentLeftMenuList(state) {
    let target = state.currentTopMenuList.filter((item) => {
      return item.id === state.currentTopMenuId;
    });
    if (target.length) {
      return target[0];
    }
  },
};
