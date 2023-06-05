import React from 'react'

import { NavLink } from 'react-router-dom'
import enderas from '../../../../imagenes/espectaculos/CARD-ENDERAS.jpg'
import mimamamemima from '../../../../imagenes/espectaculos/CARD-MI-MA-MA-ME-MI-MA-.jpg'
import borondongo from '../../../../imagenes/espectaculos/borondongo.jpg'
export const Marionetas = () => {
    return (
        <div>
            <main class="container-marionetas">

                <h2> Nuestras obras de Marionetas</h2>

                <div class="images-marionetas">

                    <div class="card-marionetas">
                        <NavLink to='/enderas-masugui' class="foto-taller">
                            <img src={enderas}
                                class="img-fluid" alt="Obra de marionetas de Rosana Lopez Enderas Masugui." />
                        </NavLink>
                    </div>

                    <div class="card-marionetas">
                        <NavLink to='/mimamamemima' class="foto-taller">
                            <img src={mimamamemima}
                                class="img-fluid" alt="Obra de marionetas de Rosana Lopez MI-MA-MA-ME-MI-MA." />
                        </NavLink>
                    </div>

                    <div class="card-marionetas">
                        <NavLink to='/borondongo' class="foto-taller">
                            <img src={borondongo}
                                class="img-fluid" alt="Obra de marionetas de Rosana Lopez donde-está-Borondongo?." />
                        </NavLink>

                    </div>

                </div>
            </main>
        </div>
    )
}
