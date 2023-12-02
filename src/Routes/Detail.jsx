import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useContextGlobal } from '../Components/utils/global.context'
import { useParams } from 'react-router-dom'
import '../styles/detail.css'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const [dentist, SetDentist] = useState({})

  const {id} = useParams()
  const url = 'https://jsonplaceholder.typicode.com/users/'+ id

  useEffect(() => {
    axios(url)
    .then(res => SetDentist(res.data))
  },[])

  return (
      <div className='detail'>
      <h1>Detail Dentist {dentist.id} </h1>
      <img src="../../public/images/doctor.jpg" alt=""/>
      <h4>Nombre: {dentist.name} </h4>
      <h4>Email:{dentist.email} </h4>
      <h4>Telefono:{dentist.phone}</h4>
      <h4>Sitio web:{dentist.website} </h4>
      </div>
  )
}

export default Detail