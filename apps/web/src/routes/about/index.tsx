import { component$ } from '@builder.io/qwik';

/**
 * Página sobre explicando a motivação do projeto.
 */
export default component$(() => {
  return (
    <section class="space-y-4">
      <h1 class="text-3xl font-bold">Sobre o projeto</h1>
      <p>
        O SeLigaNerd 2.0 foi projetado para oferecer a melhor experiência possível aos
        usuários e aos algoritmos de busca. Construído com o framework Qwik 2, ele
        elimina a necessidade de hidratação e envia menos de 10 kB de JS no caminho
        crítico, garantindo time‑to‑interactive instantâneo. Além disso, integra
        funcionalidades de IA para geração e verificação de conteúdo.
      </p>
      <p>
        Este repositório demonstra uma estrutura monorepo organizada com Qwik,
        Cloudflare Workers, banco PostgreSQL e pipelines de IA. Sinta‑se à vontade
        para explorar e adaptar para suas necessidades.
      </p>
    </section>
  );
});