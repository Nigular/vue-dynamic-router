const Koa = require("koa");
const app = new Koa();

//导入菜单树json
let { menus } = require("./menu-tree");

app.use(async (ctx, next) => {
  await next();
  if (ctx.request.path == "/api/menulist") {
    ctx.response.type = "json";
    ctx.response.body = menus;
  } else {
    ctx.response.body = "404 not fount";
  }
});

app.listen(3333, () => {
  console.log("This server is running at http://localhost:" + 3333);
});
