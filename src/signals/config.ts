import { signal } from '@brownhounds/wc-micro/signal';

export const config = signal({
    componentCount: 100,
    signal: false,
    internalState: false,
    props: false,
});
