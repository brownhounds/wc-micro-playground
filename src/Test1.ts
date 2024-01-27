import { Component, html, type Template } from '@brownhounds/wc-micro';
import { component } from '@brownhounds/wc-micro/decorators';
import { store } from './store';

@component({ tag: 'test-one', signals: [store] })
export class Test1 extends Component {
    state = this.useState({
        string: 'initial value',
    });

    click = (): void => {
        this.state.string = (Math.random() + 1).toString(36).substring(7);
    };

    template = (): Template => {
        const { string } = this.state;
        const { name } = store.value;

        return html`
            <div
                style="border: 1px solid black; border-radius: 3px; padding: 10px; min-width: 150px"
            >
                <p><i>${name}</i></p>
                <p><strong>${string}</strong></p>
                <button @click="${this.click}">Run</button>
            </div>
        `;
    };
}
