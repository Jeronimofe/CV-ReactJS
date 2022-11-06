import React from 'react'
import { CV } from '../../../Data/CV/cv'

const Habilidades = () => {
  const {habilities} = CV;
  const {Aficiones} = CV;

  return (
    <div className='Div_Habilidades'>
      <div className='div_software'>
        <h3>Manejo de Softwares</h3>
        {habilities.map((hab) => {
          return (
            <p>{hab}</p>
          )
        })
        }
      </div>
      <div className='div_conocimientos'>
        <h3>Conocimientos y Aficiones</h3>
        {Aficiones.map((afc) => {
          return (
            <p>{afc}</p>
          )
        })
        }
      </div>
    </div>
  )
}

export default Habilidades