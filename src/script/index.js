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
  };

  const categorias = document.getElementById("container");
  data.categorias.forEach((dato) => {
      const div = document.createElement("div");
      const enlaceCategoria = document.createElement("a");
      const pictureCategoria = document.createElement("picture");
      const imgNoCompatible = document.createElement("img");
      const imgGrande = document.createElement("source");
      imgGrande.media = "(min-width: 768px)";
      imgGrande.srcset = dato.imagen;
      imgGrande.className = "img-sombra img-categoria";
      const imgTh = document.createElement("source");
      imgTh.media = "(max-width: 767px)";
      imgTh.srcset = dato.imagen_th;
      imgTh.className = "img-sombra img-categoria";
      imgNoCompatible.src = dato.imagen;
      imgNoCompatible.alt = "Categoría de libros " + dato.nombre;
      imgNoCompatible.className = "img-sombra img-categoria";
      pictureCategoria.appendChild(imgGrande);
      pictureCategoria.appendChild(imgTh);
      pictureCategoria.appendChild(imgNoCompatible);
      enlaceCategoria.href = dato.enlace;
      enlaceCategoria.appendChild(pictureCategoria);
      div.appendChild(enlaceCategoria);
      div.className = "categoria";
      categorias.appendChild(div);
    }
  );
};
