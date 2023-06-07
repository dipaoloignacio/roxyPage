import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faYoutube, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'

import img1 from '../../../imagenes/logo_mobile.png'
import { NavLink } from 'react-router-dom'

export const Compania = () => {
    return (
        <main class="container-company">

            <section class="text-company">
                <h2>El alma en un hilo</h2>
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

            <div class="logo-movil">
                <div class="box" style={{ backgroundImage: `url(${img1})` }}></div>
            </div>

            <article class="contactarme pb-5">
                <h6 class="fs-5">Contactanos:</h6>
                <ul class="redes">
                <li class="icon facebook">
                    <span class="nombre-red">Facebook</span>
                    <a href="https://www.facebook.com/El-alma-en-un-hilo-Marionetas-y-Miniaturas--804228576283329" target="_blank">
                        <span>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </span>
                    </a>
                </li>
                <li class="icon instagram">
                    <span class="nombre-red">Instagram</span>
                    <a href="https://www.instagram.com/elalmaenunhilo.marionetas/?hl=es" target="_blank">
                        <span>
                            <FontAwesomeIcon icon={faInstagram} />
                        </span>
                    </a>

                </li>
                <li class="icon youtube">
                    <span class="nombre-red">Youtube</span>
                    <a href="https://www.youtube.com/channel/UC1BkfXOrAE1IfSgi7FUKC3A" target="_blank">
                        <span>
                            <FontAwesomeIcon icon={faYoutube} />
                        </span>
                    </a>

                </li>
                <li class="icon envelope">
                    <span class="nombre-red">Mensaje</span>
                    <NavLink to="/contacto" target="_blank">
                        <span>
                        <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        </NavLink>
                </li>
            </ul>
                <p>Mail: roximarionetas@gmail.com</p>
            </article>
        </main>
    )
}
