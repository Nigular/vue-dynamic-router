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
        :class="son.id === currentLeftId ? 'active' : ''"
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
    return {
      currentLeftId: "",
    };
  },
  computed: {
    ...mapGetters("common", ["currentLeftMenuList"]),
  },
  created() {},
  watch: {
    "$route.path": {
      handler(value) {
        //匹配高亮菜单 (还需要解决首次触发问题)
        this.findActiveMenu(value);
      },
      immediate: true,
    },
  },
  methods: {
    jumpTo(row) {
      this.$router.push(row.url);
    },
    async findActiveMenu(path) {
      //由于左侧菜单列表是异步的，需要等待结果才能进行计算
      let leftMenuList = await this.checkCurrentLeftMenuList();
      //通过路由地址，匹配到高亮的左侧菜单
      function tree(newData) {
        for (let i in newData) {
          if (newData[i].url === path) {
            return newData[i]; //发现目标
          }
          if (newData[i].children && newData[i].children.length) {
            //如果有子菜单，继续递归
            let result = tree(newData[i].children);
            if (result) {
              if (result.level > 3) {
                //如果不是第3级路由，则返回他的父亲
                return newData[i];
              } else {
                return result.id;
              }
            } else {
              continue;
            }
          }
        }
      }
      let output = tree(leftMenuList.children);
      console.log(output);
      this.currentLeftId = output;
    },
    checkCurrentLeftMenuList() {
      let that = this;
      return new Promise(function (resolve) {
        let loopFind = setTimeout(() => {
          if (that.currentLeftMenuList === undefined) {
            loopFind();
          } else {
            //等找到了左侧列表，才结束循环，返回出去
            resolve(that.currentLeftMenuList);
          }
        }, 100);
      });
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
