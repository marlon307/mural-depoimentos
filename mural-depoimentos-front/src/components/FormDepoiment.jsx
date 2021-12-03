import React from 'react'

function FormDepoiment({ img, userName, text }) {
  return (

    <form>
      <fieldset>
        <label>
          Usuário:
          <imput type="text" name="user-name"/>
        </label>
        <label>
          Depoimento:
          <imput type="text" name="depoiment"/>
        </label>
        <button>Enviar</button>
      </fieldset>
    </form>
  )
}

export default FormDepoiment;