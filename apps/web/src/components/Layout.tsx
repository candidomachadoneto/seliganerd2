import { component$, Slot } from '@builder.io/qwik';
import { Header } from './Header';
import { Footer } from './Footer';

/**
 * Layout base utilizado por todas as páginas. Inclui o cabeçalho e rodapé.
 */
export const Layout = component$(() => {
  return (
    <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <main class="flex-1 container mx-auto p-4">
        <Slot />
      </main>
      <Footer />
    </div>
  );
});