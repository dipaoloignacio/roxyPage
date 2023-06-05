import React from 'react'
import { NavLink } from 'react-router-dom'
import vid1 from '../../../imagenes/espectaculos/lambe.mp4'
import vid2 from '../../../imagenes/espectaculos/Marionetas-de-hilo.mp4'

import imgBackground from '../../../imagenes/espectaculos/logo-vertical-sinLetras-fondoContainer.jpg'

export const Espectaculos = () => {
    return (
        <div class="container-espectaculos">
            <h1>Espectáculos</h1>

            <div class="videos" style={{ backgroundImage: `url(${imgBackground})` }}>
                <div class="videos-section1 d-flex">

                    <div class="marioneta position-relative border-info">
                        <NavLink to="/espectaculos-marionetas">
                            <video class="video-espectaculos" autoPlay loop muted>
                                <source src={vid2} type="video/mp4" alt="Video de Rosana Lopez con su marioneta en el teatro." />
                            </video>
                            <br />
                            <p>-Click ver mas.</p>
                            <button class="btn2 btn btn-info text-light">Ver mas </button>
                        </NavLink>
                    </div>

                    <div class="lambe border-info">
                        <NavLink to="/espectaculos-lambe-lambe">
                            <video class="video-espectaculos" frameborder="0" autoPlay loop muted>
                                <source src={vid1} type="video/mp4" alt="Video de Rosana Lopez haciendo teatro Lambe Lambe."/>
                            </video>
                            <br />
                            <p>Click ver mas.</p>
                            <button class="btn1 btn btn-info text-light">Ver mas</button>
                        </NavLink>
                    </div>
                </div>

                <div class="videos-section2 d-flex ">
                    <div class="video-atelier">
                        <h3>Nuestro atelier</h3>
                        <iframe class="video-1" width="100%" height="300" src="https://www.youtube.com/embed/o9o7LQBlf1E"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                    <div class="video-lambe">
                        <h3>Teatro Lambe-Lambe</h3>
                        <iframe class="video-2" width="100%" height="300" src="https://www.youtube.com/embed/o-0f1Nmd17Q"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
