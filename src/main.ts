import { initRouter } from '@brownhounds/wc-micro-router';
import { initApp } from '@brownhounds/wc-micro/app';

export const router = initRouter(
    [
        {
            path: '/',
            tag: 'page-one',
            component: (): Promise<unknown> => import('./components/Page1'),
        },
        {
            path: '/pages/:pageId/category/:categoryName',
            tag: 'page-two',
            component: (): Promise<unknown> => import('./components/Page2'),
            children: [
                {
                    outletId: 'tag-id-route',
                    path: '/tag/:tagId',
                    tag: 'tag-id',
                    component: (): Promise<unknown> =>
                        import('./components/TagId'),
                    children: [
                        {
                            outletId: 'tag-name-route',
                            path: '/tag-name/:tagName',
                            tag: 'tag-name',
                            component: (): Promise<unknown> =>
                                import('./components/TagName'),
                        },
                    ],
                },
            ],
        },
    ],
    {
        routerTag: 'ui-router',
        notFound: {
            tag: 'not-found',
            component: () => import('./components/NotFound'),
        },
    }
);

initApp({
    entryPoint: () => import('./components/MainApp'),
});
