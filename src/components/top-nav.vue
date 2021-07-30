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
    return {
      currentTopMenuId: "",
    };
  },
  computed: {
    ...mapGetters("common", ["currentTopMenuList"]),
  },
  watch: {
    "$route.path": {
      handler(value) {
        //匹配高亮菜单
        this.findActiveMenu(value);
      },
      immediate: true,
    },
  },
  created() {},
  methods: {
    jumpTo(row) {
      if (row.url === "/") {
        this.$router.push("/");
      } else {
        this.$router.push(row.children[0].children[0].url);
      }
    },
    async findActiveMenu(path) {
      //由于顶部菜单列表是异步的，需要等待结果才能进行计算
      let topMenuList = await this.checkCurrentTopMenuList();
      //记录整个路由在树节点里的链路
      let treeLink = [];
      /**
       * @param tree 树结构菜单
       * @param func 判断找到节点的条件
       * @description 在树结构里找节点
       */
      function treeFind(tree, func) {
        for (const data of tree) {
          if (func(data)) {
            treeLink.push(data); //把最终节点加入链路
            return data;
          }
          if (data.children && data.children.length) {
            const res = treeFind(data.children, func);
            if (res) {
              treeLink.push(data); //把每个结果的父节点加入链路
              return res;
            }
          }
        }
        return null;
      }
      for (let k = 0; k < topMenuList.length; k++) {
        let output = treeFind(topMenuList[k].children, function (data) {
          return data.url === path;
        });
        if (output) {
          //如果找到了这个树下拥有这个节点，则区顶级节点的路由为topId
          this.currentTopMenuId = topMenuList[k].id;
          //把顶级也加到链路
          treeLink.push(topMenuList[k]);
          treeLink = treeLink.map(({ id, name, level, url }) => {
            return { id, name, level, url };
          });
          console.log(treeLink);
          this.$store.commit("common/setCurrentRouterTreeLink", treeLink);
          return;
        }
      }
    },
    checkCurrentTopMenuList() {
      let that = this;
      return new Promise(function (resolve) {
        let loopFind = setTimeout(() => {
          if (that.currentTopMenuList === undefined) {
            loopFind();
          } else {
            //等找到了顶部列表，才结束循环，返回出去
            resolve(that.currentTopMenuList);
          }
        }, 100);
      });
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
