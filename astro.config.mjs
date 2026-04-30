import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  output: 'static',
  base: isProd ? '/wo_wiki' : '/',
  integrations: [preact()],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
})
