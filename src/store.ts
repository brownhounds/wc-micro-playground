import { signal } from '@brownhounds/wc-micro/signal';

export const store = signal({
    name: 'Initial Name Goes Here',
    else: 1223,
});

(window as any).store = store.value;
(window as any).storeInstance = store;
