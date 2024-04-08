import { signal } from '@brownhounds/wc-micro/signal';

export const store = signal({
    name: 'Signal Value',
});

(window as any).store = store.value;
(window as any).storeInstance = store;
