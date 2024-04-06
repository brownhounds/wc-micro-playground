import { Component, html, type Template } from '@brownhounds/wc-micro';
import { component, state } from '@brownhounds/wc-micro/decorators';
import { store } from '../store';

import css from './styles.scss?inline';
import css2 from './styles2.scss?inline';

type Test1Prop = {
    color: string;
    size: string;
};

@component({ tag: 'test-one', signals: [store], styles: [css, css2] })
export class Test1 extends Component<Test1Prop> {
    @state()
    state = {
        string: 'initial value',
    };

    run = (): void => {
        this.state.string = (Math.random() + 1).toString(36).substring(7);
        requestAnimationFrame(this.run);
    };

    onMount = (): void => {
        this.run();
    };

    template = (): Template => {
        return html`
            <div
                class="testing"
                style="border: 1px solid black; border-radius: 3px; padding: 10px; min-width: 150px"
            >
                <p><strong class="text">${store.value.name}</strong></p>
                <p>${this.state.string}</p>
                <div>
                    <p>${this.props.size}</p>
                    <p>${this.props.color}</p>
                </div>
            </div>
        `;
    };
}
