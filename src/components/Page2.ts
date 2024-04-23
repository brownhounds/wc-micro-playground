import { Component, html, type Template } from '@brownhounds/wc-micro';
import { component } from '@brownhounds/wc-micro/decorators';
import { router } from '../main';

@component({ tag: 'page-two' })
export class Page2 extends Component {
    routeParams = router.activeRoute.params;

    template = (): Template => {
        return html`<h1>
                Page 2 <small>${this.routeParams.pageId}</small>
                <small>${this.routeParams.categoryName}</small>
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum est
                labore nulla! Molestias harum eaque quo laudantium, velit fuga
                delectus, laboriosam illum necessitatibus officiis vero neque
                soluta cumque aspernatur a. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Debitis eligendi reprehenderit
                consequuntur ea unde quaerat voluptates, quos explicabo libero
                ratione ad. Quidem consectetur odit quibusdam cumque quis
                asperiores laborum id.
            </p>`;
    };
}
