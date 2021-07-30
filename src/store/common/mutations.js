export default {
  setCurrentTopMenuList(state, data) {
    state.currentTopMenuList = data;
  },
  setCurrentTopMenuId(state, id) {
    state.currentTopMenuId = id;
  },
  setCurrentRouterTreeLink(state, data) {
    state.currentRouterTreeLink = data;
  },
  PermissionList(state, data) {
    state.currentBtnPermissionList = data;
  },
  setCurrentBtnPermissionList(state, data) {
    state.currentBtnPermissionList = data;
  },
};
