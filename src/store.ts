import { makeSignal, useSignal } from '@brownhounds/wc-micro';

export const store = makeSignal({
    name: 'Initial Name Goes Here',
    else: 1223,
});

(window as any).store = useSignal(store);
(window as any).storeInstance = store;
