import { Component, html, type Template } from '@brownhounds/wc-micro';
import { component } from '@brownhounds/wc-micro/decorators';

import './Page2';

@component({ tag: 'page-one' })
export class Page1 extends Component {
    template = (): Template => {
        return html`<h1>Page 1</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                nemo ea cupiditate natus adipisci quis quibusdam, fugit aut
                vitae, dolorum similique officia explicabo sunt dolor odit!
                Possimus rem odio enim!
            </p>`;
    };
}
