export default {
  setCurrentTopMenuList(state, data) {
    state.currentTopMenuList = data;
  },
  setCurrentTopMenuId(state, id) {
    state.currentTopMenuId = id;
  },
  setCurrentRouterTreeLink(state, data) {
    state.currentRouterTreeLink = data;
    let target = data.filter((item) => {
      return item.level === 1;
    });
    if (target) {
      state.currentTopMenuId = target[0].id;
    } else {
      state.currentTopMenuId = "";
    }
  },
};
