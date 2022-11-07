import React, {useState} from 'react'
import Academico from './Academico/Academico';
import './Dropdown.scss'
import Experiencia from './Exp/Experiencia';
import Habilidades from './Habilidades/Habilidades';
import InfoGeneral from './InfoGeneral/InfoGeneral';
import { CV } from '../../Data/CV/cv';

const Dropdown = () => {
const [show, setShow]= useState('Información General');


    return (
        <div className='Dropdown'>
            <select className='select' onChange={(e) => setShow(e.target.value)}>
                <option value='Información General'>Información General</option>
                <option value='Experiencia Laboral'>Experiencia Laboral</option>
                <option value='Historial Academico'>Historial Academico</option>
                <option value='Habilidades'>Habilidades</option>
            </select>
            <div className='DropInner'>
            {show === 'Información General' &&
            <InfoGeneral/>}
            {show === 'Experiencia Laboral' &&
            <Experiencia/>}
            {show === 'Historial Academico' &&
            <Academico/>}
            {show === 'Habilidades' &&
            <Habilidades/>}
            </div>
        </div>
    )
}

export default Dropdown