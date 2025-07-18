import { component$ } from '@builder.io/qwik';

/**
 * Rodapé simples com direitos autorais.
 */
export const Footer = component$(() => {
  const year = new Date().getFullYear();
  return (
    <footer class="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-4">
      <div class="container mx-auto text-center text-sm">
        © {year} SeLigaNerd 2.0. Todos os direitos reservados.
      </div>
    </footer>
  );
});