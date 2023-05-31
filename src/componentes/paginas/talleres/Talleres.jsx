import React from 'react'
import { NavLink } from 'react-router-dom'
import imgMiniatura1 from '../../../imagenes/talleres/minuaturas/0001.jpg'
import imgMiniatura2 from '../../../imagenes/talleres/minuaturas/1.jpg'
import imgMiniatura3 from '../../../imagenes/talleres/minuaturas/taller01-01.jpg'

import imgGaleria1 from '../../../imagenes/talleres/galeria/taller-gallery-01.jpg'
import imgGaleria2 from '../../../imagenes/talleres/galeria/taller-gallery-02.jpg'
import imgGaleria3 from '../../../imagenes/talleres/galeria/taller-gallery-03.jpg'
import imgGaleria4 from '../../../imagenes/talleres/galeria/taller-gallery-04.jpg'
import imgGaleria5 from '../../../imagenes/talleres/galeria/taller-gallery-05.jpg'
import imgGaleria6 from '../../../imagenes/talleres/galeria/taller-gallery-06.jpg'
import imgGaleria7 from '../../../imagenes/talleres/galeria/taller-gallery-07.jpg'
import imgGaleria8 from '../../../imagenes/talleres/galeria/taller-gallery-08.jpg'
import imgGaleria9 from '../../../imagenes/talleres/galeria/taller-gallery-09.jpg'
import imgGaleria10 from '../../../imagenes/talleres/galeria/taller-gallery-10.jpg'
import imgGaleria11 from '../../../imagenes/talleres/galeria/taller-gallery-11.jpg'
import imgGaleria12 from '../../../imagenes/talleres/galeria/taller-gallery-12.jpg'
import imgGaleria13 from '../../../imagenes/talleres/galeria/taller-gallery-13.jpg'
import imgGaleria14 from '../../../imagenes/talleres/galeria/taller-gallery-14.jpg'

export const Talleres = () => {
    return (
        <main class="container-taller">

            <h1>Nuestros talleres</h1>
            <div class="images-taller">

                <NavLink to="/taller-desenredando-los-hilos" class="foto-taller">
                    <img src={imgMiniatura3} class="img-fluid" alt="imagen taller de marionetas" />
                    <button class="btn btn-info text-light">Ver mas</button>
                    <p class="btn-ver-talleres">Click para ver mas</p>
                </NavLink>

                <NavLink href="/taller-inmercion-mundo-marionetas" class="foto-taller">
                    <img src={imgMiniatura1} class="img-fluid" alt="imagen taller de marionetas" />
                    <button class="btn btn-info text-light">Ver mas</button>
                    <p class="btn-ver-talleres">Click para ver mas</p>
                </NavLink>

                <NavLink href="/taller-delLibro-aLaEscena" class="foto-taller">
                    <img src={imgMiniatura2} class="img-fluid" alt="imagen taller de marionetas" />
                    <button class="btn btn-info text-light">Ver mas</button>
                    <p class="btn-ver-talleres">Click para ver mas</p>
                </NavLink>

                <div class="divicion"></div>

                <div class="video-taller">
                    <iframe src="https://www.youtube.com/embed/iyQYM6BpwgY" title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>

                <div class="divicion"></div>

                <div class="gallery">
                    <div class="gallery-item">
                        <img class="gallery-image" src={imgGaleria1}
                            alt="Intervencion artistica con mariones de Rosana Lopez" />
                    </div>

                    <div class="gallery-item">
                        <img class="gallery-image" src={imgGaleria2}
                            alt="Intervencion artistica con mariones de Rosana Lopez" />
                    </div>

                    <div class="gallery-item">
                        <img class="gallery-image" src={imgGaleria3}
                            alt="Intervencion artistica con mariones de Rosana Lopez" />
                    </div>

                    <div class="gallery-item">
                        <img class="gallery-image" src={imgGaleria4}
                            alt="Intervencion artistica con mariones de Rosana Lopez" />
                    </div>
                    <div class="gallery-item">
                        <img class="gallery-image" src={imgGaleria5}
                            alt="Intervencion artistica con mariones de Rosana Lopez" />
                    </div>

                    <div class="gallery-item">
                        <img class="gallery-image" src={imgGaleria6}
                            alt="Intervencion artistica con mariones de Rosana Lopez" />
                    </div>

                    <div class="gallery-item">
                        <img class="gallery-image" src={imgGaleria7}
                            alt="Intervencion artistica con mariones de Rosana Lopez" />
                    </div>

                    <div class="gallery-item">
                        <img class="gallery-image" src={imgGaleria8}
                            alt="Intervencion artistica con mariones de Rosana Lopez" />
                    </div>
                    <div class="gallery-item">
                        <img class="gallery-image" src={imgGaleria9}
                            alt="Intervencion artistica con mariones de Rosana Lopez" />
                    </div>
                    <div class="gallery-item">
                        <img class="gallery-image" src={imgGaleria10}
                            alt="Intervencion artistica con mariones de Rosana Lopez" />
                    </div>
                    <div class="gallery-item">
                        <img class="gallery-image" src={imgGaleria11}
                            alt="Intervencion artistica con mariones de Rosana Lopez" />
                    </div>
                    <div class="gallery-item">
                        <img class="gallery-image" src={imgGaleria12}
                            alt="Intervencion artistica con mariones de Rosana Lopez" />
                    </div>
                    <div class="gallery-item">
                        <img class="gallery-image" src={imgGaleria13}
                            alt="Intervencion artistica con mariones de Rosana Lopez" />
                    </div>
                    <div class="gallery-item">
                        <img class="gallery-image" src={imgGaleria14}
                            alt="Intervencion artistica con mariones de Rosana Lopez" />
                    </div>
                </div>
            </div>

            <div id="subir"><i class="fa-solid fa-angles-up"></i></div>

        </main >
    )
}
