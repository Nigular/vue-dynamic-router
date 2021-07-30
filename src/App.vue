<template>
  <div id="app">
    <top-nav></top-nav>

    <side-nav></side-nav>

    <div class="contain">
      <router-view />
    </div>
  </div>
</template>

<script>
import SideNav from "./components/side-nav.vue";
import TopNav from "./components/top-nav.vue";
export default {
  name: "app",
  components: { SideNav, TopNav },
  data() {
    return {};
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.contain {
  float: left;
  padding: 50px;
}
</style>
