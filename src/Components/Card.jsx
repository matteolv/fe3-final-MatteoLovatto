import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";


const Card = ({ dentistas }) => {

  const {favs, dispatch} = useContextGlobal()
  const findFav = favs.find((fav) => fav.id === dentistas.id)
  const addFav = () => {
    if(findFav){
      dispatch({type: 'DELETE_FAV', payload: dentistas.id})
    }
    dispatch({type: 'ADD_FAV', payload: dentistas})
  }

  return (
    <div className="card">
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
