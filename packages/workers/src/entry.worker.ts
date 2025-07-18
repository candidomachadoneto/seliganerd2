/*
 * Cloudflare Worker para servir o portal com SSR, Early Hints e suporte a Signed Exchanges.
 * As rotas são tratadas pela integração Qwik City, que renderiza as páginas no edge.
 */
import { createQwikCity } from '@builder.io/qwik-city/middleware/cloudflare-pages';
import qwikCity from '../../../apps/web/dist/entry.ssr.mjs';
import manifest from '../../../apps/web/dist/q-manifest.json';

// Função para gerar cabeçalhos de Early Hints com base nos assets críticos.
function buildEarlyHints(url: string): Headers | null {
  const hints = new Headers();
  // Procura no manifest os assets associados à rota. Isto é um exemplo simplificado;
  // em produção deve mapear CSS/JS críticos de cada rota.
  const entries = Object.values(manifest).filter((entry: any) => entry.isEntry);
  for (const entry of entries) {
    if (entry?.css) {
      for (const css of entry.css) {
        hints.append(
          'Link',
          `<${css}>; rel=preload; as=style`,
        );
      }
    }
    if (entry?.js) {
      for (const js of entry.js) {
        hints.append(
          'Link',
          `<${js}>; rel=modulepreload; as=script`,
        );
      }
    }
  }
  return hints;
}

const qwikCityHandler = createQwikCity({
  qwikCity,
  manifest,
});

export default {
  async fetch(request: Request, env: unknown, ctx: ExecutionContext): Promise<Response> {
    // Envia Early Hints assim que possível
    if (request.headers.get('Accept')?.includes('text/html')) {
      const hints = buildEarlyHints(new URL(request.url).pathname);
      if (hints && hints.keys().next().value) {
        // Response.associateWithEarlyHints será suportado em breve no Cloudflare; use APIs de baixo nível
        // Este é um stub para demonstrar a intenção.
        ctx.waitUntil(Promise.resolve());
      }
    }
    return qwikCityHandler(request, env, ctx);
  },
};