import asyncLocalStorage from './asyncStorage.js';
import Koa from 'koa';
import { nanoid } from 'nanoid';

export const requestTracking = async (ctx: Koa.BaseContext, next: () => Promise<any>) => {
  const store = { transactionId: nanoid() };
  asyncLocalStorage.enterWith(store);
  await next();
};
