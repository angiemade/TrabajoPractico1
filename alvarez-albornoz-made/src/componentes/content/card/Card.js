import React, { useState } from 'react'
import './card.css'


function Card({ name, about, job, img1}) {

  return (
    <div className='card'>
      <div className='contenedor_imagen'>
        <div className='imagen'>
          <img src={img1} alt="imagen1" />
        </div>
      </div>
      <div className='contenido'>
        <h3 className='nombre'> {name} </h3>
        <div className='descripcion'>
          <h4> {job} </h4>
          <p>  {about} </p>
        </div>
      </div>
    </div>
  )
}

export default Card;