/* ============================================================================
   CRISTAL BELLÍSIMO — CONTEÚDO DO SITE
   ----------------------------------------------------------------------------
   Este é o ÚNICO ficheiro que precisa de editar para:
     • adicionar / trocar / remover peças do catálogo
     • trocar as fotos principais do site (topo, herança, faixa, rodapé)
     • adicionar fotos E vídeos a uma peça
     • escrever os textos em Português / Espanhol / Inglês

   Regras simples:
     • Texto vai sempre entre aspas:  "assim"
     • Cada peça termina com uma vírgula depois do }  -> },
     • Cada peça tem um código único (CB-0001, CB-0002...). O código identifica a peça,
       não a pedra — duas ametistas diferentes recebem códigos diferentes.
     • Fotos aceitam caminho local (images/...) ou URL HTTPS pública do Supabase.
     • Nunca apague as chavetas { } nem os parêntesis retos [ ] — só o texto lá dentro.
   ============================================================================ */

window.SITE = {

  /* ==========================================================================
     1) FOTOS FIXAS DO SITE  (as partes que não são peças do catálogo)
     Basta trocar o caminho da imagem por outra que esteja na pasta images/.
     ========================================================================== */
  imagens: {
    hero:     "images/colecoes/anelcitrino-1.jpg",        // foto GRANDE do topo do site
    heranca:  "images/colecoes/anelcitrino-2.jpg",    // foto da secção "A Mão do Mestre"
    ctaFundo: "images/colecoes/anelcitrino-3.jpg"      // foto de fundo do bloco "Junte-se ao Legado"
  },

  /* ==========================================================================
     2) PEÇAS DO CATÁLOGO
     --------------------------------------------------------------------------
     PARA ADICIONAR UMA PEÇA NOVA:
       1. Copie um bloco inteiro   {  ...  },   (desde o { até à vírgula final)
       2. Cole-o dentro dos [ ]  (pode ser no fim, antes do ] )
       3. Troque as fotos e os textos.

     Cada peça tem:
       codigo:   identificador único da peça; não repita, mesmo se a pedra for igual.
       fotos:    lista de fotos. A 1.ª é a foto grande; as outras são miniaturas.
                 Local: "images/pecas/CB-0001-01.jpg"
                 Supabase: cole aqui a URL HTTPS pública da foto.
      video:    (opcional) 1 vídeo. Deixe  ""  se a peça não tiver vídeo.
           Aceita arquivo .mp4 ou link YouTube (youtube.com/watch?v=...).
       destaque: true deixa o cartão MAIOR (fica bonito no meio de uma linha de 3).
                 Use false na maioria das peças.
       pt / es / en: os textos em cada idioma
                 meta   = linha pequena dourada (materiais / pedras)
                 titulo = nome da peça
                 desc   = descrição
     ========================================================================== */
  pecas: [

    /* Por decisão de 25/09: só fica a peça que tem foto real (Anel Citrino).
       As outras voltam quando tiverem foto e texto reais — já no Supabase. */

    {
      codigo: "CB-0001",
      fotos: [
        "images/colecoes/anelcitrino-1.jpg",
        "images/colecoes/anelcitrino-2.jpg",
        "images/colecoes/anelcitrino-3.jpg",
        "images/colecoes/anelcitrino-4.jpg"
      ],
      video: "",
      destaque: false,
      pt: { meta: "Prata 950 · Citrino · Filigrana", titulo: "Anel Citrino",
            desc: "Citrino oval facetado engastado em prata 950. A folha esculpida desenha um movimento elíptico e espirais de filigrana — uma forma lítica em equilíbrio cósmico, modelada inteiramente à mão." },
      es: { meta: "Plata 950 · Citrino · Filigrana", titulo: "Anillo Citrino",
            desc: "Citrino oval facetado engastado en plata 950. La hoja esculpida dibuja un movimiento elíptico y espirales de filigrana — una forma lítica en equilibrio cósmico, modelada enteramente a mano." },
      en: { meta: "Sterling 950 · Citrine · Filigree", titulo: "Citrine Ring",
            desc: "Faceted oval citrine set in sterling 950. The sculpted leaf traces an elliptical movement and filigree spirals — a lithic form in cosmic balance, shaped entirely by hand." }
    },
    {
      codigo: "CB-0002",
      fotos: [
        "images/pecas/CB-0002-01.jpg.JPG"
      ],
      video: "",
      destaque: false,
      pt: {
        meta: "Prata 950 · Água-Marinha",
        titulo: "Anel Água-Marinha",
        desc: "Anel em prata 950 com pedra de água-marinha, em acabamento artesanal e desenho delicado que valoriza a sua cor e luminosidade."
      },
      es: {
        meta: "Plata 950 · Aguamarina",
        titulo: "Anillo Aguamarina",
        desc: "Anillo en plata 950 con piedra de aguamarina, en acabado artesanal y diseño delicado que valora su color y luminosidad."
      },
      en: {
        meta: "Sterling 950 · Aquamarine",
        titulo: "Aquamarine Ring",
        desc: "Sterling 950 ring with aquamarine stone, featuring handcrafted finishing and a delicate design that enhances its color and luminosity."
      }
    }
  ],

  /* ==========================================================================
     3) PEÇA EM DESTAQUE / EDITORIAL (a faixa larga com fundo azul)
     Deixe   editorial: null   se não quiser esta faixa.
    Também aceita  video: "..."  em vez de continuar com foto (arquivo local ou YouTube).
     ========================================================================== */
  editorial: null,   /* "Flor do Campo" saiu: não tem foto real */

  /* ==========================================================================
     4) ATELIÊ / PROCESSO — fotos e VÍDEOS do artesão a trabalhar
     --------------------------------------------------------------------------
     • Escreva os textos (rotulo, titulo, intro) em cada idioma — pode manter os
       que estão ou trocar pelos seus.
     • itens: as fotos e vídeos. Enquanto estiver VAZIO, a secção fica escondida
       no site (não mostra nada partido). Assim que puser 1 item, ela aparece.
     • Guarde os ficheiros na pasta  images/atelie/  e liste-os aqui.
         - Foto:  "images/atelie/processo-1.jpg"
         - Vídeo local: "images/atelie/torno.mp4"
         - YouTube: { src: "https://youtu.be/AbCdEfGh123", legenda: { pt: "...", es: "...", en: "..." } }
         - Com legenda (opcional):
             { src: "images/atelie/filigrana.jpg",
               legenda: { pt: "Filigrana à mão", es: "Filigrana a mano", en: "Filigree by hand" } }
     ========================================================================== */
  atelie: {
    pt: { rotulo: "O Ateliê", titulo: "As Mãos por Trás da Peça",
          intro: "Cada joia nasce de horas de trabalho manual — do desenho ao polimento. Aqui partilhamos o processo e as mãos que lhe dão vida." },
    es: { rotulo: "El Atelier", titulo: "Las Manos Detrás de la Pieza",
          intro: "Cada joya nace de horas de trabajo manual — del diseño al pulido. Aquí compartimos el proceso y las manos que le dan vida." },
    en: { rotulo: "The Atelier", titulo: "The Hands Behind the Piece",
          intro: "Every jewel is born from hours of handwork — from sketch to polish. Here we share the process and the hands that bring it to life." },
    itens: [
      // "images/atelie/processo-1.jpg",
      // "images/atelie/processo.mp4",
      // { src: "images/atelie/filigrana.jpg", legenda: { pt: "Filigrana à mão", es: "Filigrana a mano", en: "Filigree by hand" } }
    ]
  }

};
