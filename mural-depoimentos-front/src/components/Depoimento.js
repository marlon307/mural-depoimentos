import React from 'react';

function Depoimento({ img, userName, text }) {
  return (
    <section className="depoimento">
      <div className="photo">
        <img src={ img } alt="imageName" />
      </div>
      <p className="userName">User: { userName }</p>
      <span className="text">
        <p>{ text }</p>
      </span>
    </section>
  )
}

export default Depoimento
