import React, { useContext } from "react";

import { Link, navigate } from "react-router-dom";
import { routes } from "./utils/routes";
import { ContextGlobal } from "./utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { themeState, themeDispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    themeDispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div className="logo-nav">
        <h1 className="logo-first">D</h1>
        <h1>H Odonto</h1>
      </div>
      <div className="navbar">
        {/* <button onClick={() => navigate(-1)}>↩Back</button> */}
        <Link to={routes.home}>
          <h4 className="link">Home</h4>
        </Link>
        <Link to={routes.contact}>
          <h4 className="link">Contact</h4>
        </Link>
        <Link to={routes.favs}>
          <h4 className="link">Favs</h4>
        </Link>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

        <button className="theme-button" onClick={toggleTheme}>
          {themeState.darkMode ? "Dark Theme" : "Light Theme"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
