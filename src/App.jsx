import './App.scss';
import { CV } from './Data/CV/cv';
import Front from './components/Front'
import React,{ useState } from 'react';
import Dropdown from './components/DropDown/Dropdown';

function App() {
  return (
    <div className="App">
      <div className='containerTitulo'>
        <h1>{CV.hero.name}</h1>
        <h2>"Curriculum Vitae"</h2>
      </div>
      <Front data={CV}/>
      <Dropdown />
    </div>
  );
}

export default App;
