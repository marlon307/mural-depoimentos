import React from 'react';
import { io } from 'socket.io-client';

function FormDepoiment({ img, userName, text }) {
  function hadleClick(event) {
    event.preventDefault();
  }

  return (
    <form>
      <fieldset>
        <label htmlFor="user-name">
          <span>Usuário:</span>
          <input id="user-name" type="text" name="user-name" />
        </label>
        <label htmlFor="depoiment">
          <span>Depoimento:</span>
          <input id="depoiment" type="text" name="depoiment" />
        </label>
        <button onClick={ hadleClick }>Enviar</button>
      </fieldset>
    </form>
  )
}

export default FormDepoiment;
