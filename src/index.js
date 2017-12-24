const Koa = require('koa')
const Router = require('koa-router')
const logger = require('koa-logger')

const app = new Koa()
const router = new Router()

const home = (ctx) => {
  ctx.body = 'russia'
}
const ping = (ctx) => {
  ctx.body = 'pong'
}
const pong = (ctx) => {
  ctx.body = 'ping'
}

router
  .get('/', home)
  .get('/ping', ping)
  .get('/pong', pong)

app
  .use(logger())
  .use(router.routes())

if (!module.parent) {
  app.listen(3000)
}

module.exports = app
