import { defineConfig } from 'vite';
import ViteRestart from 'vite-plugin-restart';

export default defineConfig({
    plugins: [
        ViteRestart({
            restart: ['package-lock.json'],
        }),
    ],
});
