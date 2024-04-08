import { initApp } from '@brownhounds/wc-micro/app';
import reset from './scss/reset.scss?inline';

initApp({
    cssReset: reset,
    entryPoint: () => import('./components/MainApp'),
});
