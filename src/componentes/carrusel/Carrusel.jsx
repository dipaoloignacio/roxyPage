import React from 'react';

export const Carrusel = (props) => {

    const fotos = [...props.fotos]
    console.log(fotos)
    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={fotos[0].img} className="d-block" alt="Marioneta de Rosana Lopez" />
                </div>
                {
                    fotos.map((element, i) => {
                        if (i > 0) {
                            return (
                                <div className="carousel-item">
                                    <img src={element.img} className="d-block" alt="Marioneta de Rosana Lopez" />
                                </div>
                            )
                        }
                    })
                }
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}
