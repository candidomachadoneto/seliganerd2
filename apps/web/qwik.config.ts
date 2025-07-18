import { defineConfig } from '@builder.io/qwik';
import { qwikCity } from '@builder.io/qwik-city/vite';
import type { UserConfig } from 'vite';

/**
 * Configuração do Qwik para a aplicação web.
 * Habilita streaming de SSR e integra o plugin Qwik City para rotas.
 */
export default defineConfig(() => {
  return {
    plugins: [qwikCity()],
    ssr: {
      streaming: true,
    },
  } as unknown as UserConfig;
});