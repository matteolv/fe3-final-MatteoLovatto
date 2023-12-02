import React from 'react'
import '../styles/footer.css'
import { useContextGlobal } from './utils/global.context'
const Footer = () => {

  const {state} = useContextGlobal()

  return (
    <footer className= {`${state.theme}`}>
      <div className='logo'>
        <p>Powered by</p>
        <img src="images/DH.png" alt='DH-logo' />
      </div>
      <div className='redes'>
        <img src="images/ico-instagram.png" alt="instagram" />
        <img src="images/ico-facebook.png" alt="facebook" />
        <img src="images/ico-whatsapp.png" alt="whatsapp" />
        <img src="images/ico-tiktok.png" alt="" />
      </div>
    </footer>
  )
}

export default Footer
