import Router from 'koa-router'

const router = new Router({
  prefix: '/home'
})

router.get('/', ctx => {
  ctx.body = 'home'
})

export default router