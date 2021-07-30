const store = {
  storage: window.localStorage,
  session: {
    storage: window.sessionStorage,
  },
};

const api = {
  set(key, val) {
    this.storage.setItem(key, transformData(val));
    return transformData(val);
  },

  get(key, def) {
    const data = transformData(this.storage.getItem(key));
    if (data) return data;
    return def || null;
  },

  clear() {
    this.storage.clear();
  },
};

Object.assign(store, api);
Object.assign(store.session, api);

/**
 * @description 转换数据
 */
function transformData(val) {
  // 判断是否是纯数字
  if (/^\d+$/g.test(val)) {
    return val + "";
  }
  try {
    return JSON.parse(val);
  } catch {
    if (val instanceof Object || val instanceof Array) {
      return JSON.stringify(val);
    }
    return val;
  }
}

export default store;
