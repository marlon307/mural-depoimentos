import React, { useState } from 'react';
import socket from '../socket'

function FormDepoiment() {
  const [valueInputs, setValuesInputs] = useState({
    userName: '',
    testimonial: '',
  });

  function handleChange({ target }) {
    const { name, value } = target;
    setValuesInputs({
      ...valueInputs,
      [name]: value,
    })
  }

  function handleClick(event) {
    event.preventDefault();
    socket.emit('sendDepoiment', valueInputs);
  }

  return (
    <form>
      <fieldset>
        <label htmlFor="user-name">
          <span>Usuário:</span>
          <input
            id="user-name"
            onChange={ handleChange }
            type="text"
            name="userName"
          />
        </label>
        <label htmlFor="depoiment">
          <span>Depoimento:</span>
          <input
            id="depoiment"
            type="text"
            name="testimonial"
            onChange={ handleChange }
          />
        </label>
        <button onClick={ handleClick }>Enviar</button>
      </fieldset>
    </form>
  )
}

export default FormDepoiment;
