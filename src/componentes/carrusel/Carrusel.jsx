import React from 'react';
import imgCarrusel1 from '../../imagenes/carrusel/carrusel-roxy.jpg'
import imgCarrusel2 from '../../imagenes/carrusel/carrusel-pepe.jpg'
import imgCarrusel3 from '../../imagenes/carrusel/corrusel-sirena.jpg'
export const Carrusel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={imgCarrusel1} className="d-block mx-auto" alt="Marioneta de Rosana Lopez" />
                </div>
                <div className="carousel-item">
                    <img src={imgCarrusel2} className="d-block mx-auto" alt="Marioneta de Rosana Lopez" />
                </div>
                <div className="carousel-item">
                    <img src={imgCarrusel3} className="d-block mx-auto" alt="Marioneta de Rosana Lopez" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
