import { AsyncLocalStorage } from 'node:async_hooks';

type Store = {
  transactionId: string
}

const asyncLocalStorage = new AsyncLocalStorage<Store>();
export default asyncLocalStorage;
