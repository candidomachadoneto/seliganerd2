import { renderToReadableStream } from '@builder.io/qwik/server';
import { Root } from '@builder.io/qwik-city';

/**
 * Ponto de entrada para SSR. Exporta uma função async que recebe as opções de
 * renderização do Qwik City e devolve um stream de HTML.
 */
export default async function (opts: any) {
  const stream = await renderToReadableStream(<Root />, opts);
  return {
    stream,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  };
}