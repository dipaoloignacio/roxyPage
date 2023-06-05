import React from 'react'

import img1 from '../../../../../imagenes/espectaculos/marionetas/img-enderas-masugui/img1.jpg'
import img2 from '../../../../../imagenes/espectaculos/marionetas/img-enderas-masugui/img2.jpg'
import img3 from '../../../../../imagenes/espectaculos/marionetas/img-enderas-masugui/img3.jpg'
import img4 from '../../../../../imagenes/espectaculos/marionetas/img-enderas-masugui/img4.jpg'
import img5 from '../../../../../imagenes/espectaculos/marionetas/img-enderas-masugui/img5.jpg'
import img6 from '../../../../../imagenes/espectaculos/marionetas/img-enderas-masugui/img6.jpg'
import img7 from '../../../../../imagenes/espectaculos/marionetas/img-enderas-masugui/img7.jpg'
import img8 from '../../../../../imagenes/espectaculos/marionetas/img-enderas-masugui/img8.jpg'
import img9 from '../../../../../imagenes/espectaculos/marionetas/img-enderas-masugui/img9.jpg'
import img10 from '../../../../../imagenes/espectaculos/marionetas/img-enderas-masugui/img10.jpg'
import img11 from '../../../../../imagenes/espectaculos/marionetas/img-enderas-masugui/img11.jpg'
import img12 from '../../../../../imagenes/espectaculos/marionetas/img-enderas-masugui/img12.jpg'
import img13 from '../../../../../imagenes/espectaculos/marionetas/img-enderas-masugui/img13.jpg'

export const Enderas = () => {
  return (
    <div class="pagina-enderas bg-dark ">

        <h1 class="text-light m-0 p-5">"Enderas Masugui"</h1>
        <p class="text-light">-El viaje de Luisa.</p>

        <p class="resena-luisa text-light">Luisa es adicta a su celular.

            Su vida transcurre entre selfies y redes sociales.
            
            En medio de sus vacaciones, emprende una caminata hacia el mar.
            
            Su GPS falla.
            
            Se ve perdida en medio de la selva frente a los restos
            
            de un teatro de marionetas abandonado.
            
            Sucede un hecho mágico.
            
            El Teatro ENDERAS MASUGUI despierta
            
            y el viaje de Luisa,
            comienza.</p>


        <div class="trailer">
            <h3>Trailer</h3>
        </div>
        <iframe src="https://www.youtube.com/embed/CaQJCKuVKN8" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>

        <ul class="lista-creditos">
            <li>
                Dramaturgia: <br/>
                Rosana Lopez.
            </li>
            <li>
                Puesta en escena y dirección: <br/>
                Guillermo Troncoso
            </li>
            <li>
                Asistencia de dirección: <br/>
                Eleonora Acosta
            </li>
            <li>
                Marionetas y actuación: <br/>
                Rosana Lopez
            </li>
            <li>
                Diseño de luces: <br/>
                Noelia Torres
            </li>
            <li>
                Diseño sonoro: <br/>
                Facundo Silione
            </li>
            <li>
                Vestuario: <br/>
                Rosana Lopez - Valeria Gomez
            </li>
            <li>
                Técnica: <br/>
                Pablo Di Paolo
            </li>
            <li>
                Escenografía: <br/>
                Rosana Lopez- Pablo Di Paolo
            </li>
        </ul>
        <div>
            <h4>Galería de imágenes</h4>
        </div>

        <div class="gallery">

            <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                <img class="gallery-image"
                    src={img3}
                    alt="Obra de marionetas de Rosana Lopez Enderas Masugui"/>
            </div>

            <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                <img class="gallery-image"
                    src={img4}
                    alt="Obra de marionetas de Rosana Lopez Enderas Masugui"/>
            </div>

            <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                <img class="gallery-image"
                    src={img5}
                    alt="Obra de marionetas de Rosana Lopez Enderas Masugui"/>
            </div>

            <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                <img class="gallery-image"
                    src={img6}
                    alt="Obra de marionetas de Rosana Lopez Enderas Masugui"/>
            </div>

            <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                <img class="gallery-image"
                    src={img7}
                    alt="Obra de marionetas de Rosana Lopez Enderas Masugui"/>
            </div>

            <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                <img class="gallery-image" src={img8}
                    alt="Obra de marionetas de Rosana Lopez Enderas Masugui"/>
            </div>
            <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                <img class="gallery-image"
                    src={img9}
                    alt="Obra de marionetas de Rosana Lopez Enderas Masugui"/>
            </div>
            <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                <img class="gallery-image"
                    src={img10}
                    alt="Obra de marionetas de Rosana Lopez Enderas Masugui"/>
            </div>
            <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                <img class="gallery-image"
                    src={img12}
                    alt="Obra de marionetas de Rosana Lopez Enderas Masugui"/>
            </div>
            <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                <img class="gallery-image"
                    src={img13}
                    alt="Obra de marionetas de Rosana Lopez Enderas Masugui"/>
            </div>

        </div>
    </div>
  )
}
