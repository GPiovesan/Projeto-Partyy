const koa = require('koa');
const server = new koa();

const static = require('koa-static');

const Router = require('koa-router');
const route = new Router();

const views = require('koa-views');

route.get('/', (ctx, next) => {
  return ctx.render('./index.html', {
    name: 'Alex'
  })
});

server.use(views('./views', {map: {html: 'nunjucks'}}));
server.use(route.routes());
server.use(static('./public'));


server.listen(1985);