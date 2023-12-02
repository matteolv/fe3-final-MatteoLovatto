import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {list} = useContextGlobal()

  return (
    <main className="home">
      <h1>Home</h1>
      <div className='card-grid'>
        {list.map(dentistas => <Card dentistas={dentistas} key= {dentistas.id} />)}
      </div>
    </main>
  )
}

export default Home