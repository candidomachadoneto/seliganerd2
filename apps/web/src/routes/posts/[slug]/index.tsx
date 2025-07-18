import { component$, useResource$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

/**
 * Loader para recuperar um post específico. Em ambiente real, fetch do banco.
 */
const usePost = (slug: string) => {
  return useResource$<{ title: string; content: string }>(async () => {
    // Busca fictícia – substituir por chamada a API/PostgreSQL.
    return {
      title: slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
      content:
        'Conteúdo de demonstração. Este texto representa o corpo do artigo. Em produção, ele virá do banco de dados e poderá incluir HTML ou Markdown renderizado.',
    };
  });
};

export default component$(() => {
  const loc = useLocation();
  const slug = loc.params.slug as string;
  const post = usePost(slug);
  return (
    <article class="prose dark:prose-invert max-w-none">
      <h1 class="text-3xl font-bold mb-4">{post.value?.title}</h1>
      <div>{post.value?.content}</div>
    </article>
  );
});