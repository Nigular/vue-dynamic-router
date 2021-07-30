module.exports = {
  devServer: {
    disableHostCheck: false,
    port: 8081,
    //把端口号3333里的/api接口，代理到8081端口
    proxy: {
      "/api": {
        target: "http://localhost:3333",
      },
    },
  },
};
