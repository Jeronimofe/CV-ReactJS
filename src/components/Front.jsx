import React, { useState } from 'react'
import './Front.scss'


const Front = (props) => {
    return (
        <div>
            <div className='divImagenFront'>
            <img src={props.data.hero.image.Imagen} alt='Jeronimo Fernandez' className='imagenFront'></img>
            </div>
        </div>
    )
}

export default Front