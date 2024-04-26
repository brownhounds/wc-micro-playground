import { Component, html, type Template } from '@brownhounds/wc-micro';
import { component } from '@brownhounds/wc-micro/decorators';

@component({ tag: 'tag-name' })
export class TagName extends Component {
    template = (): Template => {
        return html`<h1>TagName</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
                hic quas optio nobis odit, debitis aut, veniam aspernatur
                ratione necessitatibus repellat consectetur repellendus rem,
                ipsam laboriosam laborum similique numquam! Repudiandae!
            </p>`;
    };
}
