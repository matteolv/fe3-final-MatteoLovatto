import { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "../../Reducer/reducer";
import axios from "axios";
import { useParams } from "react-router-dom";

 const initialState = {
  theme: 'light',
  list:[],
  favs: JSON.parse(localStorage.getItem('favs')) || [],
}

 const ContextGlobal = createContext();

 const ContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState)
  const {theme, list, favs} = state
  
  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() =>{
    axios(url)
    .then(res => dispatch({type: 'GET_DENTISTS', payload: res.data}))
  },[])

  useEffect(() =>{
    localStorage.setItem('favs', JSON.stringify(favs))
  },[favs])

  const cambiarTema = () =>{
    dispatch({type: 'CHANGE_THEME'})
  }

  return (
    <ContextGlobal.Provider value={{theme,list,favs,dispatch, cambiarTema}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)