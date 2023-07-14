import React from 'react'
import { Carrusel } from '../../carrusel/Carrusel'

import foto1 from '../../../imagenes/Agenda/foto1.jpeg'
import foto2 from '../../../imagenes/Agenda/foto2.jpeg'
import foto3 from '../../../imagenes/Agenda/foto3.jpeg'
import foto4 from '../../../imagenes/Agenda/foto4.jpeg'
import foto5 from '../../../imagenes/Agenda/foto5.jpeg'
import foto6 from '../../../imagenes/Agenda/foto6.jpeg'
import foto7 from '../../../imagenes/Agenda/foto7.jpeg'
import foto8 from '../../../imagenes/Agenda/foto8.jpeg'

const fotosAgenda = [
  {
    id: 1,
    img: foto1
  },
  {
    id: 1,
    img: foto2
  },
  {
    id: 1,
    img: foto3
  },
  // {
  //   id: 1,
  //   img: foto4
  // },
  {
    id: 1,
    img: foto5
  },
  {
    id: 1,
    img: foto6
  },
  {
    id: 1,
    img: foto7
  },
  {
    id: 1,
    img: foto8
  }
]

export const Agenda = () => {
  return (
    <div className='container-agenda'>
      <Carrusel fotos={fotosAgenda} />

      <h1> Agenda Julio 2023</h1>
      <h3>Obra </h3>
      <h5>¿Dónde está Borondongo?</h5>
      <ul>
        <li> <strong>13/07</strong> 16:30 hs Espacio Arizu <br />
          Godoy Cruz -Mendoza-</li>
        <li> <strong>14/07</strong> 15:30 hs Centro Cultural Pascual Lauriente<br />
          Guaymallen - Mendoza-</li>
        <li> <strong>15/07</strong> 16:30 hs Mediateca Manuel Belgrano<br />
          Godoy Cruz - Mendoza-</li>
      </ul>

      <h5>ENDERAS MASUGUI -el viaje de Luisa-</h5>
      <h5>“Festival Internacional de Teatro Al Sur”
        Catalinas Sur</h5>

      <ul>
        <li> <strong>18/07</strong> 18:00 hs Teatro Roma <br />
          Avellaneda - Buenos Aires-</li>
        <li> <strong>21/07</strong> 16:30 hs La Bancaria Teatro<br />
          Buenos Aires-</li>
        <li> <strong>22/07</strong> 17:00 hs Espacio Pompas<br />
          Brasil 2640 - Buenos Aires-</li>
        <li> <strong>23/07</strong> 16:30 hs El Galpón de Catalinas<br />
          Pérez Galdós 93 - Buenos Aires-</li>
        <li> 20:00 hs El Galpón de Catalinas<br />
          Pérez Galdós 93 - Buenos Aires-</li>
      </ul>

      <h5>TAF “Transbordador Escénico TAF - Teatro Argentino Federal”</h5>

      <ul>
        <li><strong>27/07</strong> Sala TAFF Tecnópolis <br />
          Villa Martelli - Buenos Aires</li>
      </ul>

      <h5>“ Venite de vacaciones al Cervantes”</h5>
      <ul>
        <li><strong>29/07</strong> 15:00 hs Sala Orestes Caviglia <br />
          Teatro Nacional Cervantes - Buenos Aires</li>
        <li><strong>30/07</strong> 15:00hs Sala Orestes Caviglia <br />
          Teatro Nacional Cervantes - Buenos Aires</li>
      </ul>
    </div>
  )
}
