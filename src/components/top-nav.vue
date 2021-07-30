<!--
  @name: 顶部菜单栏
  @author: fengyanlong
  @date:2021-07-29
-->

<template>
  <div class="top-nav">
    <ul>
      <li
        v-for="item in currentTopMenuList"
        :key="item.id"
        @click="jumpTo(item)"
        :class="item.id === currentTopMenuId ? 'active' : ''"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "top-nav",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("common", ["currentTopMenuList", "currentTopMenuId"]),
  },
  created() {},
  methods: {
    jumpTo(row) {
      //console.log(row);
      this.$store.commit("common/setCurrentTopMenuId", row.id);
      if (row.url === "/") {
        this.$router.push("/");
      } else {
        this.$router.push(row.children[0].children[0].url);
      }
    },
  },
};
</script>

<style scoped>
.top-nav {
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}

.top-nav ul li {
  list-style: none;
  display: inline-block;
  margin: 5px 15px;
  cursor: pointer;
}
.top-nav ul li:hover {
  color: #14b314;
}
.top-nav ul li.active {
  color: #14b314;
}
</style>
