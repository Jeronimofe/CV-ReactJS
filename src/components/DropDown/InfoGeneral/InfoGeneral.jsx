import React from 'react'
import { CV } from '../../../Data/CV/cv'
import './InfoGeneral.scss'



const InfoGeneral = () => {
  const {hero} = CV
    return (
    <div className='Div_InfoGeneral'>
    <h3>Información General</h3>
      <div className='div_info'>
        <h4>Datos Personales</h4>
        <p>Nacimiento: {hero.birthDate}</p>
        <p>Ciudad de Residencia: {hero.city}</p>
        <p>Nombre Completo: {hero.name}</p>
      </div>
      <div className='div_info'>
        <h4>Contacto</h4>
        <p>Celular: {hero.phone}</p>
        <p>Correo Electrónico: {hero.email}</p>
        <p>GitHub: {hero.gitHub}</p>
      </div>
      <div className='div_sobremi'>
        <h4>Sobre Mi</h4>
        <p>{hero.aboutMe}</p>
      </div>
    </div>
  )
  
}

export default InfoGeneral