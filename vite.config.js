import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    // for https to be tested on server
    /* base: 'https://lvmy.lc/',
    server: {
        host: 'lvmy.lc',
        https: {
          key: './key.pem',
          cert: './cert.pem',
        },
    }, */
    plugins: [
        react(),
        laravel({
            input: ['resources/css/app.css', 'resources/scss/app.scss', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
