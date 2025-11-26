import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import cloudflare from '@astrojs/cloudflare'
import remarkGfm from 'remark-gfm'
import remarkSmartypants from 'remark-smartypants'
import rehypeExternalLinks from 'rehype-external-links'

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), svelte(), react()],

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),

  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
    remarkPlugins: [remarkGfm, remarkSmartypants],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
        },
      ],
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },
  resolve: {
    // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
    // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
    alias: import.meta.env.PROD && {
        'react-dom/server': 'react-dom/server.edge',
    },
  },
})