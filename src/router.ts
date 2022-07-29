import Router from '@koa/router';
import asyncLocalStorage from './asyncStorage.js';

const router = new Router();

router.get('/healthcheck', (ctx) => {
  ctx.body = { version: 0 };
});

router.post('/echo', (ctx) => {
  console.log(asyncLocalStorage.getStore().transactionId);
  ctx.body = ctx.request.body;
})

export default router;
