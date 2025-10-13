// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import { loadEnv } from "vite";
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

const { SECRET_SANITY_TOKEN } = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), "");

export default defineConfig({
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sanity({
      projectId: "6yzu93tt",
      dataset: 'production',
      useCdn: false,
      token: SECRET_SANITY_TOKEN
    }),
    react()
  ]
});