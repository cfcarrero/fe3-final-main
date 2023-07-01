import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
    setError("");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError("");
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validaciones del formulario
    if (name.length <= 5 || !email.includes("@")) {
      setError("Por favor verifique su información nuevamente");
      return;
    }

    // Mostrar mensaje de éxito
    setSuccessMessage(
      `Gracias ${name}, te contactaremos cuanto antes vía correo electrónico`
    );

    // Limpiar los campos del formulario
    setName("");
    setEmail("");
    setError("");
  };

  return (
    <div className="form-container">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit" className="form-Button">
          Send
        </button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default Form;
