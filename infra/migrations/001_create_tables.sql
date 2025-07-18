-- Migração inicial do banco de dados para o portal SeLigaNerd 2.0

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  author_id INTEGER REFERENCES users(id),
  published_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS media (
  id SERIAL PRIMARY KEY,
  url TEXT NOT NULL,
  alt TEXT,
  post_id INTEGER REFERENCES posts(id)
);

CREATE TABLE IF NOT EXISTS authorship_proofs (
  id SERIAL PRIMARY KEY,
  post_id INTEGER REFERENCES posts(id),
  proof_json JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);