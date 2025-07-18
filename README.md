# SeLigaNerd 2.0

Este repositório contém o código‑fonte, assets e infraestrutura do portal **SeLigaNerd 2.0**. O objetivo é fornecer um site ultrarrápido e AI‑first, seguindo as recomendações técnicas do relatório SeLigaNerd 2.0.

## Visão geral

- **Framework:** Qwik 2 com resumability, eliminando a fase de hidratação e reduzindo o JavaScript no caminho crítico para menos de 10 kB【479915619702514†L156-L164】.
- **Otimizações:** Implementações de **HTTP 103 Early Hints**【479915619702514†L428-L446】, **Speculation Rules API**【479915619702514†L462-L499】 e **Signed Exchanges v2**【479915619702514†L526-L552】 para acelerar carregamento e navegação.
- **Infraestrutura:** Deploy global em Cloudflare Workers com Bun 2 para desenvolvimento local, banco PostgreSQL acelerado via Hyperdrive e armazenamento de assets em Pages + KV.
- **Conteúdo IA:** Pastas de pipelines de IA demonstram como gerar artigos Markdown com RAG e verificações factuais.
- **Critical path:** Projeto planejado para carregar menos de 10 kB de JS no caminho crítico e atingir TTI < 100 ms【479915619702514†L215-L218】.

## Instalação local

1. **Pré‑requisitos:** instale [Bun](https://bun.sh/), Node.js e o `wrangler` CLI da Cloudflare.
2. Clone este repositório e instale as dependências:

   ```sh
   bun install
   ```

3. Inicie o servidor de desenvolvimento do frontend:

   ```sh
   bun run dev
   ```

   O site estará disponível em `http://localhost:3000`.

## Estrutura

- `apps/web` – código do frontend em Qwik 2.
- `packages/workers` – Worker de SSR/edge com Early Hints e suporte a SXG.
- `infra` – arquivos de infraestrutura (wrangler, migrações SQL).
- `ai-pipelines` – exemplos de pipelines de IA.
- `.github/workflows` – configuração de CI/CD via GitHub Actions.

## Deploy

A configuração `wrangler.toml` e os workflows automatizam o deploy para Cloudflare Pages e Workers. Ajuste as credenciais da sua conta no arquivo de configuração antes de rodar:

```sh
bun run deploy
```
