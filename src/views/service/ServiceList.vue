<template>
  <div>
    <h3>服务商列表</h3>
    <div class="link">
      <router-link
        to="/service/ServiceEdit"
        v-permission="'service:service:edit'"
        >编辑服务商</router-link
      >
      <router-link
        to="/service/serviceDetail"
        v-permission="'service:service:detail'"
        >服务商详情</router-link
      >
      <button v-permission="'service:service:renewal'">续期</button>
      <button v-permission="'service:service:agreement'">终止协议</button>
    </div>
  </div>
</template>

<style scoped>
.link a {
  margin: 20px;
}
.link button {
  margin: 20px;
}
</style>
