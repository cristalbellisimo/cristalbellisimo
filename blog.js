/* ============================================================================
   CRISTAL BELLÍSIMO — BLOG
   ----------------------------------------------------------------------------
   Este é o ÚNICO ficheiro que precisa de editar para publicar um artigo novo
   no blog (fotos e vídeos do trabalho, histórias do ateliê, bastidores).

   COMO ADICIONAR UM ARTIGO NOVO:
     1. Copie um bloco inteiro de post   {  ...  },   (do { à vírgula final)
     2. Cole-o dentro dos [ ]  — o mais recente pode ficar em qualquer posição,
        a ordem mostrada no site é sempre pela data (mais recente primeiro).
     3. Troque slug, data, capa e os textos.

   Cada post tem:
     slug:      um "nome-de-url" curto, sem espaços/acentos (ex.: "novo-anel-esmeralda").
                É o que aparece no endereço: blog-post.html?slug=novo-anel-esmeralda
     data:      formato AAAA-MM-DD (ex.: "2026-08-01") — controla a ordem mostrada.
     capa:      foto de capa do artigo (aparece na lista do blog). Deixe "" se usar capaVideo.
     capaVideo: (opcional) um vídeo em vez de foto de capa. Deixe "" se não tiver.
     galeria:   (opcional) mais fotos/vídeos do trabalho, mostrados no fim do artigo.
     pt/es/en:
       titulo: título do artigo
       resumo: 1-2 frases que aparecem na lista do blog
       corpo:  o texto do artigo, em parágrafos separados por vírgula
   ============================================================================ */

window.BLOG = {
  posts: [

    {
      slug: "bastidores-do-atelie",
      data: "2026-07-27",
      capa: "images/colecoes/flor-folha-1.jpg",
      capaVideo: "",
      galeria: [],
      pt: {
        titulo: "Bastidores do Ateliê",
        resumo: "Um primeiro registo do processo por trás de cada peça — fotos e vídeos direto do ateliê.",
        corpo: [
          "Este espaço vai reunir o processo por trás de cada peça: fotos do trabalho em andamento, vídeos do ateliê e as histórias que não cabem numa descrição de catálogo.",
          "Em breve, mais fotos e vídeos do dia a dia do ofício."
        ]
      },
      es: {
        titulo: "Detrás de Escena del Atelier",
        resumo: "Un primer registro del proceso detrás de cada pieza — fotos y videos directo del atelier.",
        corpo: [
          "Este espacio reunirá el proceso detrás de cada pieza: fotos del trabajo en curso, videos del atelier y las historias que no caben en una descripción de catálogo.",
          "Pronto, más fotos y videos del día a día del oficio."
        ]
      },
      en: {
        titulo: "Behind the Scenes at the Atelier",
        resumo: "A first record of the process behind every piece — photos and videos straight from the atelier.",
        corpo: [
          "This space will gather the process behind every piece: photos of work in progress, videos from the atelier, and the stories that don't fit in a catalogue description.",
          "More photos and videos from the daily craft, coming soon."
        ]
      }
    }

    /* 👆 PARA UM ARTIGO NOVO: ponha uma vírgula depois do } acima e cole aqui o
       bloco de exemplo abaixo (tire a barra e os asteriscos).

    ,{
      slug: "titulo-curto-sem-espacos",
      data: "2026-08-01",
      capa: "images/blog/NOVA-CAPA.jpg",
      capaVideo: "",
      galeria: [
        "images/blog/foto-extra-1.jpg",
        "images/blog/video-extra.mp4"
      ],
      pt: { titulo: "Título do Artigo", resumo: "Resumo curto.", corpo: ["Primeiro parágrafo.", "Outro parágrafo."] },
      es: { titulo: "Título del Artículo", resumo: "Resumen corto.", corpo: ["Primer párrafo."] },
      en: { titulo: "Article Title", resumo: "Short summary.", corpo: ["First paragraph."] }
    }
    */

  ]
};
