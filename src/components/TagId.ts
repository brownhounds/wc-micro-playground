import { Component, html, type Template } from '@brownhounds/wc-micro';
import { component } from '@brownhounds/wc-micro/decorators';

@component({ tag: 'tag-id' })
export class TagId extends Component {
    template = (): Template => {
        return html`<h1>TagID</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
                hic quas optio nobis odit, debitis aut, veniam aspernatur
                ratione necessitatibus repellat consectetur repellendus rem,
                ipsam laboriosam laborum similique numquam! Repudiandae!
            </p>
            <outlet-element id="tag-name-route" />`;
    };
}
