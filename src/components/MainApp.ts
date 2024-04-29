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
                    <button @click=${(): void => router.navigate('/page/123')}>
                        Page 2
                    </button>
                </li>
                <li>
                    <button
                        @click=${(): void => router.navigate('/jkasdhjashdajd')}
                    >
                        Page 3
                    </button>
                </li>
            </ul>
            <ui-router></ui-router>
        `;
    };
}
