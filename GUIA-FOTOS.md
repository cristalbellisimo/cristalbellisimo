# Fotos do site sem complicação

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

## Cadastrar fotos do blog

Em `content/blog.js`, use o `slug` que já identifica o artigo. `capa` recebe a
foto principal e `galeria` recebe as outras fotos. Para inserir uma foto no meio
do texto, comece um parágrafo com `@` seguido de espaço e do caminho ou URL. Para
incluir uma legenda, acrescente `|` e o texto da legenda.

Na série dividida sobre Harmonia Lítica, procure `storyParts` no fim de
`content/blog.js`. Cada parte já tem `capa: ""` e `galeria: []`; preencha a capa
com o caminho/URL da imagem e a galeria com os caminhos/URLs adicionais.

```js
capa: "images/blog/meu-artigo-capa.jpg",
galeria: ["images/blog/meu-artigo-01.jpg"],
```

## Conferir antes de publicar

Com o Node instalado, execute na pasta do site:

```powershell
node scripts/verificar-conteudo.cjs
```

O verificador alerta sobre códigos repetidos, caminhos locais que não existem e
URLs que não usam HTTPS. Depois, veja o site em `http://localhost:8123`.
