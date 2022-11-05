import React, {useState} from 'react'
import Academico from './Academico/Academico';
import './Dropdown.scss'
import Experiencia from './Exp/Experiencia';
import Habilidades from './Habilidades/Habilidades';
import InfoGeneral from './InfoGeneral/InfoGeneral';

const Dropdown = () => {
const [showInfo, setShowInfo]= useState(true);
const [showexperience, setShowExperience]= useState(false);
const [showAcademico, setShowAcademico]= useState(false);
const [showHabilidades, setShowHabilidades]= useState(false);

function Funcion(){
    const $$select = document.getElementsByClassName('select')
    const $$valor= $$select[0].options[$$select[0].selectedIndex].value
    
    
    if($$valor==='Información General'){
        if(!!showHabilidades){
            setShowHabilidades(!showHabilidades)
            setShowInfo(!showInfo)
        }
        if(!!showAcademico){
            setShowAcademico(!showAcademico)
            setShowInfo(!showInfo)
        }
        if(!!showexperience){
            setShowExperience(!showexperience)
            setShowInfo(!showInfo)
        } 
        else{
            setShowExperience(!!showInfo)
        }
        
    } else if($$valor==='Experiencia Laboral'){
        if(!!showInfo){
            setShowInfo(!showInfo)
            setShowExperience(!showexperience)
        }
        if(!!showHabilidades){
            setShowHabilidades(!showHabilidades)
            setShowExperience(!showexperience)
            console.log($$valor)
        }
        if(!!showAcademico){
            setShowAcademico(!showAcademico)
            setShowExperience(!showexperience)
            console.log($$valor)
        } 
        else {
            setShowExperience(!showexperience)
        }
        
        
    } else if($$valor==='Habilidades'){
        if(showInfo === true){
            setShowInfo(!showInfo)
            setShowHabilidades(!showHabilidades)
        }
        if(!!showAcademico){
            setShowAcademico(!showAcademico)
            setShowHabilidades(!showHabilidades)
        }
        if(!!showexperience){
            
            setShowExperience(!showexperience)
            setShowHabilidades(!showHabilidades)
        } else{
            setShowHabilidades(!showHabilidades)
        }
        
    } else if($$valor==='Historial Academico'){
        if(!!showHabilidades){
            setShowHabilidades(!showHabilidades)
            setShowAcademico(!showAcademico)
        }
        if(showInfo === true){
            setShowInfo(!showInfo)
            setShowAcademico(!showAcademico)
        }
        if(!!showexperience){
            setShowExperience(!showexperience)
            setShowAcademico(!showAcademico)
        } else{
            setShowAcademico(!showAcademico)
        }
        
    }
}
  return (
        <div className='Dropdown'>
            <select className='select' onChange={(e) => Funcion()}>
                <option value='Información General'>Información General</option>
                <option value='Experiencia Laboral'>Experiencia Laboral</option>
                <option value='Historial Academico'>Historial Academico</option>
                <option value='Habilidades'>Habilidades</option>
            </select>
            <div className='DropInner'>
            {showInfo ?
            <InfoGeneral/>
            : <></>}
            {showexperience ?
            <Experiencia/>
            : <></>}
            {showAcademico ?
            <Academico/>
            : <></>}
            {showHabilidades ?
            <Habilidades/>
            : <></>}
            </div>
            
        </div>
    )
}

export default Dropdown