import banner from '../../imagenes/banner/logo-img-fondo-blanco-recortada.jpg';

import React from 'react'

export const Banner = () => {
    return (
        <div className='container-img-banner'>
            <img src={banner} id="img-logo" className="img-fluid" alt="banner marionetas el alma en un hilo." />
        </div>
    )
}
