# Cristal Bellísimo — site

Site institucional e catálogo do ateliê Cristal Bellísimo.
Publicado por GitHub Pages a partir deste repositório.

---

## Onde fica cada coisa

| Você quer mexer em... | Abra este arquivo |
|---|---|
| **Peças do catálogo** (fotos, textos, destaque) | `content/catalogo.js` |
| **Artigos do blog** | `content/blog.js` |
| **Cores e tipografia da marca** | `assets/css/base.css` (as cores estão no topo) |
| Layout da página inicial | `index.html` |
| Layout do blog | `blog.html` / `blog-post.html` |
| Páginas legais | `privacy.html` / `terms.html` |
| Fotografias | `images/` |
| Documentação e decisões | `docs/` |
| O que ainda depende de você | `MANUAL-CHANGES.md` |

> Os dois arquivos em `content/` são os únicos que você precisa abrir para
> mexer no conteúdo do dia a dia. Eles são comentados em português e trazem
> um exemplo pronto para copiar.

---

## Regras da casa

- **Cores da marca vivem num lugar só:** `assets/css/base.css`, no topo.
  Mudar o azul do site inteiro = mudar `--p` uma vez.
- **`index.html` tem que ficar na raiz** — é o arquivo que o GitHub Pages procura.
- **Todos os caminhos são relativos** (`images/...`, não `/images/...`), porque o
  site é servido numa subpasta (`/cristalbellisimo/`). Caminho começando com `/` quebra.
- **Nada de chaves ou senhas neste repositório.** Ele é público.
- **Idiomas:** hoje PT/ES/EN. Para acrescentar o francês, veja o bloco `IDIOMAS`
  no `index.html` — é uma linha, depois que os textos existirem.

---

## Testar no seu computador

Existe um servidor de teste em `.claude/preview-server.cjs`:

```
node .claude/preview-server.cjs
```

Depois abra `http://localhost:8123` no navegador.

---

## Estrutura

```
/
├── index.html            página inicial
├── blog.html             lista de artigos
├── blog-post.html        leitura de um artigo
├── privacy.html          política de privacidade (LGPD)
├── terms.html            termos de uso
│
├── content/              ← O CONTEÚDO QUE VOCÊ EDITA
│   ├── catalogo.js       peças, fotos e textos em 3 idiomas
│   └── blog.js           artigos
│
├── assets/css/base.css   cores, tipografia, cabeçalho, seletor de idioma
├── images/               fotografias
├── docs/                 documentação e registro de decisões
└── archive/              material antigo — nada é apagado, só sai do caminho
```
