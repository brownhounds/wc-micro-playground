import { Component, type Template, html } from '@brownhounds/wc-micro';
import { component, state } from '@brownhounds/wc-micro/decorators';
import { store } from './store';

import './testing/Test1';

@component({ tag: 'main-app', signals: [store] })
export class MainApp extends Component {
    @state()
    state = {
        color: 'red',
        size: 'big',
    };

    count = Array.from(Array(500).keys());

    onMount = (): void => {
        this.run();
    };

    run = (): void => {
        this.state.color = (Math.random() + 1).toString(36).substring(7);
        this.state.size = (Math.random() + 1).toString(36).substring(7);
        store.value.name = (Math.random() + 1).toString(36).substring(7);
        requestAnimationFrame(this.run);
    };

    template = (): Template => {
        return html`
            <div
                style="border-radius: 3px; border: 2px solid hotpink; padding: 15px;"
            >
                <p>${store.value.name}</p>
                <div style="display: flex; gap: 20px; flex-wrap: wrap">
                    ${this.count.map(
                        () =>
                            html`<test-one
                                .color=${this.state.color}
                                .size=${this.state.size}
                            />`
                    )}
                </div>
            </div>
        `;
    };
}
