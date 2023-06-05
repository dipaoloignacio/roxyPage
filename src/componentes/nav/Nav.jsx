import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-propio sticky-sm-top">
            <div className="container-fluid ">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse justify-content-around collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav d-flex flex-wrap">
                        <li className="nav-item ms-1">
                            <button className="boton-nav"><NavLink className="text-light" aria-current="page"
                                to="/">Inicio</NavLink></button>
                        </li>
                        <li className="nav-item ms-1">
                            <button className="boton-nav"><NavLink className="text-light" aria-current="page"
                                to="/talleres">talleres</NavLink></button>
                        </li>
                        <li className="nav-item ms-1">
                            <button className="boton-nav"><NavLink className="text-light" aria-current="page"
                                to="/intervenciones">intervenciones</NavLink></button>
                        </li>
                        <li className="nav-item ms-1">
                            <button className="boton-nav"><NavLink className="text-light" aria-current="page"
                                to="/espectaculos">espectáculos</NavLink></button>
                        </li>
                        <li className="nav-item ms-1">
                            <button className="boton-nav"><NavLink className="text-light" aria-current="page"
                                to="/compania">compañía</NavLink></button>
                        </li>
                        <li className="nav-item ms-1">
                            <button className="boton-nav"><NavLink className="text-light" aria-current="page"
                                to="/contacto">contacto</NavLink></button>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}
