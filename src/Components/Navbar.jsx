import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'
import "../styles/Navbar.css"
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, dispatch} = useContextGlobal()


  return (
    <nav className= {` ${state.theme} nav`} >
      <div><h3>El lugar que te saca una sonrisa</h3></div>
      <div className='links'>
      <Link to= "/"><h4>Home</h4></Link>
      <Link to= "/Favs"><h4>Favs</h4></Link>
      <Link to= "/Contact"><h4>Contact</h4></Link>
      <button onClick={() => dispatch({type: 'CHANGE_THEME'})} >{state.theme === 'light' ? '🌙' : '☀️'}</button>
      </div>
    </nav>
  )
}

export default Navbar








