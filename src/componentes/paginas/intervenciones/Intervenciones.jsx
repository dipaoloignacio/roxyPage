import React from 'react'

import imgCarrusel from '../../../imagenes/intervenciones/carrousell-tourdates.jpg'

import imgInter1 from '../../../imagenes/intervenciones/EN-LOS-HILOS-DEL-TIEMPO-M-GICO.jpg'
import imgInter2 from '../../../imagenes/intervenciones/Feria-Internacional-del-libro.jpg'
import imgInter3 from '../../../imagenes/intervenciones/INTERVENCION-CONTAR-PARA-QUE-OCURRA.jpg'
import imgInter4 from '../../../imagenes/intervenciones/INTERVENCIONES-VIA-P-BLICA.jpg'

import galeria1 from '../../../imagenes/intervenciones/gallery/gallery-inter-01.jpg'
import galeria2 from '../../../imagenes/intervenciones/gallery/gallery-inter-02.jpg'
import galeria3 from '../../../imagenes/intervenciones/gallery/gallery-inter-03.jpg'
import galeria4 from '../../../imagenes/intervenciones/gallery/gallery-inter-04.jpg'
import galeria5 from '../../../imagenes/intervenciones/gallery/gallery-inter-05.jpg'
import galeria6 from '../../../imagenes/intervenciones/gallery/gallery-inter-06.jpg'
import galeria7 from '../../../imagenes/intervenciones/gallery/gallery-inter-07.jpg'
import galeria8 from '../../../imagenes/intervenciones/gallery/gallery-inter-08.jpg'
import galeria9 from '../../../imagenes/intervenciones/gallery/gallery-inter-09.jpg'
import galeria10 from '../../../imagenes/intervenciones/gallery/gallery-inter-10.jpg'
import galeria11 from '../../../imagenes/intervenciones/gallery/gallery-inter-11.jpg'
import galeria12 from '../../../imagenes/intervenciones/gallery/gallery-inter-12.jpg'
import galeria13 from '../../../imagenes/intervenciones/gallery/gallery-inter-13.jpg'
import galeria14 from '../../../imagenes/intervenciones/gallery/gallery-inter-14.jpg'
import galeria15 from '../../../imagenes/intervenciones/gallery/gallery-inter-15.jpg'
import galeria16 from '../../../imagenes/intervenciones/gallery/gallery-inter-16.jpg'
import galeria17 from '../../../imagenes/intervenciones/gallery/gallery-inter-17.jpg'
import galeria18 from '../../../imagenes/intervenciones/gallery/gallery-inter-18.jpg'
import galeria19 from '../../../imagenes/intervenciones/gallery/gallery-inter-19.jpg'
import galeria20 from '../../../imagenes/intervenciones/gallery/gallery-inter-20.jpg'
import galeria21 from '../../../imagenes/intervenciones/gallery/gallery-inter-21.jpg'
import galeria22 from '../../../imagenes/intervenciones/gallery/gallery-inter-22.jpg'
import galeria23 from '../../../imagenes/intervenciones/gallery/gallery-inter-23.jpg'

export const Intervenciones = () => {
    return (
        <div className='container-inter'> 

            <div class="banner-inter d-flex">
                <div class="img-inter ">
                    <img src={imgCarrusel} class="img-fluid "
                        alt="Marioneta de introduccion a intervenciones de Rosana Lopez" />
                </div>
            </div>

            <div class="container-gallery-interneviones">
                <div class="gallery">
                    <div class="gallery-item">
                        <img class="gallery-image" src={imgInter1}
                            alt="Intervencion artistica con mariones de Rosana Lopez" />
                    </div>

                    <div class="gallery-item">
                        <img class="gallery-image" src={imgInter2}
                            alt="Intervencion artistica con mariones de Rosana Lopez" />
                    </div>

                    <div class="gallery-item">
                        <img class="gallery-image" src={imgInter3}
                            alt="Intervencion artistica con mariones de Rosana Lopez" />
                    </div>

                    <div class="gallery-item">
                        <img class="gallery-image" src={imgInter4}
                            alt="Intervencion artistica con mariones de Rosana Lopez" />
                    </div>
                </div>
            </div>

            <div class="division"></div>

            <div class="video-inter">
                <iframe src="https://www.youtube.com/embed/8WhpLcdHOsE" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>


            <div class="division"></div>

            <div class="gallery">
                <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                    <img class="gallery-image" src={galeria1}
                        alt="Intervenciones marionetas Rosana Lopez. El Alma en un hilo." />
                </div>
                <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                    <img class="gallery-image" src={galeria2}
                        alt="Intervenciones marionetas Rosana Lopez. El Alma en un hilo." />
                </div>
                <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                    <img class="gallery-image" src={galeria3}
                        alt="Intervenciones marionetas Rosana Lopez. El Alma en un hilo." />
                </div>
                <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                    <img class="gallery-image" src={galeria4}
                        alt="Intervenciones marionetas Rosana Lopez. El Alma en un hilo." />
                </div>
                <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                    <img class="gallery-image" src={galeria5}
                        alt="Intervenciones marionetas Rosana Lopez. El Alma en un hilo." />
                </div>
                <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                    <img class="gallery-image" src={galeria6}
                        alt="Intervenciones marionetas Rosana Lopez. El Alma en un hilo." />
                </div>
                <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                    <img class="gallery-image" src={galeria7}
                        alt="Intervenciones marionetas Rosana Lopez. El Alma en un hilo." />
                </div>
                <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                    <img class="gallery-image" src={galeria8}
                        alt="Intervenciones marionetas Rosana Lopez. El Alma en un hilo." />
                </div>
                <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                    <img class="gallery-image" src={galeria9}
                        alt="Intervenciones marionetas Rosana Lopez. El Alma en un hilo." />
                </div>
                <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                    <img class="gallery-image" src={galeria10}
                        alt="Intervenciones marionetas Rosana Lopez. El Alma en un hilo." />
                </div>
                <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                    <img class="gallery-image" src={galeria11}
                        alt="Intervenciones marionetas Rosana Lopez. El Alma en un hilo." />
                </div>
                <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                    <img class="gallery-image" src={galeria12}
                        alt="Intervenciones marionetas Rosana Lopez. El Alma en un hilo." />
                </div>
                <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                    <img class="gallery-image" src={galeria13}
                        alt="Intervenciones marionetas Rosana Lopez. El Alma en un hilo." />
                </div>
                <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                    <img class="gallery-image" src={galeria14}
                        alt="Intervenciones marionetas Rosana Lopez. El Alma en un hilo." />
                </div>
                <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                    <img class="gallery-image" src={galeria15}
                        alt="Intervenciones marionetas Rosana Lopez. El Alma en un hilo." />
                </div>
                <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                    <img class="gallery-image" src={galeria16}
                        alt="Intervenciones marionetas Rosana Lopez. El Alma en un hilo." />
                </div>
                <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                    <img class="gallery-image" src={galeria17}
                        alt="Intervenciones marionetas Rosana Lopez. El Alma en un hilo." />
                </div>
                <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                    <img class="gallery-image" src={galeria18}
                        alt="Intervenciones marionetas Rosana Lopez. El Alma en un hilo." />
                </div>
                <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                    <img class="gallery-image" src={galeria19}
                        alt="Intervenciones marionetas Rosana Lopez. El Alma en un hilo." />
                </div>
                <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                    <img class="gallery-image" src={galeria20}
                        alt="Intervenciones marionetas Rosana Lopez. El Alma en un hilo." />
                </div>
                <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                    <img class="gallery-image" src={galeria21}
                        alt="Intervenciones marionetas Rosana Lopez. El Alma en un hilo." />
                </div>
                <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                    <img class="gallery-image" src={galeria22}
                        alt="Intervenciones marionetas Rosana Lopez. El Alma en un hilo." />
                </div>
                <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#asd">
                    <img class="gallery-image" src={galeria23}
                        alt="Intervenciones marionetas Rosana Lopez. El Alma en un hilo." />
                </div>

            </div>
        </div>
    )
}
