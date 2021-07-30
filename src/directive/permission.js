import store from "../store";

/**
 * @description 自定义权限指令，通过收集到的可访问标识比对
 */
function hasPermission(currentPermission) {
  const currentBtnPermissionList = store.state.common.currentBtnPermissionList;
  if (!currentBtnPermissionList || !currentBtnPermissionList.length) {
    return false;
  }
  return currentBtnPermissionList.some((item) => item === currentPermission);
}

export default {
  inserted(el, binding) {
    if (!hasPermission(binding.value)) {
      el.parentNode.removeChild(el);
    }
  },
};
