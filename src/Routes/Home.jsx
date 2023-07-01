import Card from "../Components/Card";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { dentistaState } = useContext(ContextGlobal);

  const dentistas = dentistaState.dentistaList;

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {dentistas.map((dentista) => (
          <Card
            name={dentista.name}
            username={dentista.username}
            id={dentista.id}
            key={dentista.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
