import React from 'react'
import { CV } from '../../../Data/CV/cv'
import './Experiencia.scss'

const Experiencia = () => {
const {experience} = CV

    return (
    <div className='Div_experiencia'>
        <h3>Experiencia Laboral</h3>
        <div className='Div_medioexp'>
            {experience.map((exp) => {
                return (
                        <div className='div_exp'>
                            <p>Nombre: {exp.name}</p>
                            <p>Fecha: {exp.date}</p>
                            <p>Institución: {exp.where}</p>
                            <p>Descripcion del puesto: {exp.description}</p>
                        </div>
                )
            })}
        </div>
    </div>
    )
}

export default Experiencia