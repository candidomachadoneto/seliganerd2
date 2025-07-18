import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

/**
 * Página inicial do portal. Apresenta um resumo e links para outras seções.
 */
export default component$(() => {
  return (
    <section class="space-y-4">
      <h1 class="text-4xl font-bold">Bem‑vindo ao SeLigaNerd 2.0</h1>
      <p>
        Este portal foi reimaginado para ser ultrarrápido e centrado em IA, utilizando o
        framework Qwik 2 e diversas otimizações modernas.
      </p>
      <div class="space-x-4">
        <Link href="/posts" class="text-blue-600 hover:underline">
          Ver matérias
        </Link>
        <Link href="/about" class="text-blue-600 hover:underline">
          Sobre o projeto
        </Link>
      </div>
    </section>
  );
});