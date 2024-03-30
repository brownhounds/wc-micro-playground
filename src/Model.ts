import { Component, html, type Template } from '@brownhounds/wc-micro';
import { component, state } from '@brownhounds/wc-micro/decorators';
import { ref } from '@brownhounds/wc-micro/utilities';

@component({ tag: 'vue-model' })
export class Model extends Component {
    @state
    state = {
        model: ref(''),
    };

    onClick = (): void => {
        this.state.model.current = (Math.random() + 1)
            .toString(36)
            .substring(7);
    };

    onRender = (): void => {
        console.log(this.state);
    };

    template = (): Template => {
        const { model } = this.state;

        return html`
            <div>
                <p>${model.current}</p>
            </div>
            <div>
                <input type="text" ~value="${model}" />
            </div>
            <div><button @click="${this.onClick}">Change Model</button></div>
        `;
    };
}
