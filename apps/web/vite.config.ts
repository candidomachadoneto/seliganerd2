import { defineConfig } from 'vite';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { qwikVite } from '@builder.io/qwik/optimizer';

/**
 * Configuração do Vite para compilar a aplicação Qwik e Qwik City.
 */
export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite()],
    build: {
      outDir: 'dist',
      rollupOptions: {
        // Mantém a compatibilidade com Cloudflare Workers
        input: {
          main: 'src/entry.ssr.tsx',
        },
      },
    },
  };
});