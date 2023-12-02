import React, { useState } from "react";
import '../styles/form.css'


const Form = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
  });

  const [error, setError] = useState(false);
  const [okay, setOkay] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (usuario.nombre.length > 5 && usuario.email.includes("@")) {
      setError(false);
      setOkay(true);
      console.log({ ...usuario });
    } else {
      setError(true);
      setOkay(false);
    }
  };



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })} />
        <label>Email</label>
        <input type="text" onChange={(e) => setUsuario({ ...usuario, email: e.target.value })} />
        <button type="submit">Send</button>
      </form>
        {error && <p style={{color: 'red'}}>Por favor verifique su información nuevamente</p>}
        {okay && <p style={{color: 'green'}}>Gracias {usuario.nombre}, te contactaremos cuando antes vía mail</p> }
    </div>
  );
};

export default Form;
