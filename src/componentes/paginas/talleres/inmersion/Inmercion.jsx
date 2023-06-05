import React from 'react'
import img1 from '../../../../imagenes/talleres/taller-inmersion/0001.jpg'
import img2 from '../../../../imagenes/talleres/taller-inmersion/0002.jpg'
export const Inmercion = () => {
    return (
        <div className='bg-dark'>
            <div class="taller3">

                <img src={img1} class="img-fluid"
                    alt=" Taller de Rosana Lopez desenredando hilos" />
                <img src={img2} class="img-fluid"
                    alt="Taller de Rosana Lopez desenredando hilos" />
            </div>
        </div>
    )
}
