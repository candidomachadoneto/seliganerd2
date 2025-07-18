import { component$, Slot } from '@builder.io/qwik';
import { Layout } from '../components/Layout';

/**
 * Envolve cada rota com o layout principal.
 */
export default component$(() => {
  return (
    <Layout>
      <Slot />
    </Layout>
  );
});