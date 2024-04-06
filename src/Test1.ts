import { Component, html, type Template } from '@brownhounds/wc-micro';
import { component, state } from '@brownhounds/wc-micro/decorators';
import { ref } from '@brownhounds/wc-micro/utilities';
import { store } from './store';

type Test1Prop = {
    color: string;
    size: string;
    proxy: { foo: string };
    onClick: () => void;
};

@component({ tag: 'test-one', signals: [store] })
export class Test1 extends Component<Test1Prop> {
    @state()
    state = {
        string: 'initial value',
    };

    ref = ref<HTMLElement>();

    click = (): void => {
        this.state.string = (Math.random() + 1).toString(36).substring(7);
    };

    changeProp = (): void => {
        this.props.onClick();
        // this.props.proxy.foo = (Math.random() + 1).toString(36).substring(7);
        // this.state.string = (Math.random() + 1).toString(36).substring(7);
        // store.value.name = (Math.random() + 1).toString(36).substring(7);
    };

    renderingCount = 0;

    onRender = (triggers?: string[]): void => {
        console.log(
            'test-one',
            triggers,
            this.renderingCount,
            performance.now()
        );
        this.renderingCount++;
    };

    template = (): Template => {
        const { string } = this.state;
        const { color, size } = this.props;

        return html`
            <div
                style="border: 1px solid black; border-radius: 3px; padding: 10px; min-width: 150px"
            >
                <p><strong>${string}</strong></p>
                <p><strong>${store.value.name}</strong></p>
                <div>
                    <p>${size}</p>
                    <p>${color}</p>
                </div>
                <button @click="${this.click}">Run</button>
                <button @click="${this.changeProp}">Set value on prop</button>
            </div>
        `;
    };
}
