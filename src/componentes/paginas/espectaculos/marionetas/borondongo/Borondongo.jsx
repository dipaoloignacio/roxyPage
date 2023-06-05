import React from 'react'


import img1 from '../../../../../imagenes/espectaculos/marionetas/img-borondongo/borondongo.jpg'
import img2 from '../../../../../imagenes/espectaculos/marionetas/img-borondongo/borondongo01.jpg'
import img3 from '../../../../../imagenes/espectaculos/marionetas/img-borondongo/borondongo02.jpg'
import img4 from '../../../../../imagenes/espectaculos/marionetas/img-borondongo/borondongo03.jpg'
import img5 from '../../../../../imagenes/espectaculos/marionetas/img-borondongo/borondongo04.jpg'
import img6 from '../../../../../imagenes/espectaculos/marionetas/img-borondongo/borondongo05.jpg'
export const Borondongo = () => {
  return (
    <div class="pagina-enderas bg-dark m-0 p-1">

      <h1 class="text-light">"DÓNDE ESTÁ BORONDONGO ?"</h1>

      <p class="text-light">En el Teatro de la Laguna está todo preparado.
        El telón, las luces y hasta el público. La Sirena Luna ya está
        maquillada para su presentación de danza acuática, pero la
        atracción principal: "El Monstruo Borondongo" no aparece.
        La abuela y Juanita revolvieron toda la laguna tratando de

        encontrarlo, y nada.

        Con la ayuda de Renato, el limpiador de piscinas descubrirán por

        qué el Monstruo no quiere salir a escena.

        Entre risas y canciones el Teatro de la Laguna logrará presentar

        su show y Renato descubrirá,

        que el único tiempo perdido es el que no se disfruta.</p>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/EhUOBmsk_5I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <ul class="lista-creditos">
        <li>
          Dramaturgia y marionetas <br />
          -Rosana Lopez.

        </li>
        <li>
          Dirección: <br />
          -Eleonora Acosta-
          Rosana Lopez.
        </li>
        <li>
          Diseño sonoro: <br />
          -Facundo Silione.

        </li>
        <li>
          Operación técnica: <br />
          Pablo Di Paolo
        </li>
      </ul>

      <div class="gallery">

        <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
          <img class="gallery-image" src={img1}
            alt="Obra de Marionetas de Rosana Lopez Donde esta borondongo?" />
        </div>
        <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
          <img class="gallery-image" src={img2}
            alt="Obra de Marionetas de Rosana Lopez Donde esta borondongo?" />
        </div>
        <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
          <img class="gallery-image" src={img3}
            alt="Obra de Marionetas de Rosana Lopez Donde esta borondongo?" />
        </div>

        <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
          <img class="gallery-image" src={img4}
            alt="Obra de Marionetas de Rosana Lopez Donde esta borondongo?" />
        </div>
        <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
          <img class="gallery-image" src={img5}
            alt="Obra de Marionetas de Rosana Lopez Donde esta borondongo?" />
        </div>
        <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
          <img class="gallery-image" src={img6}
            alt="Obra de Marionetas de Rosana Lopez Donde esta borondongo?" />
        </div>
      </div>
    </div>
  )
}
