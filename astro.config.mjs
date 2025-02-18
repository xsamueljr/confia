// @ts-check
import { defineConfig } from 'astro/config';
import { IS_PROD } from './src/env';

// https://astro.build/config
export default defineConfig({
    site: IS_PROD ? 'https://xsamueljr.github.io' : undefined,
    base: IS_PROD ? 'confia' : undefined
});
