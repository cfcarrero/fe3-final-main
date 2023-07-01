import React from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import { useContext } from "react";

const Card = ({ name, username, id }) => {
  const { dentistaState, dentistaDispatch } = useContext(ContextGlobal);

  const esFav = dentistaState.favList.find((fav) => fav.id === id);

  const addFav = (e) => {
    // Aqui iria la logica para agregar la Card en el localStorage
    e.stopPropagation();
    if (esFav != null) {
      dentistaDispatch({ type: "DELETE_FAV", payload: id });
    } else {
      dentistaDispatch({ type: "ADD_FAV", payload: { name, username, id } });
    }
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <img src={"./images/doctor.jpg"} alt="doctor-logo" className="images" />
      <Link to={"/detail/" + id}>
        <h3>{name}</h3>
      </Link>
      <p>{username}</p>
      <p>Id: {id}</p>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button
        onClick={addFav}
        className={esFav ? "favButton isFav" : "favButton"}
      >
        {esFav ? "Remove fav" : "Add fav"}
      </button>
    </div>
  );
};

export default Card;
