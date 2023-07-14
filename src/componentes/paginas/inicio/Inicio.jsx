import React, { useState } from 'react'
import { Carrusel } from '../../carrusel/Carrusel'

import imgCarrusel1 from '../../../imagenes/carrusel/carrusel-roxy.jpg'
import imgCarrusel2 from '../../../imagenes/carrusel/carrusel-pepe.jpg'
import imgCarrusel3 from '../../../imagenes/carrusel/corrusel-sirena.jpg'

let carrusel = [
    {
        id: 1,
        img: imgCarrusel1,
    },
    {
        id: 2,
        img: imgCarrusel2,
    },
    {
        id: 3,
        img: imgCarrusel3,
    },
]

export const Inicio = () => {
    const [first, setfirst] = useState(carrusel)

    return (
        <div>
            <Carrusel fotos={first} />

            <main className="container-index">

                <section className="title-index">
                    <h1>Inicio</h1>
                    <p>
                        La compañía nace en el año 2012 con la idea de experimentar diferentes
                        posibilidades en el universo de las formas animadas. Fusiona el lenguaje de las Artes plásticas con
                        personajes e historias que son llevadas a escena. Se especializa en el universo de las miniaturas y
                        los títeres que cuelgan de hilos. Apostando siempre a que el Arte llegue a todos los rincones y
                        personas realiza presentaciones, tanto en teatros como en espacios no convencionales. Dirigida por
                        Rosana Lopez, ha representado a su país en numerosos festivales internacionales. El alma en un hilo
                        participa activamente en la formación de nuevos marionetistas. Poniendo en valor la la importancia
                        de que el Arte de las formas animadas continúe germinando en cada rincón del mundo.
                    </p>
                </section>

                <div className="gallery">
                    <div className="gallery-item">
                        <img className="gallery-image" src="https://i.ibb.co/LvNJW6C/cacef6b1-02d8-440b-9197-d95818240261.jpg" alt="Rosana Lopez actuando con sus marionetas en la calle y en el teatro." />
                    </div>

                    <div className="gallery-item">
                        <img className="gallery-image"
                            src="https://i.ibb.co/j8cFVkx/ESPET-CULO-ENDERAS-MASUGUI-EL-VIAJE-DE-LUISA-DA-CIA-A-ALMA-EM-UM-FIO-MARIONETES-E-MINIATURAS-ARGENTI.jpg"
                            alt="Rosana Lopez actuando con sus marionetas en la calle y en el teatro." />
                    </div>

                    <div className="gallery-item">
                        <img className="gallery-image" src="https://i.ibb.co/m8qkKyf/ea6be7b2-3723-4c69-be07-90f2f1042268.jpg"
                            alt="Rosana Lopez actuando con sus marionetas en la calle y en el teatro." />
                    </div>

                    <div className="gallery-item">
                        <img className="gallery-image"
                            src="https://i.ibb.co/FbG2ymt/ESPET-CULO-ENDERAS-MASUGUI-EL-VIAJE-DE-LUISA-DA-CIA-A-ALMA-EM-UM-FIO-MARIONETES-E-MINIATURAS-ARGENTI.jpg"
                            alt="Rosana Lopez actuando con sus marionetas en la calle y en el teatro." />
                    </div>

                    <div className="gallery-item">
                        <img className="gallery-image" src="https://i.ibb.co/CBWjZw6/77057704-d699-4ac4-a08a-93ef532805ea.jpg"
                            alt="Rosana Lopez actuando con sus marionetas en la calle y en el teatro." />
                    </div>

                    <div className="gallery-item">
                        <img className="gallery-image"
                            src="https://i.ibb.co/Px577s0/ESPET-CULO-ENDERAS-MASUGUI-EL-VIAJE-DE-LUISA-DA-CIA-A-ALMA-EM-UM-FIO-MARIONETES-E-MINIATURAS-ARGENTI.jpg"
                            alt="Rosana Lopez actuando con sus marionetas en la calle y en el teatro." />
                    </div>

                </div>
            </main>
        </div>
    )
}
