import { initRouter } from '@brownhounds/wc-micro-router';
import { initApp } from '@brownhounds/wc-micro/app';

export const router = initRouter(
    [
        {
            path: '/',
            component: {
                tag: 'page-one',
                import: (): Promise<unknown> => import('./components/Page1'),
            },
        },
        {
            path: '/page/:pageId',
            component: {
                tag: 'page-one',
                import: (): Promise<unknown> => import('./components/Page1'),
            },
        },
    ],
    {
        routerTag: 'ui-router',
        notFound: {
            tag: 'not-found',
            import: () => import('./components/NotFound'),
        },
    }
);

(window as any).router = router;

initApp({
    entryPoint: () => import('./components/MainApp'),
});
