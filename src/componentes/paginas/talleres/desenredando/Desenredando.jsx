import React from 'react'
import img1 from '../../../../imagenes/talleres/taller-desenredando/taller01-01.jpg'
import img2 from '../../../../imagenes/talleres/taller-desenredando/taller01-02.jpg'
import img3 from '../../../../imagenes/talleres/taller-desenredando/taller01-03.jpg'
import img4 from '../../../../imagenes/talleres/taller-desenredando/taller01-04.jpg'

export const Desenredando = () => {
    return (
        <div className='bg-dark'>
            <div class="taller3">

                <img src={img1} class="img-fluid" alt="Taller de Rosana Lopez desenredando los hilos" />
                <img src={img2} class="img-fluid" alt="Taller de Rosana Lopez desenredando los hilos" />
                <img src={img3} class="img-fluid" alt="Taller de Rosana Lopez desenredando los hilos" />
                <img src={img4} class="img-fluid" alt="Taller de Rosana Lopez desenredando los hilos" />
            </div>
        </div>
    )
}
