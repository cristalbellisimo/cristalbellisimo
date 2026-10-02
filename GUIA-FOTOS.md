# Guia para editar textos, fotos e vídeos

## Onde alterar cada parte

| O que quer mudar | Arquivo ou pasta |
| --- | --- |
| Nome, descrição, fotos e vídeo de uma peça | `content/catalogo.js` |
| Fotos fixas do topo e das secções da página inicial | `content/catalogo.js`, em `SITE.imagens` |
| Conteúdo da secção Ateliê | `content/catalogo.js`, em `SITE.atelie` |
| Artigo, capa, texto, fotos e vídeos do blog | `content/blog.js` |
| Títulos e textos institucionais da página inicial | `index.html` (há versões PT, ES e EN) |
| Textos da lista do blog | `blog.html` |
| Textos de interface de um artigo do blog | `blog-post.html` |
| Política de privacidade e termos | `privacy.html` e `terms.html` |
| Cores e estilos partilhados | `assets/css/base.css` |

No uso normal, produtos e artigos são editados nos dois arquivos de `content/`.
Para trocar texto fixo da página inicial, procure o texto atual com `Ctrl+F` no
`index.html` e altere também as traduções correspondentes.

## Nomes e fotos

Para mudar o nome de uma peça, edite `titulo` nos três idiomas (`pt`, `es`, `en`)
em `content/catalogo.js`. A linha menor de materiais fica em `meta`; a descrição,
em `desc`. Para trocar a foto, coloque o novo arquivo em `images/pecas/` e
substitua o caminho em `fotos`. A primeira foto da lista é a principal; as demais
aparecem como miniaturas.

Use extensões reais e nomes simples, por exemplo `CB-0002-01.jpg`. No Windows,
ative **Exibir → Mostrar → Extensões de nomes de arquivos** para conferir se o
arquivo não ficou com extensão duplicada, como `.jpg.JPG`. O caminho no código
precisa ser exatamente igual ao nome do arquivo.

## Uma peça, um código

Cada joia recebe um código próprio, como `CB-0001`, `CB-0002` e assim por
diante. O código identifica a peça, não a pedra. Se houver três anéis de
ametista, cada anel terá seu próprio código e suas próprias fotos.

Use nomes curtos, sem espaços nem acentos:

```text
images/pecas/CB-0002-01.jpg
images/pecas/CB-0002-02.jpg
```

As fotos do blog usam o `slug` do artigo:

```text
images/blog/o-artista-e-a-harmonia-litica-capa.jpg
images/blog/o-artista-e-a-harmonia-litica-01.jpg
```

## Onde colocar as fotos

- **No computador:** copie os arquivos para `images/pecas/` ou `images/blog/`.
- **Pelo GitHub:** abra uma dessas pastas, escolha **Add file > Upload files**,
  selecione as fotos e confirme em **Commit changes**.
- **No Supabase:** envie a foto para um bucket público. Copie a URL pública HTTPS
  e use essa URL no lugar do caminho `images/...` no arquivo de conteúdo.

O site não precisa de chave do Supabase. Nunca coloque chaves secretas no código
ou no GitHub. Para um catálogo público, use somente URLs públicas HTTPS das fotos.

## Cadastrar as fotos de uma peça

Abra `content/catalogo.js`, encontre ou copie o bloco de uma peça e informe um
código novo. No campo `fotos`, coloque o caminho de cada foto na ordem desejada.
O código e os arquivos seguem juntos mesmo quando o nome da pedra se repete.

```js
{
  codigo: "CB-0002",
  fotos: [
    "images/pecas/CB-0002-01.jpg",
    "images/pecas/CB-0002-02.jpg"
  ],
  video: "",
  destaque: false,
  pt: { meta: "Prata 950 · Ametista", titulo: "Anel Ametista", desc: "Descrição da peça." },
  es: { meta: "Plata 950 · Amatista", titulo: "Anillo Amatista", desc: "Descripción de la pieza." },
  en: { meta: "Sterling 950 · Amethyst", titulo: "Amethyst Ring", desc: "Piece description." }
}
```

Se a foto estiver no Supabase, troque somente os caminhos na lista `fotos` pelas
URLs HTTPS públicas. O restante do cadastro não muda.

Para usar YouTube na peça, cole o link normal do vídeo em `video`. São aceitos
links `youtube.com/watch?v=...`, `youtu.be/...`, `/shorts/...` e `/embed/...`:

```js
video: "https://www.youtube.com/watch?v=AbCdEfGh123",
```

O botão de vídeo aparece junto às miniaturas; o player só é criado quando a
pessoa clica nele. O vídeo precisa permitir incorporação no YouTube. Vídeos
privados ou com incorporação desativada não funcionarão no site.

O mesmo tipo de link pode ser usado no campo `video` de `SITE.editorial`. Para
vídeos do ateliê, adicione um objeto à lista `itens`:

```js
{
  src: "https://youtu.be/AbCdEfGh123",
  legenda: { pt: "Polimento da peça", es: "Pulido de la pieza", en: "Polishing the piece" }
}
```

## Cadastrar fotos do blog

Em `content/blog.js`, use o `slug` que já identifica o artigo. `capa` recebe a
foto principal e `galeria` recebe as outras fotos ou vídeos. `capaVideo` pode
receber o caminho de um vídeo local ou um link YouTube. Na lista do blog, o
YouTube aparece como miniatura leve; o player abre dentro do artigo.

Para inserir mídia entre os parágrafos, comece um item de `corpo` com `@ ` e
depois escreva o caminho/URL. A legenda opcional vem depois de `|`:

Na série dividida sobre Harmonia Lítica, procure `storyParts` no fim de
`content/blog.js`. Cada parte já tem `capa: ""` e `galeria: []`; preencha a capa
com o caminho/URL da imagem e a galeria com os caminhos/URLs adicionais.

```js
capa: "images/blog/meu-artigo-capa.jpg",
capaVideo: "",
galeria: ["images/blog/meu-artigo-01.jpg", "https://youtu.be/AbCdEfGh123"],
// dentro do array corpo do idioma:
"@ https://www.youtube.com/watch?v=AbCdEfGh123 | Veja a peça em movimento",
```

## Conferir antes de publicar

Com o Node instalado, execute na pasta do site:

```powershell
node scripts/verificar-conteudo.cjs
```

O verificador alerta sobre códigos repetidos, caminhos locais que não existem e
URLs que não usam HTTPS. Links YouTube devem ser públicos ou não listados e
permitir incorporação. Depois, veja o site em `http://localhost:8123` e atualize
com `Ctrl+F5` se a versão anterior continuar aparecendo.
