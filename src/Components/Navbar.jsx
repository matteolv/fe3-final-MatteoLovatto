import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'
import '../styles/navbar.css'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {theme, cambiarTema} = useContextGlobal()

  //const claseTema = theme !== 'light' ? 'dark' : 'light'
  
  return (
    <nav className={`nav {claseTema}`}>
      <div><h3>El lugar que te saca una sonrisa</h3></div>
      <div className='links'>
      <Link to= "/"><h4>Home</h4></Link>
      <Link to= "/Favs"><h4>Favs</h4></Link>
      <Link to= "/Contact"><h4>Contact</h4></Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={cambiarTema()}>🌙</button>
      </div>
    </nav>
  )
}

export default Navbar