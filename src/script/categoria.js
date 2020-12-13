window.onload = function () {
  const data = {
    categorias: [
      {
        id: 0,
        nombre: "Novela Histórica",
        imagen: "./img/novela_historica_large.png",
        imagen_th: "./img/novela_historica_th.png",
        imagen_800: "img/dom-4477481_800.jpg",
        imagen_600: "img/dom-4477481_600.jpg",
        imagen_400: "img/dom-4477481_400.jpg",
        imagen_img: "img/dom-4477481_600.jpg",
        alt: "Imagen Catedral",
        enlace: "./categoria.html?categoria=0",
      },
      {
        id: 1,
        nombre: "Novela Negra y Thriller",
        imagen: "./img/novela_negra_large.png",
        imagen_th: "./img/novela_negra_th.png",
        imagen_800:
          "img/crime-3956945_800.jpg",
        imagen_600:
          "img/crime-3956945_600.jpg",
        imagen_400:
          "img/crime-3956945_400.jpg",
        imagen_img:
          "img/crime-3956945_600.jpg",
        alt: "Crimen",
        enlace: "./categoria.html?categoria=1",
      },
      {
        id: 2,
        nombre: "Ciencia Ficción",
        imagen: "./img/ciencia_ficcion_large.png",
        imagen_th: "./img/ciencia_ficcion_th.png",
        imagen_800: "",
        imagen_600: "",
        imagen_400: "",
        imagen_img: "",
        alt: "",
        enlace: "#",
      },
      {
        id: 3,
        nombre: "Fantasía",
        imagen: "./img/fantasia_large.png",
        imagen_th: "./img/fantasia_th.png",
        imagen_800: "",
        imagen_600: "",
        imagen_400: "",
        imagen_img: "",
        alt: "",
        enlace: "#",
      },
    ],
    libros: [
      {
        categoria: 0,
        isbn: 9788499086514,
        titulo: "Los pilares de la Tierra",
        autor: "Ken Follet",
        imagenPequeña: "./img/los_pilares_de_la_tierra_th.jpg",
        imagenGrande: "./img/los_pilares_de_la_tierra_large_224.jpg",
        imagen_800: "./img/wells-cathedral-1409862_800.jpg",
        imagen_600: "./img/wells-cathedral-1409862_600.jpg",
        imagen_400: "./img/wells-cathedral-1409862_400.jpg",
        imagen_img: "./img/wells-cathedral-1409862_600.jpg",
        alt: "Escalera Catedral gótica",
        resumen:
          "Los pilares de la Tierra es una novela histórica del autor británico Ken Follett, ambientada en Inglaterra en la Edad Media, en concreto en el siglo XII, durante un periodo de guerra civil conocido como la anarquía inglesa, entre el hundimiento del White Ship y el asesinato del arzobispo Thomas Becket. También se recrea un viaje de peregrinación a Santiago de Compostela a través de Francia y España.|La novela describe el desarrollo de la arquitectura gótica a partir de su precursora, la arquitectura románica, y las vicisitudes del priorato de Kingsbridge, en contraste con el telón de fondo de acontecimientos históricos que se estaban produciendo en ese momento. A pesar de que Kingsbridge es el nombre de una localidad inglesa real, el Kingsbridge al que se hace referencia en la novela es, en realidad, un emplazamiento ficticio representativo del típico pueblo inglés en el que se establecían mercados en la época. ",
        resumen_corto:
          "El amor y la muerte se entrecruzan vibrantemente en este magistral tapiz cuyo centro es la construcción de una catedral gótica. La historia se inicia con el ahorcamiento público de un inocente y finaliza con la humillación de un rey.",
        video: "https://www.youtube.com/embed/nZerMgYOwlA",
      },

      {
        categoria: 0,
        isbn: 9788400435480,
        titulo: "SIDI",
        autor: "Arturo Pérez-Reverte",
        imagenPequeña: "./img/sidi_th.jpg",
        imagenGrande: "./img/sidi_large.jpg",
        imagen_800: "./img/pelayo-2160311_800.jpg",
        imagen_600: "./img/pelayo-2160311_600.jpg",
        imagen_400: "./img/pelayo-2160311_400.jpg",
        imagen_img: "./img/pelayo-2160311_600.jpg",
        alt: "Estatua Rey Pelayo",
        resumen:
          "«El arte del mando era tratar con la naturaleza humana, y él había dedicado su vida a aprenderlo. Colgó la espada del arzón, palmeó el cuello cálido del animal y echó un vistazo alrededor: sonidos metálicos, resollar de monturas, conversaciones en voz baja. Aquellos hombres olían a estiércol de caballo, cuero, aceite de armas, sudor y humo de leña.|»Rudos en las formas, extraordinariamente complejos en instintos e intuiciones, eran guerreros y nunca habían pretendido ser otra cosa. Resignados ante el azar, fatalistas sobre la vida y la muerte, obedecían de modo natural sin que la imaginación les jugara malas pasadas. Rostros curtidos de viento, frío y sol, arrugas en torno a los ojos incluso entre los más jóvenes, manos encallecidas de empuñar armas y pelear.",
        resumen_corto:
          "No tenía patria ni rey, sólo un puñado de hombres fieles. No tenían hambre de gloria, sólo hambre. Así nace un mito. Así se cuenta una leyenda.",
        video: "",
      },
      {
        categoria: 0,
        isbn: 9788499088044,
        titulo: "La catedral del mar",
        autor: "Ildefonso Falcones",
        imagenPequeña: "./img/la_catedral_del_mar_th.jpg",
        imagenGrande: "./img/la_catedral_del_mar_large.jpg",
        imagen_800: "./img/barcelona-4298106_800.jpg",
        imagen_600: "./img/barcelona-4298106_600.jpg",
        imagen_400: "./img/barcelona-4298106_400.jpg",
        imagen_img: "./img/barcelona-4298106_600.jpg",
        alt: "fachada basílica Santa María del Mar",
        resumen:
          "Una catedral construida por el pueblo y para el pueblo en la Barcelona medieval es el escenario de una apasionante historia de intriga, violencia y pasión.|Siglo XIV. La ciudad de Barcelona se encuentra en su momento de mayor prosperidad; ha crecido hacia la Ribera, el humilde barrio de los pescadores, cuyos habitantes deciden construir, con el dinero de unos y el esfuerzo de otros, el mayor templo mariano jamás conocido: Santa María de la Mar.| Una construcción que es paralela a la azarosa historia de Arnau, un siervo de la tierra que huye de los abusos de su señor feudal y se refugia en Barcelona, donde se convierte en ciudadano y, con ello, en hombre libre.| El joven Arnau trabaja como palafrenero, estibador, soldado y cambista. Una vida extenuante, siempre al amparo de la catedral de la mar, que le iba a llevar de la miseria del fugitivo a la nobleza y la riqueza. Pero con esta posición privilegiada también le llega la envidia de sus pares, que urden una sórdida conjura que pone su vida en manos de la Inquisición...",
        resumen_corto:
          "Una catedral construida por el pueblo y para el pueblo en la Barcelona medieval es el escenario de una apasionante historia de intriga, violencia y pasión.",
        video: "https://www.youtube.com/embed/rdazkGhdr58",
      },
      {
        categoria: 0,
        isbn: 9788497596657,
        titulo: "Sinuhe el egipcio",
        autor: "Mika Waltari",
        imagenPequeña: "./img/sinuhe_el_egipcio_th.jpg",
        imagenGrande: "./img/sinuhe_el_egipcio_large.jpg",
        imagen_800: "./img/egypt-1083255_800.jpg",
        imagen_600: "./img/egypt-1083255_600.jpg",
        imagen_400: "./img/egypt-1083255_400.jpg",
        imagen_img: "./img/egypt-1083255_600.jpg",
        alt: "Estatua dios Horus",
        resumen: `Sinuhé es un huérfano encontrado en un barco de cañas en el Nilo por un médico de los pobres. Creciendo, estudia y llega a covertirse en médico de la corte.|En el ocaso de su vida, el protagonista de este relato confiesa: "porque yo, Sinuhé, soy un hombre y, como tal, he vivido en todos los que han existido antes que yo y viviré en todos los que existan después de mí. Viviré en las risas y en las lágrimas de los hombres, en sus pesares y temores, en su bondad y en su maldad, en su debilidad y en su fuerza". Sinuhé el egipcio nos introduce en el fascinante y lejano mundo del Egipto de los faraones, los reinos sirios, la Babilonia decadente, la Creta anterior a la Hélade..., es decir, en todo el mundo conocido catorce siglos antes de Jesucristo. Sobre este mapa, Sinuhé dibuja la línea errante de sus viajes; y aunque la vida no sea generosa con él, en su corazón vive inextinguible la confianza en la bondad de los hombres. `,
        resumen_corto:
          "Sinuhé es un huérfano encontrado en un barco de cañas en el Nilo por un médico de los pobres. Creciendo, estudia y llega a covertirse en médico de la corte.",
        video: "",
      },
      {
        categoria: 0,
        isbn: 9788408068983,
        titulo: "Iacobus",
        autor: "Matilde Asensi",
        imagenPequeña: "./img/iacobus_th.jpg",
        imagenGrande: "./img/iacobus_large.jpg",
        imagen_800: "./img/knight-5791249_800.jpg",
        imagen_600: "./img/knight-5791249_600.jpg",
        imagen_400: "./img/knight-5791249_400.jpg",
        imagen_img: "./img/knight-5791249_600.jpg",
        alt: "Caballero Templario",
        resumen:
          "Galceran de Born es un caballero de la orden de los hospitalarios, enemigos de los templarios. Su gran capacidad para resolver enigmas llega a oídos del Papa Juan XXII quien decide encargarle una misión: descubrir a los culpables de las muertes del Papa Clemente, del rey Felipe y de Guillermo de Nogaret.| Con la ayuda de Jonás, su hijo, aunque éste aún no sabe lo que es y de Sara, la hechicera judía de pelo blanco, consiguen la prueba definitiva que implicaba a los templarios en estos asesinatos, como venganza por haber quemado en la hoguera al gran Maestre del Temple. Además, descubrieron en un pergamino, que el oro que los templarios tenían cuando fueron abolidos por el anterior papa había sido escondido a lo largo del Camino de Santiago en lugares señalados con la cruz de oro, la Tau.| Juan XXII encomienda a Galcerán una nueva misión: hacerse pasar por un peregrino y descubrir los escondites secretos del tesoro templario: más de mil quinientos cofres llenos de oro, plata y piedras preciosas. En Las Médulas, un laberinto bajo tierra, encontraron uno de los mayores secretos de la Historia: el Arca de la Alianza.",
        resumen_corto:
          "Galceran de Born es un caballero de la orden de los hospitalarios, enemigos de los templarios. Su gran capacidad para resolver enigmas llega a oídos del Papa Juan XXII quien decide encargarle una misión: descubrir a los culpalbes de las muertes del Papa Clemente, del rey Felipe y de Guillermo de Nogaret.",
        video: "",
      },
      {
        categoria: 0,
        isbn: 9788426418807,
        titulo: "El nombre de la rosa",
        autor: "Umberto Ecco",
        imagenPequeña: "./img/el_nombre_de_la_rosa_th.jpg",
        imagenGrande: "./img/el_nombre_de_la_rosa_large.jpg",
        imagen_800: "./img/abbey-2684661_800.jpg",
        imagen_600: "./img/abbey-2684661_600.jpg",
        imagen_400: "./img/abbey-2684661_400.jpg",
        imagen_img: "./img/abbey-2684661_600.jpg",
        alt: "Claustro Abadía",
        resumen:
          "Valiéndose de las características de la novela gótica, la crónica medieval y la novela policíaca,El nombre de la rosa narra las investigaciones detectivescas que realiza el fraile franciscano Guillermo de Baskerville para esclarecer los crímenes cometidos en una abadía benedictina en el año 1327. Le ayudará en su labor el novicio Adso, un joven que se enfrenta por primera vez a las realidades de la vida situadas más allá de las puertas del convento.|En esta primera y brillante incursión de Umberto Eco en el mundo de la narrativa, que dio lugar a una manera de concebir la novela histórica, el lector disfrutará de una trama apasionante y una admirable reconstrucción de una época especialmente conflictiva de la historia de Occidente.",
        resumen_corto:
          "El nombre de la rosa narra las investigaciones detectivescas que realiza el fraile franciscano Guillermo de Baskerville para esclarecer los crímenes cometidos en una abadía benedictina en el año 1327. ",
        video: "",
      },

      {
        categoria: 1,
        isbn: 9788408177081,
        titulo: "Origen",
        autor: "Dan Brown",
        imagenPequeña: "./img/origen_th.jpg",
        imagenGrande: "./img/origen_large.jpg",
        imagen_800: "./img/barcelona-3226639_800.jpg",
        imagen_600: "./img/barcelona-3226639_600.jpg",
        imagen_400: "./img/barcelona-3226639_400.jpg",
        imagen_img: "./img/barcelona-3226639_600.jpg",
        alt: "Paisaje de Barcelona",
        resumen:
          "Robert Langdon, profesor de simbología e iconografía religiosa de la universidad de Harvard, acude al Museo Guggenheim Bilbao para asistir a un trascendental anuncio que «cambiará la faz de la ciencia para siempre». El anfitrión de la velada es Edmond Kirsch, un joven multimillonario cuyos visionarios inventos tecnológicos y audaces predicciones lo han convertido en una figura de renombre mundial. Kirsch, uno de los alumnos más brillantes de Langdon años atrás, se dispone a revelar un extraordinario descubrimiento que dará respuesta a las dos preguntas que han obsesionado a la humanidad desde el principio de los tiempos. ¿DE DÓNDE VENIMOS? ¿ADÓNDE VAMOS? Al poco tiempo de comenzar la presentación, meticulosamente orquestada por Edmond Kirsch y la directora del museo Ambra Vidal, estalla el caos para asombro de cientos de invitados y millones de espectadores en todo el mundo. Ante la inminente amenaza de que el valioso hallazgo se pierda para siempre, Langdon y Ambra deben huir desesperadamente a Barcelona e iniciar una carrera contrarreloj para localizar la críptica contraseña que les dará acceso al revolucionario secreto de Kirsch. Perseguidos por un atormentado y peligroso enemigo, Langdon y Ambra descubrirán los episodios más oscuros de la Historia y del extremismo religioso. Siguiendo un rastro de pistas compuesto por obras de arte moderno y enigmáticos símbolos, tendrán pocas horas para intentar desvelar la fascinante investigación de Kirsch... y su sobrecogedora revelación sobre el origen y el destino de la Humanidad.| ORIGEN se desarrolla íntegramente en España. Barcelona, Bilbao, Madrid y Sevilla son los escenarios principales en los que transcurre la nueva aventura de Robert Langdon. De la mano del autor de El código Da Vinci, el lector recorrerá escenarios como el Monasterio de Montserrat, la Casa Milà (La Pedrera), la Sagrada Familia, el Museo Guggenheim Bilbao, el Palacio Real o la Catedral de Sevilla.| Como ya sucedió con París en El código Da Vinci, con Roma en Ángeles y demonios o con Florencia en Inferno, los escenarios de las novelas de Dan Brown siempre han sido un elemento clave en sus tramas.",
        resumen_corto:
          "Robert Langdon, profesor de simbología e iconografía religiosa de la universidad de Harvard, acude al Museo Guggenheim Bilbao para asistir a un trascendental anuncio que «cambiará la faz de la ciencia para siempre».",
        video: "https://www.youtube.com/embed/xUk7DlmUctg",
      },
      {
        categoria: 1,
        isbn: 9788408127413,
        titulo: "Inferno",
        autor: "Dan Brown",
        imagenPequeña: "./img/inferno_th.jpg",
        imagenGrande: "./img/inferno_large.jpg",
        imagen_800: "./img/florence-638786_800.jpg",
        imagen_600: "./img/florence-638786_600.jpg",
        imagen_400: "./img/florence-638786_400.jpg",
        imagen_img: "./img/florence-638786_600.jpg",
        alt: "Estatua de dante en Florencia",
        resumen:
          "«Los lugares más oscuros del infierno están reservados para aquellos que mantienen su neutralidad en épocas de crisis moral».|El profesor de simbología Robert Langdon se despierta en un hospital en mitad de la noche, desorientado y con una herida en la cabeza. No recuerda nada de las últimas treinta y seis horas. Ni cómo ha llegado hasta allí, ni el origen del macabro objeto que los médicos descubren entre sus pertenencias. El mundo de Langdon pronto se convierte en un caos y se ve obligado a huir por las calles de Florencia junto a una inteligente joven, Sienna Brooks, cuyas hábiles maniobras le salvan la vida. Langdon no tarda en darse cuenta de que se encuentra en posesión de una serie de inquietantes códigos creados por un brillante científico; un genio cuya obsesión con el fin del mundo sólo es equiparable a la pasión que siente por una de las obras maestras más influyentes jamás escritas: Inferno, el oscuro poema épico de Dante Alighieri.|En su huida a través de escenarios tan conocidos como el Palazzo Vecchio, los jardines Boboli o el Duomo, Langdon y Brooks descubren una red de pasadizos ocultos y secretos antiguos, así como un nuevo y terrorífico paradigma científico que podría ser utilizado para mejorar la vida en la Tierra... o para destruirla.",
        resumen_corto:
          "En el corazón de Italia, el catedrático de Simbología de Harvard Robert Langdon se ve arrastrado a un mundo terrorífico centrado en una de las obras maestras de la Literatura más imperecederas y misteriosas de la Historia: el Infierno de Dante. Con este telón de fondo, Langdon se enfrenta a un adversario escalofriante y lidia con un acertijo ingenioso en un escenario de arte clásico, pasadizos secretos y ciencia futurista. Apoyándose en el oscuro poema épico de Dante, Langdon, en una carrera contrarreloj, busca respuestas y personas de confianza antes de que el mundo cambie irrevocablemente.",
        video: "https://www.youtube-nocookie.com/embed/-_9ML-xA1Co",
      },
      {
        categoria: 1,
        isbn: 9788483465202,
        titulo: "El Ocho",
        autor: "Katherine Neville",
        imagenPequeña: "./img/el_ocho_th.jpg",
        imagenGrande: "./img/el_ocho_large.jpg",
        imagen_800: "./img/chess-5516446_800.jpg",
        imagen_600: "./img/chess-5516446_600.jpg",
        imagen_400: "./img/chess-5516446_400.jpg",
        imagen_img: "./img/chess-5516446_600.jpg",
        alt: "Tablero Ajedrez",
        resumen:
          "Nueva York, 1972. Catherine Velis, aficionada a las matemáticas y al ajedrez, trabaja en una auditoría como experta en informática. La firma la destina a Argelia, pero, antes de partir, una vidente le lee las líneas de la mano y le advierte de que un grave peligro se cierne sobre ella. Poco después, un marchante de antigüedades hace a Cat una misteriosa oferta: un cliente suyo está intentando reunir las piezas de un antiguo juego de ajedrez que presuntamente se encuentra en Argelia. Si Cat le consigue esas piezas, obtendrá a cambio una generosa recompensa.|Sur de Francia, 1790. Mireille de Rémy y su prima Valentine son dos novicias de la abadía de Montglane. Francia arde en las llamas de la revolución que, entre otros proyectos, pretende aniquilar a la Iglesia y hacerse con sus tesoros. Enterradas desde hace mil años bajo el suelo de la abadía se encuentran las piezas de un ajedrez legendario, que perteneció a Carlomagno. Quien consiga reunir dichas piezas adquirirá un poder ilimitado. Y, para mantenerlas fuera del alcance de quienes pudieran abusar de él, Mireille...",
        resumen_corto:
          "Tras las míticas piezas de ajedrez de Montglane se oculta un secreto celosamente preservado durante siglos...",
        video: "",
      },
      {
        categoria: 1,
        isbn: 9788408154167,
        titulo: "El silecio de la ciudad blanca",
        autor: "Eva García Sáenz",
        imagenPequeña: "./img/silencio_ciudad_blanca_th.jpg",
        imagenGrande: "./img/silencio_ciudad_blanca_large.jpg",
        imagen_800: "./img/dolmens-319947_800.jpg",
        imagen_600: "./img/dolmens-319947_600.jpg",
        imagen_400: "./img/dolmens-319947_400.jpg",
        imagen_img: "./img/dolmens-319947_600.jpg",
        alt: "Dolmen en Alava",
        resumen:
          "«Una ciudad aterrorizada por el regreso de unos asesinatos rituales. Un experto en perfiles criminales que esconde una tragedia. Un thriller hipnótico cuyas claves descansan en unos misteriosos restos arqueológicos» |Tasio Ortiz de Zárate, el brillante arqueólogo condenado por los extraños asesinatos que aterrorizaron la tranquila ciudad de Vitoria hace dos décadas, está a punto de salir de prisión en su primer permiso cuando los crímenes se reanudan de nuevo: en la emblemática Catedral Vieja de Vitoria, una pareja de veinte años aparece desnuda y muerta por picaduras de abeja en la garganta. Poco después, otra pareja de veinticinco años es asesinada en la Casa del Cordón, un conocido edificio medieval.|      El joven inspector Unai López de Ayala—alias Kraken—, experto en perfiles criminales, está obsesionado con prevenir los crímenes antes de que ocurran, una tragedia personal aún fresca no le permite encarar el caso como uno más. Sus métodos poco ortodoxos enervan a su jefa, Alba, la subcomisaria con la que mantiene una ambigua relación marcada por los crímenes…El tiempo corre en su contra y la amenaza acecha en cualquier rincón de la ciudad. ¿Quién será el siguiente?",
        resumen_corto:
          "Tasio Ortiz de Zárate, el brillante arqueólogo condenado por los asesinatos que aterrorizaron Vitoria hace dos décadas, está a punto de salir de prisión cuando los crímenes se reanudan. En la Catedral Vieja, una pareja de veinte años aparece muerta por picaduras de abeja en la garganta. Pero solo serán los primeros.",
        video: "https://www.youtube.com/embed/1SKlEjd4T7o",
      },

      {
        categoria: 1,
        isbn: 9788423341986,
        titulo: "El guardian invisible",
        autor: "Dolores Redondo",
        imagenPequeña: "./img/el_guardian_invisible_th.jpg",
        imagenGrande: "./img/el_guardian_invisible_large.jpg",
        imagen_800: "./img/cataract-3768409_800.jpg",
        imagen_600: "./img/cataract-3768409_600.jpg",
        imagen_400: "./img/cataract-3768409_400.jpg",
        imagen_img: "./img/cataract-3768409_600.jpg",
        alt: "Cascada Valle de Batzan",
        resumen:
          "«Ainhoa Elizasu fue la segunda víctima del basajaun, aunque entonces la prensa todavía no lo llamaba así. Fue un poco más tarde cuando trascendió que alrededor de los cadáveres aparecían pelos de animal, restos de piel y rastros dudosamente humanos, unidos a una especie de fúnebre ceremonia de purificación. Una fuerza maligna, telúrica y ancestral parecía haber marcado los cuerpos de aquellas casi niñas con la ropa rasgada, el vello púbico rasurado y las manos dispuestas en actitud virginal.»|En los márgenes del río Baztán, en el valle de Navarra, aparece el cuerpo desnudo de una adolescente en unas circunstancias que lo ponen en relación con un asesinato ocurrido en los alrededores un mes atrás. La inspectora de la sección de homicidios de la Policía Foral, Amaia Salazar, será la encargada de dirigir una investigación que la llevará de vuelta a Elizondo, una pequeña población de donde es originaria y de la que ha tratado de huir toda su vida.| Enfrentada con las cada vez más complicadas derivaciones del caso y con sus propios fantasmas familiares, la investigación de Amaia es una carrera contrarreloj para dar con un asesino que puede mostrar el rostro más aterrador de una realidad brutal.",
        resumen_corto:
          "En los márgenes del río Baztán, en el valle de Navarra, aparece el cuerpo desnudo de una adolescente en unas circunstancias que lo ponen en relación con un asesinato ocurrido en los alrededores un mes atrás. La inspectora de la sección de homicidios dela Policía Foral, Amaia Salazar, será la encargada de dirigir una investigación que la llevará devuelta a Elizondo, una pequeña población de donde es originaria y de la que ha tratado dehuir toda su vida",
        video: "https://www.youtube.com/embed/Usl0QdUjB9Q",
      },
      {
        categoria: 1,
        isbn: 9788497934299,
        titulo: "El sastre de Panamá",
        autor: "John Le Carré",
        imagenPequeña: "./img/el_sastre_de_panama_th.jpg",
        imagenGrande: "./img/el_sastre_de_panama_large.jpg",
        imagen_800: "./img/panama-4948005_800.jpg",
        imagen_600: "./img/panama-4948005_600.jpg",
        imagen_400: "./img/panama-4948005_400.jpg",
        imagen_img: "./img/panama-4948005_600.jpg",
        alt: "Canal de Panamá",
        resumen:
          "El final de la explotación estadounidense del canal de Panamá toca a su fin. Todas las potencias mundiales quieren... asegurarse una situación ventajosa cuando llegue el 31 de diciembre de 1999.| En este revuelto mar de fondo Harry Pendel, presunto sastre de la realeza, cobra un insospechado protagonismo. Por su establecimiento desfilan los personajes más importantes de Panamá y en el probador, casi un confesionario, escucha secretos de toda índole.| Dadas las circunstancias no resulta extraño que el servicio de inteligencia británico, representado por el agente Andy Osnard, arribista, manipulador y ambicioso, seleccione al sastre como eje de sus intrigas.",
        resumen_corto:
          "El final de la explotación estadounidense del canal de Panamá toca a su fin. Todas las potencias mundiales quieren... asegurarse una situación ventajosa cuando llegue el 31 de diciembre de 1999. ",
        video: "https://www.youtube.com/embed/9jcLsYtAN9g",
      },
    ],
  };
  var parametros = window.location.search;

  var id = parametros.substring(
    parametros.indexOf("categoria=") + 10,
    parametros.length - parametros.indexOf("categoria=") + 10
  );

  var categoria = data.categorias.filter((dato) => {
    return dato.id === parseInt(id, 10);
  });

  const imagenCategoria = document.getElementById("img-categoria-th");
  imagenCategoria.src = categoria[0].imagen_th;

  const libros = data.libros.filter((dato) => {
    return dato.categoria === parseInt(id, 10);
  });

  var primero = true;
  var numLibros = libros.length;
  libros.forEach((libro, index) => {
    if (primero) {
      // Modifica el libro que ya aparece en el HTML
      primero = false;
      const titulo = document.getElementsByClassName("titulo");
      titulo[0].textContent = libro.titulo;
      const autor = document.getElementsByClassName("autor");
      autor[0].textContent = libro.autor;
      const enlace = document.getElementsByClassName("enlace-detalle");
      enlace[0].href = "./detalle.html?isbn=" + libro.isbn;
      const imagen = document.getElementsByClassName("img-portada-th");
      imagen[0].src = libro.imagenPequeña;
      imagen[0].alt = "Libro de título: " + libro.titulo;
      const resumen = document.getElementById("resumen-corto");
      resumen.textContent = libro.resumen_corto;
    } else {
      // Genera los libros siguientes
      const listaLibros = document.getElementById("lista-libros");
      const div1 = document.createElement("div");
      div1.className = "libro";
      const div2 = document.createElement("div");
      div2.className = "libro-portada-datos";
      const enlaceNuevo = document.createElement("a");
      enlaceNuevo.href = "./detalle.html?isbn=" + libro.isbn;
      enlaceNuevo.className = "enlace-detalle";
      const imagenNuevo = document.createElement("img");
      imagenNuevo.src = libro.imagenPequeña;
      imagenNuevo.alt = "Libro de título: " + libro.titulo;
      imagenNuevo.className = "img-portada-th  img-sombra";
      const tituloNuevo = document.createElement("p");
      tituloNuevo.textContent = libro.titulo;
      tituloNuevo.className = "titulo";
      const autorNuevo = document.createElement("p");
      autorNuevo.textContent = libro.autor;
      autorNuevo.className = "autor";

      const divResumen = document.createElement("div");
      divResumen.className = "resumen-corto";
      const pResumen=document.createElement("p");
      pResumen.textContent=libro.resumen_corto;
      enlaceNuevo.appendChild(imagenNuevo);
      div2.appendChild(enlaceNuevo);
      div2.appendChild(tituloNuevo);
      div2.appendChild(autorNuevo);
      div1.appendChild(div2);
      divResumen.appendChild(pResumen);
      div1.appendChild(divResumen);
      listaLibros.appendChild(div1);
      if (index<(numLibros-1)) {
        divSubrayado = document.createElement("div");
        divSubrayado.className = "subrayado-largo";
        listaLibros.appendChild(divSubrayado);
      }
    }
  });
};
