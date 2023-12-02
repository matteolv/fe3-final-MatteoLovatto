
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail"
import Contact from "./Routes/Contact"
import { useContextGlobal } from "./Components/utils/global.context";


//Hola profe, luche como loco para hacer que el footer quede en el fondo de la pagina pero no hubo caso 😅.
//Si en el feedback me puede decir como arreglarlo se lo agradeceria muchisimo
function App() {
  return (
      <div className="App">
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favs" element={<Favs/>}/>
          <Route path="/Detail/:id" element={<Detail/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
          <Footer/>
      </div>
  );
}

export default App;
