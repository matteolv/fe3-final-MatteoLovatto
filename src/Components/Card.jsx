import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";


const Card = ({ dentistas }) => {

  const {state, dispatch} = useContextGlobal()
  const findFav = state.favs.find((fav) => fav.id === dentistas.id)
  
  const addFav = () => {
    const favFilter = state.favs.find(card => card.id === dentistas.id);

    if (!favFilter) {
      dispatch({ type: 'ADD_FAV', payload: { ...dentistas } });
      alert('La tarjeta se agregó correctamente a tus favoritos!');
    } else {
      dispatch({ type: 'DELETE_FAV', payload: { ...dentistas } });
      alert('La tarjeta se ha eliminado correctamente de tus favoritos!');
    }
  }

  return (
    <div className={`card ${state.theme}`}>
        <Link to={'Detail/' + dentistas.id} >
        <img src="images/doctor.jpg" alt="doctores" />
        <h4>{dentistas.name} </h4>
        <p>{dentistas.username} </p>
        </Link>
        <button onClick={addFav} className="favButton">{findFav ? '🖤' : '❤️'}</button>
    </div>
  );
};

export default Card;
