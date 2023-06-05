import React from 'react'

import img1 from '../../../../imagenes/espectaculos/lambe-lambe/bellos-y-bestias-01.jpg'
import img2 from '../../../../imagenes/espectaculos/lambe-lambe/bellos-y-bestias-02.jpg'
import img3 from '../../../../imagenes/espectaculos/lambe-lambe/milonga-01.jpg'
import img4 from '../../../../imagenes/espectaculos/lambe-lambe/milonga-02.jpg'
import img5 from '../../../../imagenes/espectaculos/lambe-lambe/milonga-03.jpg'
import img6 from '../../../../imagenes/espectaculos/lambe-lambe/milonga-04.jpg'
import img7 from '../../../../imagenes/espectaculos/lambe-lambe/viejo-matias-01.jpg'
import img8 from '../../../../imagenes/espectaculos/lambe-lambe/viejo-matias-02.jpg'
import img9 from '../../../../imagenes/espectaculos/lambe-lambe/viejo-matias-03.jpg'

export const LambeLambe = () => {
    return (
        <main class="lambe-lambe">

            <article class="bellos-y-bestias">
                <h3>"Bellos y bestias".</h3>
                <p>"La bella linda y Carlitos bestia, contruyen una historia de encuentro junto a la fuente de la plaza de
                    la ciudad; alli la marginalidad, el sistema y la desigualdad se desvanecen. En unos pocos instantes el
                    futuro se ilumina con la promesa de un nuevo encuentro."</p>
                <div class="gallery">
                    <div class="gallery-item">
                        <img class="gallery-image"
                            src={img1}
                            alt="Ronasa Lopez presentando Bellos y Bestias obre de lambe lambe." />
                    </div>

                    <div class="gallery-item">
                        <img class="gallery-image"
                            src={img2}
                            alt="Ronasa Lopez presentando Bellos y Bestias obre de lambe lambe." />
                    </div>
                </div>
            </article>

            <article class="carrusel-del-viejo-matias">
                <h3>"Carrusel del viejo Matias".</h3>
                <p> "En la intimidad de una pulpería, el viejo Matias
                    relata cómo se vive en Mendoza la Fiesta de la
                    vendimia, con su histórico Carrusel, donde
                    desfilan las reinas de cada departamento sobre
                    carrozas. La intimidad del relato se rompe
                    cuando irrumpen en escena las calles de la ciudad, los carros y las comparsas.

                    Una obra plagada de mecanismos y artilugios, construye la
                    magia con que vive el
                    pueblo el final de la
                    cosecha de la uva."</p>
                <p>duración: 2,40 minutos.
                    <br />
                    Cantidad de espectadores: tres espectadores máximo.
                    <br />
                </p>
                <div class="gallery">

                    <div class="gallery-item">
                        <img class="gallery-image" src={img7}
                            alt="Ronasa Lopez presentando Milonga obra de lambe lambe." />
                    </div>
                    <div class="gallery-item">
                        <img class="gallery-image"
                            src={img8}
                            alt="Ronasa Lopez presentando Milonga obra de lambe lambe." />
                    </div>

                    <div class="gallery-item">
                        <img class="gallery-image"
                            src={img9}
                            alt="Ronasa Lopez presentando Milonga obra de lambe lambe." />
                    </div>
                </div>
            </article>

            <article class="milonga">
                <h3>"Milonga".</h3>
                <p>"En el patio, esa tarde transcurre como tantas
                    otras. Los pájaros, los vecinos, el mate y el Arte. Al
                    son de una milonga cobran vida, las personas, los
                    recuerdos, el amor y el presente..."</p>
                <div class="gallery">
                    <div class="gallery-item">
                        <img class="gallery-image"
                            src={img3}
                            alt="Ronasa Lopez presentando Carrusel del viejo Matias obra de lambe lambe." />
                    </div>

                    <div class="gallery-item">
                        <img class="gallery-image"
                            src={img4}
                            alt="Ronasa Lopez presentando Carrusel del viejo Matias obra de lambe lambe." />
                    </div>

                    <div class="gallery-item">
                        <img class="gallery-image"
                            src={img5}
                            alt="Ronasa Lopez presentando Carrusel del viejo Matias obra de lambe lambe." />
                    </div>
                    <div class="gallery-item">
                        <img class="gallery-image"
                            src={img6}
                            alt="Ronasa Lopez presentando Milonga obra de lambe lambe." />
                    </div>
                </div>

            </article>
        </main>
    )
}
