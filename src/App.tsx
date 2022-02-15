import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { Interface } from 'readline';

interface vars {
  user: any
  name: any
  avatar_url:any
  id:string
  html_url:string
  
}


function App() {
  const [usuario, setUsuario] = useState('')
  const [usuarioData, setUsuarioData] = useState([])

  const url = async (usuario:any) =>{
    const guarda = [] as any
    try{
    const url = await `https://api.github.com/users/${usuario}`
    const res = await axios.get(url)
    guarda.push(res.data)
    setUsuarioData(guarda)
    }catch(e){
      console.log(e)
    }
  }
  
  const handleSubmit = (e:any) => {
    e.preventDefault()
    url(usuario)
   
  }
  
  
  
  
  return (
    <div className="App">
      <div className='container1'>
      <form onSubmit={handleSubmit}>
        <input type='text'
        placeholder='Digite o usuario do Github'
        className='inputUser' 
        onChange={(e) => setUsuario(e.target.value)}
        value={usuario}>  
        </input>
       </form>
      </div>{/*container1*/}

      {usuarioData.map((usuarios:vars) =>{
          return(
            <div className='container2'>
              {usuarios.name}
              <div className='photo'>
              <img src={usuarios.avatar_url} className='photo'></img>
              </div>
              <div className='id'>
               User ID: {usuarios.id}
                </div>

              <div className='link'>
                <a href={usuarios.html_url} target="_blank" className='link'>Click me for Github URL!</a>
                </div>
            </div>
          )
        })}
    </div>
  );
}

export default App;
