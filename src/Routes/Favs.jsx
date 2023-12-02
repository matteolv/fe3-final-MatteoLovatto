import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { favs } = useContextGlobal();


  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.map((dentistas) => (
          <Card key={dentistas.id} dentistas={dentistas} />
        ))}
      </div>
    </>
  );
};

export default Favs;
