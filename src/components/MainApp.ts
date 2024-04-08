import { Component, type Template, html } from '@brownhounds/wc-micro';
import { component, state } from '@brownhounds/wc-micro/decorators';
import { store } from '../signals/signal';
import { config } from '../signals/config';

import css from './main-app.scss?inline';

import './Card';
import './Controls';

@component({ tag: 'main-app', signals: [store, config], styles: [css] })
export class MainApp extends Component {
    @state()
    state = {
        color: 'color',
        size: 'size',
    };

    onMount = (): void => {
        this.run();
    };

    run = (): void => {
        if (config.value.props) {
            this.state.color = (Math.random() + 1).toString(36).substring(7);
            this.state.size = (Math.random() + 1).toString(36).substring(7);
        }

        if (config.value.signal) {
            store.value.name = (Math.random() + 1).toString(36).substring(7);
        }

        requestAnimationFrame(this.run);
    };

    template = (): Template => {
        return html`
            <app-controls />
            <div class="main-wrapper">
                ${Array.from(Array(config.value.componentCount).keys()).map(
                    (index) =>
                        html`<test-one
                            .index=${index}
                            .color=${this.state.color}
                            .size=${this.state.size}
                        />`
                )}
            </div>
        `;
    };
}
