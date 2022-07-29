import http from 'http';
import koa from 'koa';
import bodyParser from 'koa-bodyparser'
import myType from './test.js';
import router from './router.js';
import {requestTracking} from './middlewares.js';

process.on('uncaughtException', (e) => console.error('uncaughtException', e));
process.on('unhandledRejection', (e) => console.error('unhandledRejection', e));

console.log(myType);

const app = new koa();
app.use(requestTracking);
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

export const server = http.createServer(app.callback());

server.listen(80, () => {
  console.log('http serving on port 80');
});
