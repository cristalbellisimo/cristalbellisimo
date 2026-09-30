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
       corpo:  o texto do artigo, em parágrafos separados por vírgula.
               Dois prefixos especiais dentro de um parágrafo:
                 "## texto"  -> vira um subtítulo dentro do artigo
                 "> texto"   -> vira uma citação em destaque (dourado, itálico)
   ============================================================================ */

window.BLOG = {
  posts: [

    /* "Bastidores do Ateliê" saiu em 25/09: era texto provisório, sem fotos nem conteúdo real. */
    {
      slug: "o-artista-e-a-harmonia-litica",
      data: "2026-09-23",
      capa: "",   /* sem foto por enquanto — a foto real do artesão entra quando chegar */
      capaVideo: "",
      galeria: [],
      pt: {
        titulo: "O Artista e a Harmonia Lítica",
        resumo: "A história do mestre ourives por trás do Cristal Bellísimo — da infância entre prata e ouro até a criação da técnica que chama de Harmonia Lítica.",
        corpo: [
          "Há histórias que começam muito antes de uma marca existir. A história deste joalheiro começa na infância, entre o brilho da prata e do ouro, o perfume do jasmim e as noites observadas sob um céu estrelado.",
          "Nascido em uma cidade de sete colinas, cercada por um grande rio que formava uma baía, ele cresceu observando o trabalho de sua mãe, de seu tio e de outros familiares em um ateliê de prata e ouro.",
          "Ali eram produzidos objetos destinados ao regimento de cavalaria: peças para generais, botões de oficiais, espadas e suas decorações. Ainda criança, ele observava tudo atentamente. O trabalho dos metais despertava nele uma admiração que, anos mais tarde, se transformaria em vocação.",
          "Depois de passar por diferentes trabalhos e atividades, chegou o momento em que tomou os metais nas mãos e começou a moldá-los. A partir daquele instante, não parou mais.",
          "Ele havia encontrado aquilo que reconhecia como sua fonte de inspiração e a arte que desejava seguir.",
          "## O primeiro reconhecimento",
          "Ainda muito jovem, aos quinze ou dezesseis anos, levou algumas peças para serem polidas no ateliê de um joalheiro. O profissional chamou seus colegas para observar o trabalho.",
          "> Artista, artista, artista.",
          "A lembrança daquele momento permaneceu. Vieram então os convites para exposições ao lado de ceramistas, escultores de madeira e metal, arquitetos, joalheiros e outros artistas. Vieram os aplausos, a admiração e os elogios.",
          "Mais tarde, vieram também as viagens. Pela América do Sul e posteriormente pela Europa, ele continuou apresentando seu trabalho. Encontrou reconhecimento, vendas e novos públicos, mas, sobretudo, encontrou artistas e diferentes formas de compreender a joalheria.",
          "Em cada cidade que visitava, procurava as joalherias. Entrava para observar, aprender e descobrir alguma coisa nova. Algumas galerias exibiam objetos industrializados, o que lhe causava tristeza. Outras apresentavam trabalhos de artistas que admirava. O contato com essas diferentes experiências foi uma parte importante de seu aprendizado.",
          "Ao longo de décadas, esse olhar constante para o trabalho de outros artistas foi aprimorando sua própria linguagem, até que surgiu um estilo próprio.",
          "## O nascimento da Harmonia Lítica",
          "Ele chama sua técnica de Harmonia Lítica. A palavra “lítica” está relacionada ao grego lithos, pedra.",
          "Para ele, porém, o conceito vai muito além da pedra como matéria. A Harmonia Lítica nasce de uma reflexão sobre o equilíbrio do universo: estrelas, galáxias, planetas e movimentos obedecem a relações, medidas e proporções. Existe, em sua visão, uma força que mantém o universo em harmonia — e essa mesma busca pelo equilíbrio está presente em suas joias.",
          "Muitas criações começam a partir de um ponto central. A partir dele surgem movimentos, círculos, eixos e formas. O desenho começa no papel, com lápis, e é repetidamente trabalhado até encontrar uma direção. Depois, aquilo que foi desenhado é levado para a prata, o ouro e as pedras.",
          "Mas o desenho inicial não determina completamente o resultado. Ele é apenas o começo. Durante a execução, novos detalhes aparecem, os ornamentos se modificam e a composição vai encontrando seu próprio equilíbrio.",
          "## Equilíbrio não é necessariamente simetria",
          "Para o artista, uma peça pode possuir movimento e assimetria sem perder seu equilíbrio. Uma pedra fora do lugar ou um ornamento que interrompa a relação entre as partes pode criar um desequilíbrio — por isso, cada elemento precisa encontrar seu lugar.",
          "O centro de equilíbrio, a proporção, o movimento e a relação entre os elementos são fundamentais. É essa busca que ele procura transformar em matéria. Para ele, tudo no universo possui movimento e vida, e é justamente essa vida que deseja plasmar em suas obras.",
          "## A pedra como começo",
          "As pedras ocupam um lugar especial em seu processo criativo. Ele conta que muitas vezes sentia como se as pedras o encontrassem.",
          "Em suas viagens, encontrava pedras de diferentes lugares e, mesmo sem possuir grandes fortunas para adquiri-las, quase sempre conseguia reunir o suficiente para levar consigo aquela que sentia que deveria fazer parte de seu trabalho.",
          "A pedra pode ser o início de uma criação. Ela também aparece em seu pensamento como um símbolo da pedra filosofal: o ponto de partida para uma transformação. Por isso, não importa se a pedra é um cristal aparentemente humilde ou uma safira ou esmeralda de grande valor. Existe uma regra:",
          "> A pedra precisa ser natural.",
          "## Uma joia para uma pessoa",
          "Foi a partir dessa relação com a pedra e com a singularidade humana que nasceu outra decisão artística: criar peças únicas. Para ele, cada pessoa é única, livre e possui sua própria natureza — e a intenção é que a joia também carregue essa singularidade.",
          "Uma peça não deve ser apenas um objeto que alguém possui. Deve estabelecer uma relação com quem a recebe e, de alguma maneira, despertar nessa pessoa uma sensação de beleza, inspiração e felicidade. É por isso que ele deseja criar uma peça para cada pessoa, em vez de simplesmente repetir indefinidamente o mesmo objeto.",
          "## O ateliê",
          "Em determinado momento de sua vida, percebeu que precisava de paz para criar. Começou então a procurar um lugar onde pudesse trabalhar com tranquilidade. Procurou desde o sul da América do Sul até o norte do Brasil, até encontrar um lugar sobre uma colina.",
          "Ali construiu seu ateliê — um pequeno espaço que descreve também como um templo para a arte e para a música. Ao redor estão a floresta, o rio e o céu estrelado. Era o ambiente que procurava para sentar, trabalhar e criar.",
          "Ali passou a viver de maneira simples. Durante determinado período, não tinha água, eletricidade, gás ou outras comodidades. Cozinhava com lenha retirada da floresta. O que precisava, acima de tudo, era continuar criando.",
          "Até que surgiu uma nova necessidade: a internet. Ele não precisava da internet para viver — precisava dela para mostrar seu trabalho. E foi assim que surgiu a ideia deste site.",
          "## Técnicas antigas, desenhos do futuro",
          "Seu trabalho utiliza diferentes técnicas de ourivesaria e joalheria, entre elas granulação, diferentes tipos de engaste e filigrana, além de outras técnicas tradicionais.",
          "A filigrana, segundo ele, é um capítulo à parte: uma técnica que considera parte de um legado transmitido através das gerações e cercado por responsabilidade e ética. Ele não se opõe ao ensino das técnicas de joalheria — para ele, porém, o conhecimento precisa ser acompanhado de responsabilidade e respeito pelo legado artístico.",
          "Sua própria obra procura unir tempos diferentes: utiliza técnicas antigas, algumas milenares, mas desenvolve desenhos que considera modernos e futuristas — a união entre aquilo que considera valioso no passado e aquilo que imagina como possibilidade para o futuro.",
          "## O tempo da criação",
          "Nem sempre ele sabe, no início, exatamente o que irá fazer. Às vezes existe um desenho. Às vezes existe uma pedra. Às vezes existe apenas um ponto.",
          "A partir daí, os círculos começam a girar, as formas aparecem e a peça começa a tomar corpo. Pode nascer um anel, um brinco, um par de brincos ou outra joia. O processo não é completamente previsível: ele trabalha, modifica, acrescenta, retira e observa.",
          "Algumas peças levam dias. Outras, semanas. O trabalho só termina quando ele próprio sente que chegou ao ponto certo. Quando a peça finalmente está concluída, vem a satisfação — mas a felicidade não termina no ateliê. Ele deseja que a pessoa que receber aquela joia também sinta alguma parte dessa felicidade.",
          "## Matéria e princípio",
          "Os materiais que utiliza são prata, ouro, platina e pedras naturais. A escolha da pedra natural é, para ele, uma regra e um código: pode ser um cristal simples ou uma pedra preciosa. O valor financeiro não é o único elemento que importa — a natureza da pedra e sua relação com a criação fazem parte do processo.",
          "## Arte, inteligência e criatividade",
          "Quando fala sobre inteligência artificial, sua reflexão retorna ao ser humano. Para ele, a inteligência e a criatividade humanas são infinitas. Mais importante do que simplesmente produzir é saber discernir: distinguir o bom do mau, o belo do que não possui beleza. Esse discernimento, para ele, também faz parte da inteligência.",
          "## Um trabalho feito em conjunto",
          "Apesar de trabalhar de maneira profundamente individual em seu ateliê, ele não entende sua obra como algo completamente separado das pessoas. Deseja criar laços com todos aqueles que admiram sua arte, tenham ou não condições de adquirir uma peça.",
          "As novas criações continuam sendo publicadas. Quando uma peça é adquirida, os recursos permitem comprar novamente prata, ouro e pedras para continuar criando. Assim, estabelece-se uma espécie de ciclo: o artista cria, alguém aprecia, uma peça encontra seu novo dono e os recursos retornam ao ateliê para que uma nova criação possa nascer.",
          "Para ele, o trabalho não é feito sozinho. É uma construção entre o artista, a obra e as pessoas que reconhecem seu valor.",
          "> Harmonia. Entre pedra e metal. Entre forma e movimento. Entre passado e futuro. Entre o ser humano e a natureza. Entre a criação e aquele que um dia receberá a joia."
        ]
      },
      es: {
        titulo: "[CONTEÚDO PENDENTE — tradução]",
        resumo: "[CONTEÚDO PENDENTE — tradução]",
        corpo: ["[CONTEÚDO PENDENTE — este artigo ainda não foi traduzido para o espanhol. Ver nota em docs/decisoes-etapa-1-2.md.]"]
      },
      en: {
        titulo: "[CONTEÚDO PENDENTE — tradução]",
        resumo: "[CONTEÚDO PENDENTE — tradução]",
        corpo: ["[CONTEÚDO PENDENTE — this article has not been translated to English yet. See note in docs/decisoes-etapa-1-2.md.]"]
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
