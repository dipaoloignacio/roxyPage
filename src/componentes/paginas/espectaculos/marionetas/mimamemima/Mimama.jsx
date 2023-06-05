import React from 'react'

import img1 from '../../../../../imagenes/espectaculos/marionetas/img-mimamamemima/173989680_4292523934120425_3436091144202267706_n.jpg'
import img2 from '../../../../../imagenes/espectaculos/marionetas/img-mimamamemima/WhatsApp-Image-2022-06-23-at-2.12.jpg'
import img3 from '../../../../../imagenes/espectaculos/marionetas/img-mimamamemima/WhatsApp-Image-2022-06-23-at-2.15.jpg'
import img4 from '../../../../../imagenes/espectaculos/marionetas/img-mimamamemima/WhatsApp-Image-2022-06-23-at-2.17.jpg'
import img5 from '../../../../../imagenes/espectaculos/marionetas/img-mimamamemima/0001.jpg'
import img6 from '../../../../../imagenes/espectaculos/marionetas/img-mimamamemima/0002.jpg'
import img7 from '../../../../../imagenes/espectaculos/marionetas/img-mimamamemima/0003.jpg'
import img8 from '../../../../../imagenes/espectaculos/marionetas/img-mimamamemima/0005.jpg'
import img9 from '../../../../../imagenes/espectaculos/marionetas/img-mimamamemima/0006.jpg'
export const Mimama = () => {
  return (
    <div class="pagina-enderas bg-dark m-0 p-1">
     
      <h1 class="text-light">"MI MA MA ME MI MA"</h1>
      <p class="text-light">-El viaje de Luisa.</p>

      <p class="text-light">Juanita es una pequeña de mente intrépida con preguntas
        desopilantes y muy inquieta. Dani acompaña a la niña en su
        crecimiento, teniendo que recurrir constantemente a su
        creatividad para responder el centenar de preguntas que
        ella hace. <br />

        En su habitación, Juanita estira sus sabanas para armar una
        “tienda de campaña” que será su espacio de juego y la nave
        para sumergirnos en la voz de Liliana Bodoc y el universo
        que pronuncia. Acompañadas por música las palabras de la
        escritora serán abrazadas con luces y sombras. <br />

        Obra de teatro con marioneta y proyección de sombras con retroproyector</p>
      <div class="trailer">
        <h3>Trailer</h3>
      </div>
      <iframe src="https://www.youtube.com/embed/HV-MVwbzDK0" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>

      <ul class="lista-creditos">
        <li>
          Idea y realización:<br />
          Rosana Lopez-
          Daniela Aparicio Arrojo-
        </li>
        <li>
          Dramaturgia <br />
          -Rosana Lopez.
        </li>
        <li>
          Diseño y confección de Sombras con retroproyector: <br />
          -Daniela Aparicio Arrojo.
        </li>
        <li>
          Marionetas de hilo: construcción y manipulación <br />
          -Rosana Lopez.
        </li>
        <li>
          Diseño sonoro, composición y arreglos musicales: <br />
          -Sebastián Aparicio Arrojo.
        </li>
        <li>
          Planta de luces y operación técnica: <br />
          -Pablo Di Paolo
        </li>
        <li>
          Voz en off: <br />
          Liliana Bodoc, discurso: “La palabra y la honra”<br />
          Lucía Di Paolo: Luci
        </li>
      </ul>

      <div>
        <h4>Galería de imágenes</h4>
      </div>

      <div class="gallery">


        <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
          <img class="gallery-image"
           src={img4}
            alt="Obra de marionetas de Rosana Lopez Mi Ma Ma Me Mi Ma" />
        </div>
        <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
          <img class="gallery-image"
           src={img5}
            alt="Obra de marionetas de Rosana Lopez Mi Ma Ma Me Mi Ma" />
        </div>
        <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
          <img class="gallery-image"
            src={img6}
            alt="Obra de marionetas de Rosana Lopez Mi Ma Ma Me Mi Ma" />
        </div>
        <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
          <img class="gallery-image"
            src={img1}
            alt="Obra de marionetas de Rosana Lopez Mi Ma Ma Me Mi Ma" />
        </div>
        <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
          <img class="gallery-image"
            src={img2}
            alt="Obra de marionetas de Rosana Lopez Mi Ma Ma Me Mi Ma" />
        </div>

        <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
          <img class="gallery-image"
            src={img3}
            alt="Obra de marionetas de Rosana Lopez Mi Ma Ma Me Mi Ma" />
        </div>
        <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
          <img class="gallery-image"
            src={img7}
            alt="Obra de marionetas de Rosana Lopez Mi Ma Ma Me Mi Ma" />
        </div>
        <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
          <img class="gallery-image"
            src={img8}
            alt="Obra de marionetas de Rosana Lopez Mi Ma Ma Me Mi Ma" />
        </div>
        <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
          <img class="gallery-image"
            src={img9}
            alt="Obra de marionetas de Rosana Lopez Mi Ma Ma Me Mi Ma" />
        </div>
      </div>
    </div>
  )
}
