import Koa from 'koa'
import Router from './router'

const app = new Koa()
app.use(Router.routes()).use(Router.allowedMethods())

app.listen(8080)