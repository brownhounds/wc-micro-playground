import { Component, type Template, html } from '@brownhounds/wc-micro';
import { component } from '@brownhounds/wc-micro/decorators';
import { router } from '../main';

@component({ tag: 'main-app' })
export class MainApp extends Component {
    template = (): Template => {
        return html`
            <ul>
                <li>
                    <button @click=${(): void => router.navigate('/')}>
                        Page 1
                    </button>
                </li>
                <li>
                    <button
                        @click=${(): void =>
                            router.navigate('/pages/123456/category/what-ever')}
                    >
                        Page 2
                    </button>
                </li>
                <li>
                    <button
                        @click=${(): void =>
                            router.navigate('/pages/something/something')}
                    >
                        Page 3
                    </button>
                </li>
                <li>
                    <button
                        @click=${(): void =>
                            router.navigate(
                                '/pages/123456/category/something/tag/123455'
                            )}
                    >
                        Page Nested Route
                    </button>
                </li>
                <li>
                    <button
                        @click=${(): void =>
                            router.navigate(
                                '/pages/123456/category/something/tag/123455/tag-name/aaron'
                            )}
                    >
                        Page Doubly Nested Route
                    </button>
                </li>
            </ul>
            <ui-router></ui-router>
        `;
    };
}
