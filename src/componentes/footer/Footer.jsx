import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faYoutube, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
    
    return (
        <footer class="d-flex justify-content-center">
            <p class="m-0 p-4">Rosana Lopez-Marionetas. --Sociales:</p>
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
                    <a href="../pages/contact.html" target="_blank">
                        <span>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                    </a>
                </li>
            </ul>
        </footer>
    )
}
