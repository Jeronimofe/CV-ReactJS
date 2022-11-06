import React from 'react'
import { CV } from '../../../Data/CV/cv'
import './Academico.scss'

const Academico = () => {
const {education} = CV

  return (
    <div className='Div_estudios'>
      <h3>Registro Academico</h3>
      <div className='Div_estudiosmedio'>
        {education.map((edu) => {
            return (
                <div className='div_edu'>
                    <p>Nombre: {edu.name}</p>
                    <p>Año: {edu.date}</p>
                    <p>Institución: {edu.where}</p>
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default Academico