<!--
  @name: 左侧菜单栏
  @author: fengyanlong
  @date:2021-07-29
-->

<template>
  <div
    class="side-nav"
    v-if="currentLeftMenuList && currentLeftMenuList.children.length"
  >
    <dl v-for="item in currentLeftMenuList.children" :key="item.id">
      <dt>{{ item.name }}</dt>
      <dd
        v-for="son in item.children"
        :key="son.id"
        @click="jumpTo(son)"
        :class="son.id === curretnLeftMenuId ? 'active' : ''"
      >
        {{ son.name }}
      </dd>
    </dl>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "side-nav",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("common", ["currentLeftMenuList", "curretnLeftMenuId"]),
  },
  created() {},
  methods: {
    jumpTo(row) {
      this.$router.push(row.url);
    },
  },
};
</script>

<style scoped>
.side-nav {
  min-height: 300px;
  float: left;
  border-right: 1px solid #ccc;
  padding: 20px;
}
.side-nav dl {
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
}
.side-nav dl dt {
  color: #999;
}
.side-nav dl dd {
  cursor: pointer;
  margin: 10px 0;
}
.side-nav dl dd.active,
.side-nav dl dd:hover {
  color: #14b314;
}
</style>
