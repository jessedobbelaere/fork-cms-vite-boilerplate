import * as path from 'path';
import legacy from '@vitejs/plugin-legacy';
import ViteRestart from 'vite-plugin-restart';
import checker from 'vite-plugin-checker';
import critical from 'rollup-plugin-critical';

const FORK_THEME_BASE_PATH = '/src/Frontend/Themes/' + path.basename(__dirname);

/**
 * @type {import('vite').UserConfig}
 */
export default ({ command }) => ({
    base: FORK_THEME_BASE_PATH + (command === 'serve' ? '/' : '/dist/'),
    build: {
        manifest: true,
        outDir: './dist/',
        rollupOptions: {
            input: {
                app: '/Core/Js/app.ts',
            },
        },
    },

    plugins: [
        // Generate a legacy bundle for non-ESM native browsers
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),

        // Reload the Vite server when our (twig) templates changed
        ViteRestart({
            reload: ['Core/Layout/Templates/**/*', 'Modules/**/*'],
        }),

        // A Vite plugin that can run TypeScript checks in worker thread.
        checker({ typescript: true }),

        // Generate critical css
        critical({
            criticalUrl: 'https://www.fork-cms.com', // Fill in your own website
            criticalBase: './dist/critical/',
            criticalPages: [
                { uri: '', template: 'home' },
                { uri: '/contact', template: 'page' },
            ],
            criticalConfig: {
                width: 1400, // max breakpoint in our theme
            },
        }),
    ],

    // We need to make a few tweaks to still serve from the local webserver
    server: {
        host: '0.0.0.0', // broadcast to all ipv4 addresses on the local machine (e.g. for Docker setups)
        cors: true,
        hmr: {
            host: 'localhost',
            protocol: 'ws',
        },
    },
});
