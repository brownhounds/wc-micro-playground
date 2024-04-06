import { initApp } from '@brownhounds/wc-micro/app';
import reset from './reset.scss?inline';

initApp({
    cssReset: reset,
    entryPoint: () => import('./MainApp'),
});
