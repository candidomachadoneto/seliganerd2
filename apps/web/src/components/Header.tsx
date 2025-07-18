import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

/**
 * Cabeçalho principal do site.
 */
export const Header = component$(() => {
  return (
    <header class="bg-primary text-white dark:bg-primary-dark">
      <nav class="container mx-auto flex gap-4 p-4">
        <Link href="/" class="font-bold text-lg">
          SeLigaNerd
        </Link>
        <Link href="/posts" class="hover:underline">
          Matérias
        </Link>
        <Link href="/about" class="hover:underline">
          Sobre
        </Link>
      </nav>
    </header>
  );
});