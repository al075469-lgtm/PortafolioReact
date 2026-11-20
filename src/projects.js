// Edita estos datos con los tuyos antes de publicar.
export const profile = {
  name: "Daniel Fco Beytia Chi",
  short: "Daniel Beytia",
  matricula: "75469",
  career: "Ingeniería en Tecnología de Software",
  github: "https://github.com/TU-USUARIO",
  email: "tu-correo@ejemplo.com",
};

const base = import.meta.env.BASE_URL;

export const projects = [
  {
    id: "pokedex",
    title: "Pokédex",
    kind: "live",
    path: base + "projects/pokedex/index.html",
    summary:
      "Buscador que consulta la PokéAPI y arma la ficha completa: número, sprite, descripción en español, cadena evolutiva y megaevoluciones.",
    learned: [
      "Encadenar fetch() con promesas para pedir pokemon, especie y cadena evolutiva en orden.",
      "Recorrer la cadena evolutiva con una función recursiva, incluyendo evoluciones ramificadas.",
      "Promise.all para pedir en paralelo las especies y encontrar las megaevoluciones.",
    ],
    tags: ["JavaScript", "fetch", "Promesas", "Bootstrap 5", "PokéAPI"],
  },
  {
    id: "dashboard",
    title: "Dashboard de Pokémon",
    kind: "live",
    path: base + "projects/dashboard/index.html",
    summary:
      "Panel donde se buscan pokémon en un cuadro de diálogo y se guardan en una tabla que sobrevive al recargar la página.",
    learned: [
      "Abrir y cerrar un diálogo de Bootstrap desde JavaScript.",
      "Persistir una lista en localStorage con JSON.parse y JSON.stringify.",
      "Construir filas de tabla con el DOM a partir de los datos guardados.",
    ],
    tags: ["JavaScript", "localStorage", "Bootstrap", "DOM", "PokéAPI"],
  },
  {
    id: "guiamovil",
    title: "GuíaMóvil",
    kind: "live",
    path: base + "projects/guiamovil/index.html",
    mobileFirst: true,
    summary:
      "Sitio para quien no sabe qué teléfono elegir: buscador de gama en tres preguntas, filtros por marca y gama, ventana con datos de cada modelo y tema claro u oscuro.",
    learned: [
      "Diseñar con variables CSS para cambiar entre tema claro y oscuro.",
      "Renderizar tarjetas y filtros a partir de un arreglo de datos.",
      "Cargar fotos desde la API de Wikipedia con un dibujo de respaldo si fallan.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Variables CSS", "Responsive"],
  },
  {
    id: "facelook",
    title: "FaceLook",
    kind: "live",
    path: base + "projects/facelook/index.html",
    summary:
      "Maqueta de red social con feed de publicaciones, botón de me gusta, comentarios desplegables y cinco perfiles enlazados entre sí.",
    learned: [
      "Estructurar un sitio de varias páginas con HTML semántico.",
      "Usar details y summary para comentarios sin escribir JavaScript.",
      "Mantener un solo style.css para todas las páginas.",
    ],
    tags: ["HTML", "CSS", "Multipágina"],
  },
  {
    id: "beyonce",
    title: "Escapa de Beyoncé",
    kind: "live",
    path: base + "projects/beyonce/index.html",
    summary:
      "Juego donde mueves a tu personaje con las flechas mientras Beyoncé te persigue. Un panel permite cambiar velocidades y colores mientras juegas.",
    learned: [
      "Manejar eventos de teclado y limitar el movimiento al área de juego.",
      "Animar al perseguidor actualizando su posición en cada cuadro.",
      "Conectar sliders y selectores de color a variables del juego en tiempo real.",
    ],
    tags: ["JavaScript", "Eventos", "DOM", "CSS"],
  },
  {
    id: "layouts",
    title: "Maquetas con dos layouts",
    kind: "live",
    path: base + "projects/layouts/index.html",
    summary:
      "Una misma página (header, navegación, hero, tres contenidos y footer) con dos hojas de estilo intercambiables: una en flujo normal y otra con CSS Grid y Flexbox.",
    learned: [
      "Separar estructura y presentación: el HTML no cambia, solo el CSS.",
      "Definir áreas con grid-template-areas.",
      "Combinar Grid para la página y Flexbox para las tarjetas.",
    ],
    tags: ["CSS Grid", "Flexbox", "Layout"],
  },
  {
    id: "formulario",
    title: "Formulario de registro",
    kind: "live",
    path: base + "projects/formulario/index.html",
    summary:
      "Formulario para registrar personas de una escuela, conectado a una API real mediante POST, con validación nativa del navegador.",
    learned: [
      "Elegir el tipo de input correcto: number, text, radio, date y select.",
      "Validar con required y maxlength sin JavaScript.",
      "Enlazar label e input con for e id para accesibilidad.",
    ],
    tags: ["HTML", "Formularios", "Validación", "POST"],
  },
];

export const skills = [
  "HTML semántico",
  "CSS Grid y Flexbox",
  "Variables CSS y temas",
  "JavaScript y DOM",
  "fetch y promesas",
  "localStorage",
  "Bootstrap 5",
  "React",
];
