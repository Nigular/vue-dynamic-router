import Storage from "@/utils/storage";

export default {
  setCurrentTopMenuList(state, data) {
    state.currentTopMenuList = data;
  },
  setCurrentTopMenuId(state, id) {
    state.currentTopMenuId = id;
    //存进去session，实现刷新后的数据持久化
    Storage.session.set("__currentTopMenuId__", id);
  },
};
