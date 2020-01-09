/**
 * router文件夹用来存放路由，路由在index中汇总导出
 */

import Router from 'koa-router'
import Home from './home'

const router = new Router()

router.use(Home.routes(), Home.allowedMethods())
router.get('/', ctx => {
  ctx.body = 'webpack4 + typescript3 + nodejs'
})

export default router