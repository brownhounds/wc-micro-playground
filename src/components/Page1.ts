import { Component, html, type Template } from '@brownhounds/wc-micro';
import { component } from '@brownhounds/wc-micro/decorators';

@component({ tag: 'page-one' })
export class Page1 extends Component {
    template = (): Template => {
        return html`<h1>Page 2</h1>
            <button
                navigate=${{ path: '/pages/:pageId', params: { pageId: 2 } }}
            >
                sadikhasid
            </button>`;
    };
}
