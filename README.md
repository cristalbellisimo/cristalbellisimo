# Cristal Bellísimo — site

Site institucional e catálogo do ateliê Cristal Bellísimo.
Publicado por GitHub Pages a partir deste repositório.

---

## Onde fica cada coisa

| Você quer mexer em... | Abra este arquivo |
| --- | --- |
| **Peças do catálogo** (fotos, textos, destaque) | `content/catalogo.js` |
| **Artigos do blog** | `content/blog.js` |
| **Guia para trocar textos, fotos e vídeos** | `GUIA-FOTOS.md` |
| **Verificar fotos e IDs** | `node scripts/verificar-conteudo.cjs` |
| **Cores, tipografia e componentes compartilhados** | `assets/css/base.css` (tokens no início do arquivo) |
| **Layout e conteúdo institucional da página inicial** | `index.html` |
| **Layout da lista e do artigo do blog** | `blog.html` / `blog-post.html` |
| **Preset secundário com fundo azul** | `presets/azul.html` |
| Páginas legais | `privacy.html` / `terms.html` |
| Fotografias e vídeos | `images/` (arquivos locais; referências nos arquivos de conteúdo) |
| Origem externa das fontes tipográficas | Google Fonts, declaradas nas páginas HTML |

> Os dois arquivos em `content/` são os únicos que você precisa abrir para
> mexer no conteúdo do dia a dia. Eles são comentados em português e trazem
> um exemplo pronto para copiar.

---

## Regras da casa

- **Tokens visuais compartilhados vivem em** `assets/css/base.css`.
  O padrão do projeto é verde-floresta (`--p: #24483b`), com detalhes sage e
  dourados. O preset azul fica em `presets/azul.html`. Estilos exclusivos de
  uma página ficam no bloco `<style>` do respectivo HTML.
- **`index.html` tem que ficar na raiz** — é o arquivo que o GitHub Pages procura.
- **Todos os caminhos são relativos** (`images/...`, não `/images/...`), porque o
  site é servido numa subpasta (`/cristalbellisimo/`). Caminho começando com `/` quebra.
- **Nada de chaves ou senhas neste repositório.** Ele é público.
- **Idiomas:** hoje PT/ES/EN. Para acrescentar o francês, veja o bloco `IDIOMAS`
  no `index.html` — é uma linha, depois que os textos existirem.

---

## Testar no seu computador

Na raiz do projeto, inicie o servidor local sem dependências externas:

```powershell
node scripts/preview-server.cjs
```

Depois abra `http://localhost:8123` no navegador. Encerre com `Ctrl+C`.

## Preset alternativo

O tema verde-floresta é o padrão. Com o servidor local ativo, abra
`http://localhost:8123/presets/azul.html` para comparar a segunda opção.

## Origem e manutenção do conteúdo

- As páginas HTML carregam `content/catalogo.js` e `content/blog.js`; esses são
  os arquivos ativos para produtos e artigos.
- As imagens e os vídeos são arquivos locais em `images/`. Os caminhos usados
  no site são registrados em `content/catalogo.js` e `content/blog.js`.
- As peças usam códigos únicos, sem depender do nome da pedra. Consulte
  `GUIA-FOTOS.md` para usar pastas locais/GitHub ou URLs públicas do Supabase.
- Antes de publicar, confirme que os arquivos de mídia citados existem e que
  textos, direitos de uso e dados de origem das pedras foram verificados pelo
  ateliê. O site não deve apresentar origem geográfica como certificada sem
  essa confirmação.

---

## Estrutura

```text
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
├── GUIA-FOTOS.md         envio e organização simples de fotos
│
├── assets/css/base.css   cores, tipografia, cabeçalho, seletor de idioma
├── assets/js/media.js    links e players de vídeo (YouTube e arquivos locais)
├── presets/
│   └── azul.html         tema alternativo
├── scripts/
│   ├── preview-server.cjs
│   └── verificar-conteudo.cjs
└── images/
  ├── blog/
  ├── colecoes/
  └── pecas/
```
