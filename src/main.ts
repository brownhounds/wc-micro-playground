import { initRouter } from '@brownhounds/wc-micro-router';
import { initApp } from '@brownhounds/wc-micro/app';

export const router = initRouter(
    [
        {
            path: '/',
            tag: 'page-one',
            component: (): Promise<any> => import('./components/Page1'),
        },
        {
            path: '/pages/:pageId',
            tag: 'page-one',
            component: (): Promise<any> => import('./components/Page1'),
        },
    ],
    {
        tag: 'ui-router',
    }
);

console.log(router);

initApp({
    entryPoint: () => import('./components/MainApp'),
});
