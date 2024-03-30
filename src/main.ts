import { initApp } from '@brownhounds/wc-micro/app';

initApp({
    shadowDOM: false,
    entryPoint: () => import('./MainApp'),
});
