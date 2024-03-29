import { defineConfig } from 'vite';
import ViteRestart from 'vite-plugin-restart';

export default defineConfig({
    build: {
        sourcemap: 'inline',
    },
    plugins: [
        ViteRestart({
            restart: ['package-lock.json'],
        }),
    ],
});
