import { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "../../Reducer/reducer";
import axios from "axios";


 const initialState = {
  theme: "light",
  list:[],
  favs: JSON.parse(localStorage.getItem('favs')) || [],
}

 const ContextGlobal = createContext();

 const ContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() =>{
    axios(url)
    .then(res => dispatch({type: 'GET_DENTISTS', payload: res.data}))
  },[])

  useEffect(() =>{
    localStorage.setItem('favs', JSON.stringify(state.favs))
  },[state.favs])



  return (
    <ContextGlobal.Provider value={{ state ,dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)