import { defineConfig, envField } from 'astro/config'
import preact from '@astrojs/preact'
import cloudflare from '@astrojs/cloudflare'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  env: {
    schema: {
      OPENAI_API_KEY: envField.string({ context: 'server', access: 'secret' }),
    },
  },
  site: 'https://wiki.luida-bar.com',
  base: '/',
  integrations: [preact()],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
})
