import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Dentist = () => {
  const { dentistaState, dentistaDispatch } = useContext(ContextGlobal);
  const params = useParams();

  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios(url).then((res) =>
      dentistaDispatch({ type: "SET_DETAIL", payload: res.data })
    );
  }, []);

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const dentista = dentistaState?.dentista;

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <h1>Dentist id # {dentista.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
          <tr>
            <td>{dentista.name}</td>
            <td>{dentista.email}</td>
            <td>{dentista.phone}</td>
            <td>{dentista.website}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={goBack} className="back-button">
        Atras
      </button>

      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  );
};

export default Dentist;
