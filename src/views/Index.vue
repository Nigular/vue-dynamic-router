<template>
  <div class="home">首页</div>
</template>

<script type="text/javascript">
export default {
  name: "Index",
  data() {
    return {};
  },
  created() {
    this.$store.state.pageModel = "wrap";
  },
  beforeRouteLeave(to, from, next) {
    this.$store.state.pageModel = "normal";
    next();
  },
};
</script>
