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
                 "@ images/blog/foto.jpg | legenda"  -> foto (ou .mp4) entre parágrafos,
                                         a legenda depois do | é opcional
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
        titulo: "El Artista y la Armonía Lítica",
        resumo: "La historia del maestro orfebre detrás de Cristal Bellísimo: de la infancia entre plata y oro hasta la creación de la técnica que llama Armonía Lítica.",
        corpo: [
          "Hay historias que comienzan mucho antes de que exista una marca. La historia de este joyero comienza en la infancia, entre el brillo de la plata y del oro, el perfume del jazmín y las noches observadas bajo un cielo estrellado.",
          "Nacido en una ciudad de siete colinas, rodeada por un gran río que formaba una bahía, creció observando el trabajo de su madre, de su tío y de otros familiares en un taller de plata y oro.",
          "Allí se producían objetos destinados al regimiento de caballería: piezas para generales, botones de oficiales, espadas y sus decoraciones. Siendo aún niño, lo observaba todo con atención. El trabajo de los metales despertaba en él una admiración que, años más tarde, se transformaría en vocación.",
          "Después de pasar por distintos trabajos y actividades, llegó el momento en que tomó los metales con sus manos y comenzó a darles forma. Desde ese instante, no se detuvo más.",
          "Había encontrado aquello que reconocía como su fuente de inspiración y el arte que deseaba seguir.",
          "## El primer reconocimiento",
          "Siendo todavía muy joven, a los quince o dieciséis años, llevó algunas piezas para ser pulidas en el taller de un joyero. El profesional llamó a sus colegas para que observaran el trabajo.",
          "> Artista, artista, artista.",
          "El recuerdo de aquel momento permaneció. Llegaron entonces las invitaciones a exposiciones junto a ceramistas, escultores de madera y metal, arquitectos, joyeros y otros artistas. Llegaron los aplausos, la admiración y los elogios.",
          "Más tarde llegaron también los viajes. Por América del Sur y después por Europa, continuó presentando su trabajo. Encontró reconocimiento, ventas y nuevos públicos, pero, sobre todo, encontró artistas y distintas formas de comprender la joyería.",
          "En cada ciudad que visitaba, buscaba las joyerías. Entraba para observar, aprender y descubrir algo nuevo. Algunas galerías exhibían objetos industrializados, lo que le causaba tristeza. Otras presentaban trabajos de artistas que admiraba. El contacto con esas distintas experiencias fue una parte importante de su aprendizaje.",
          "A lo largo de décadas, esa mirada constante hacia el trabajo de otros artistas fue perfeccionando su propio lenguaje, hasta que surgió un estilo propio.",
          "## El nacimiento de la Armonía Lítica",
          "Él llama a su técnica Armonía Lítica. La palabra «lítica» está relacionada con el griego lithos, piedra.",
          "Para él, sin embargo, el concepto va mucho más allá de la piedra como materia. La Armonía Lítica nace de una reflexión sobre el equilibrio del universo: estrellas, galaxias, planetas y movimientos obedecen a relaciones, medidas y proporciones. Existe, en su visión, una fuerza que mantiene el universo en armonía, y esa misma búsqueda de equilibrio está presente en sus joyas.",
          "Muchas creaciones comienzan a partir de un punto central. A partir de él surgen movimientos, círculos, ejes y formas. El dibujo comienza en el papel, con lápiz, y se trabaja una y otra vez hasta encontrar una dirección. Después, lo que fue dibujado se lleva a la plata, al oro y a las piedras.",
          "Pero el dibujo inicial no determina por completo el resultado. Es solo el comienzo. Durante la ejecución aparecen nuevos detalles, los ornamentos se modifican y la composición va encontrando su propio equilibrio.",
          "## Equilibrio no es necesariamente simetría",
          "Para el artista, una pieza puede tener movimiento y asimetría sin perder su equilibrio. Una piedra fuera de lugar o un ornamento que interrumpa la relación entre las partes puede crear un desequilibrio; por eso, cada elemento necesita encontrar su lugar.",
          "El centro de equilibrio, la proporción, el movimiento y la relación entre los elementos son fundamentales. Esa es la búsqueda que intenta transformar en materia. Para él, todo en el universo tiene movimiento y vida, y es justamente esa vida la que desea plasmar en sus obras.",
          "## La piedra como comienzo",
          "Las piedras ocupan un lugar especial en su proceso creativo. Cuenta que muchas veces sentía como si las piedras lo encontraran a él.",
          "En sus viajes encontraba piedras de distintos lugares y, aun sin disponer de grandes fortunas para adquirirlas, casi siempre lograba reunir lo suficiente para llevarse aquella que sentía que debía formar parte de su trabajo.",
          "La piedra puede ser el inicio de una creación. También aparece en su pensamiento como un símbolo de la piedra filosofal: el punto de partida para una transformación. Por eso, no importa si la piedra es un cristal aparentemente humilde o un zafiro o una esmeralda de gran valor. Existe una regla:",
          "> La piedra debe ser natural.",
          "## Una joya para una persona",
          "A partir de esa relación con la piedra y con la singularidad humana nació otra decisión artística: crear piezas únicas. Para él, cada persona es única, libre y tiene su propia naturaleza, y la intención es que la joya también lleve esa singularidad.",
          "Una pieza no debe ser solo un objeto que alguien posee. Debe establecer una relación con quien la recibe y, de alguna manera, despertar en esa persona una sensación de belleza, inspiración y felicidad. Por eso desea crear una pieza para cada persona, en lugar de repetir indefinidamente el mismo objeto.",
          "## El taller",
          "En determinado momento de su vida, comprendió que necesitaba paz para crear. Comenzó entonces a buscar un lugar donde pudiera trabajar con tranquilidad. Buscó desde el sur de América del Sur hasta el norte de Brasil, hasta encontrar un lugar sobre una colina.",
          "Allí construyó su taller, un pequeño espacio que describe también como un templo para el arte y para la música. A su alrededor están el bosque, el río y el cielo estrellado. Era el ambiente que buscaba para sentarse, trabajar y crear.",
          "Allí pasó a vivir de manera sencilla. Durante cierto período no tenía agua, electricidad, gas ni otras comodidades. Cocinaba con leña sacada del bosque. Lo que necesitaba, por encima de todo, era seguir creando.",
          "Hasta que surgió una nueva necesidad: internet. No la necesitaba para vivir; la necesitaba para mostrar su trabajo. Así surgió la idea de este sitio.",
          "## Técnicas antiguas, diseños del futuro",
          "Su trabajo utiliza distintas técnicas de orfebrería y joyería, entre ellas granulación, diferentes tipos de engaste y filigrana, además de otras técnicas tradicionales.",
          "La filigrana, según él, es un capítulo aparte: una técnica que considera parte de un legado transmitido a través de las generaciones y rodeado de responsabilidad y ética. No se opone a la enseñanza de las técnicas de joyería; para él, sin embargo, el conocimiento debe ir acompañado de responsabilidad y respeto por el legado artístico.",
          "Su propia obra busca unir tiempos distintos: utiliza técnicas antiguas, algunas milenarias, pero desarrolla diseños que considera modernos y futuristas: la unión entre aquello que considera valioso del pasado y aquello que imagina como posibilidad para el futuro.",
          "## El tiempo de la creación",
          "No siempre sabe, al comienzo, exactamente qué va a hacer. A veces hay un dibujo. A veces hay una piedra. A veces hay solo un punto.",
          "A partir de ahí, los círculos comienzan a girar, las formas aparecen y la pieza empieza a tomar cuerpo. Puede nacer un anillo, un arete, un par de aretes u otra joya. El proceso no es del todo previsible: trabaja, modifica, agrega, quita y observa.",
          "Algunas piezas llevan días. Otras, semanas. El trabajo solo termina cuando él mismo siente que llegó al punto justo. Cuando la pieza por fin está concluida, llega la satisfacción, pero la felicidad no termina en el taller. Desea que la persona que reciba esa joya también sienta una parte de esa felicidad.",
          "## Materia y principio",
          "Los materiales que utiliza son plata, oro, platino y piedras naturales. La elección de la piedra natural es, para él, una regla y un código: puede ser un cristal sencillo o una piedra preciosa. El valor financiero no es el único elemento que importa; la naturaleza de la piedra y su relación con la creación forman parte del proceso.",
          "## Arte, inteligencia y creatividad",
          "Cuando habla de la inteligencia artificial, su reflexión vuelve al ser humano. Para él, la inteligencia y la creatividad humanas son infinitas. Más importante que simplemente producir es saber discernir: distinguir lo bueno de lo malo, lo bello de lo que no tiene belleza. Ese discernimiento, para él, también forma parte de la inteligencia.",
          "## Un trabajo hecho en conjunto",
          "Aunque trabaja de manera profundamente individual en su taller, no entiende su obra como algo completamente separado de las personas. Desea crear lazos con todos aquellos que admiran su arte, tengan o no la posibilidad de adquirir una pieza.",
          "Las nuevas creaciones siguen publicándose. Cuando se adquiere una pieza, los recursos permiten comprar nuevamente plata, oro y piedras para seguir creando. Así se establece una especie de ciclo: el artista crea, alguien aprecia, una pieza encuentra a su nuevo dueño y los recursos regresan al taller para que pueda nacer una nueva creación.",
          "Para él, el trabajo no se hace en soledad. Es una construcción entre el artista, la obra y las personas que reconocen su valor.",
          "> Armonía. Entre piedra y metal. Entre forma y movimiento. Entre pasado y futuro. Entre el ser humano y la naturaleza. Entre la creación y quien un día recibirá la joya."
        ]
      },
      en: {
        titulo: "The Artist and Lithic Harmony",
        resumo: "The story of the master goldsmith behind Cristal Bellísimo — from a childhood among silver and gold to the creation of the technique he calls Lithic Harmony.",
        corpo: [
          "Some stories begin long before a brand exists. This jeweler's story begins in childhood, among the gleam of silver and gold, the scent of jasmine and nights spent watching a starry sky.",
          "Born in a city of seven hills, surrounded by a great river that formed a bay, he grew up watching the work of his mother, his uncle and other relatives in a silver and gold workshop.",
          "There they made objects for the cavalry regiment: pieces for generals, officers' buttons, swords and their decorations. Still a child, he watched everything closely. Working with metals awakened in him an admiration that, years later, would become a vocation.",
          "After going through different jobs and activities, the moment came when he took metal in his hands and began to shape it. From that instant, he never stopped.",
          "He had found what he recognized as his source of inspiration and the art he wished to follow.",
          "## The first recognition",
          "Still very young, at fifteen or sixteen, he took some pieces to be polished at a jeweler's workshop. The professional called his colleagues over to look at the work.",
          "> Artist, artist, artist.",
          "The memory of that moment stayed with him. Then came invitations to exhibitions alongside ceramists, wood and metal sculptors, architects, jewelers and other artists. Applause, admiration and praise followed.",
          "Later came the journeys. Across South America and then Europe, he kept showing his work. He found recognition, sales and new audiences, but above all he met artists and different ways of understanding jewelry.",
          "In every city he visited, he sought out jewelry shops. He went in to observe, to learn and to discover something new. Some galleries displayed industrial objects, which saddened him. Others showed the work of artists he admired. Contact with these different experiences was an important part of his learning.",
          "Over decades, this constant attention to the work of other artists refined his own language, until a style of his own emerged.",
          "## The birth of Lithic Harmony",
          "He calls his technique Lithic Harmony. The word “lithic” comes from the Greek lithos, stone.",
          "For him, however, the concept goes far beyond stone as a material. Lithic Harmony arises from a reflection on the balance of the universe: stars, galaxies, planets and movements obey relationships, measures and proportions. In his view, there is a force that keeps the universe in harmony — and that same search for balance is present in his jewels.",
          "Many creations begin from a central point. From it come movements, circles, axes and forms. The drawing starts on paper, in pencil, and is reworked again and again until it finds a direction. Then what was drawn is taken to silver, gold and stones.",
          "But the initial drawing does not fully determine the result. It is only the beginning. During the making, new details appear, the ornaments change and the composition finds its own balance.",
          "## Balance is not necessarily symmetry",
          "For the artist, a piece can have movement and asymmetry without losing its balance. A stone out of place, or an ornament that interrupts the relationship between the parts, can create imbalance — which is why each element must find its place.",
          "The center of balance, proportion, movement and the relationship between elements are fundamental. This is the search he tries to turn into matter. For him, everything in the universe has movement and life, and it is precisely that life he wishes to give form to in his works.",
          "## The stone as a beginning",
          "Stones hold a special place in his creative process. He says that he often felt as if the stones found him.",
          "On his travels he came across stones from different places and, even without great wealth to buy them, he almost always managed to gather enough to take with him the one he felt should be part of his work.",
          "A stone can be the beginning of a creation. It also appears in his thinking as a symbol of the philosopher's stone: the starting point of a transformation. That is why it does not matter whether the stone is an apparently humble crystal or a sapphire or emerald of great value. There is one rule:",
          "> The stone must be natural.",
          "## A jewel for one person",
          "From this relationship with the stone and with human singularity came another artistic decision: to create unique pieces. For him, each person is unique, free and has their own nature — and the intention is for the jewel to carry that singularity too.",
          "A piece should not be merely an object someone owns. It should establish a relationship with the person who receives it and, in some way, awaken in them a sense of beauty, inspiration and happiness. That is why he wishes to create one piece for each person, rather than endlessly repeating the same object.",
          "## The atelier",
          "At a certain point in his life, he realized he needed peace in order to create. He began to look for a place where he could work in tranquility. He searched from the south of South America to the north of Brazil, until he found a place on a hilltop.",
          "There he built his atelier — a small space that he also describes as a temple for art and music. Around it are the forest, the river and the starry sky. It was the setting he had been looking for, to sit, work and create.",
          "There he began to live simply. For a period, he had no water, electricity, gas or other comforts. He cooked with firewood taken from the forest. What he needed, above all, was to keep creating.",
          "Until a new need arose: the internet. He did not need it to live — he needed it to show his work. That is how the idea for this website was born.",
          "## Ancient techniques, designs of the future",
          "His work uses different goldsmithing and jewelry techniques, among them granulation, different types of setting and filigree, along with other traditional techniques.",
          "Filigree, he says, is a chapter of its own: a technique he regards as part of a legacy passed down through generations and surrounded by responsibility and ethics. He is not opposed to teaching jewelry techniques — but for him, knowledge must be accompanied by responsibility and respect for the artistic legacy.",
          "His own work seeks to join different times: it uses ancient techniques, some of them thousands of years old, but develops designs he considers modern and futuristic — the union of what he values in the past and what he imagines as a possibility for the future.",
          "## The time of creation",
          "He does not always know, at the start, exactly what he will make. Sometimes there is a drawing. Sometimes there is a stone. Sometimes there is only a point.",
          "From there, the circles begin to turn, the forms appear and the piece starts to take shape. It may become a ring, an earring, a pair of earrings or another jewel. The process is not entirely predictable: he works, changes, adds, removes and observes.",
          "Some pieces take days. Others, weeks. The work only ends when he himself feels it has reached the right point. When the piece is finally finished, satisfaction comes — but the happiness does not end in the atelier. He hopes that the person who receives the jewel will feel some part of that happiness too.",
          "## Matter and principle",
          "The materials he uses are silver, gold, platinum and natural stones. Choosing natural stone is, for him, a rule and a code: it may be a simple crystal or a precious stone. Financial value is not the only thing that matters — the nature of the stone and its relationship with the creation are part of the process.",
          "## Art, intelligence and creativity",
          "When he speaks about artificial intelligence, his reflection returns to the human being. For him, human intelligence and creativity are infinite. More important than simply producing is knowing how to discern: telling the good from the bad, the beautiful from what has no beauty. That discernment, for him, is also part of intelligence.",
          "## Work made together",
          "Although he works in a deeply individual way in his atelier, he does not see his work as something entirely separate from people. He wishes to create bonds with everyone who admires his art, whether or not they are able to acquire a piece.",
          "New creations continue to be published. When a piece is acquired, the proceeds make it possible to buy silver, gold and stones again and keep creating. A kind of cycle is thus established: the artist creates, someone appreciates, a piece finds its new owner, and the resources return to the atelier so that a new creation can be born.",
          "For him, the work is not done alone. It is a construction between the artist, the work and the people who recognize its value.",
          "> Harmony. Between stone and metal. Between form and movement. Between past and future. Between human beings and nature. Between the creation and the one who will one day receive the jewel."
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
