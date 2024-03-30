import { Component, type Template, html } from '@brownhounds/wc-micro';
import { component, state } from '@brownhounds/wc-micro/decorators';
import { store } from './store';

import './Test1';
import './Test2';

@component({ tag: 'main-app' })
export class MainApp extends Component {
    @state
    state = {
        color: 'red',
        size: 'big',
        proxy: {
            foo: 'ksdhfksfdh',
        },
    };

    onClick = (): void => {
        this.state.color = (Math.random() + 1).toString(36).substring(7);
        store.value.name = (Math.random() + 1).toString(36).substring(7);
    };

    // renderingCount = 0;

    // onRender = (): void => {
    //     console.log('main-app', this.renderingCount);
    //     this.renderingCount++;
    // };

    template = (): Template => {
        const { name } = store.value;
        const { color, size, proxy } = this.state;

        return html`
            <div
                style="border-radius: 3px; border: 2px solid hotpink; padding: 15px;"
            >
                <p>Proxy State: ${proxy.foo}</p>
                <span style="margin-bottom: 15px; display: block;">${name}</span
                ><button style="margin-bottom: 15px" @click=${this.onClick}>
                    Change Props
                </button>
                <div style="display: flex; column-gap: 20px;">
                    <test-one
                        .proxy="${proxy}"
                        .color="${color}"
                        .size="${size}"
                        .onClick="${this.onClick}"
                    />
                </div>
            </div>
        `;
    };
}
