import { Component, type Template, html } from '@brownhounds/wc-micro';
import { component } from '@brownhounds/wc-micro/decorators';

import './Test1';
import './Test2';
import { store } from './store';

@component({ tag: 'main-app', signals: [store] })
export class MainApp extends Component {
    state = this.useState({
        nested: {
            value: 'foo',
        },
    });

    onRender = (): void => {};

    onClick = (): void => {
        this.state.nested;
        store.value.name = (Math.random() + 1).toString(36).substring(7);
    };

    template = (): Template => {
        const { name } = store.value;

        return html`
            <div
                style="border-radius: 3px; border: 2px solid hotpink; padding: 15px;"
            >
                <span style="margin-bottom: 15px; display: block;">${name}</span
                ><button style="margin-bottom: 15px" @click=${this.onClick}>
                    Change Store Value
                </button>
                <br />
                <div style="display: flex; column-gap: 20px;">
                    <test-one></test-one>
                    <test-one></test-one>
                    <test-one></test-one>
                    <test-one></test-one>
                    <test-one></test-one>
                </div>
            </div>
        `;
    };
}
