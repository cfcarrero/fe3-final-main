import React from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { dentistaState } = useContext(ContextGlobal);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        <div className="card-grid">
          {dentistaState.favList.length > 0 ? (
            dentistaState.favList.map((dentista) => (
              <Card
                key={dentista.id}
                name={dentista.name}
                username={dentista.username}
                id={dentista.id}
              />
            ))
          ) : (
            <p>Sin favortios</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Favs;
