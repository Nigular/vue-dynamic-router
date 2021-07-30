import Vue from "vue";
import Vuex from "vuex";

//给vuex分模块管理
import common from "./common";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common,
  },
});
