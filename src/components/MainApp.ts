import { Component, type Template, html } from '@brownhounds/wc-micro';
import { component } from '@brownhounds/wc-micro/decorators';

@component({ tag: 'main-app' })
export class MainApp extends Component {
    template = (): Template => {
        return html`<h1>Main App</h1>`;
    };
}
