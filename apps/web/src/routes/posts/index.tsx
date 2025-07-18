import { component$, useResource$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

/**
 * Loader para recuperar lista de posts. Em produção, isso pode acessar um endpoint
 * ou o banco PostgreSQL via API. Aqui retornamos dados estáticos como exemplo.
 */
export const usePosts = () => {
  return useResource$<Array<{ id: number; title: string; slug: string; excerpt: string }>>(
    async () => {
      return [
        {
          id: 1,
          title: 'Artigo Exemplo',
          slug: 'artigo-exemplo',
          excerpt: 'Este é um artigo de exemplo demonstrando a estrutura do portal.',
        },
      ];
    },
  );
};

/**
 * Lista de matérias com links para cada artigo.
 */
export default component$(() => {
  const posts = usePosts();
  return (
    <section>
      <h1 class="text-3xl font-bold mb-4">Matérias</h1>
      <div>
        {posts.value?.map((post) => (
          <article key={post.id} class="mb-6">
            <h2 class="text-xl font-semibold">
              <Link href={`/posts/${post.slug}`} class="text-blue-600 hover:underline">
                {post.title}
              </Link>
            </h2>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
});