import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Depoimento from './components/Depoimento';
import FormDepoiment from './components/FormDepoiment';
import socket from './socket';

function App() {

  const [testimonial, setTestimonial] = useState([]);


  // Load all Depoiment after render page
  useEffect(() => {
    socket.emit("loadAllDepoiment");// Faz uma chamada no servidor
    socket.on('returnloadAllDepoiment', (item) => {//Aqui temos a resposta com o array
      if (item[0].user) {
        setTestimonial(item);
      }
    })
  }, [])

  // update Array after click send 
  useEffect(() => {
    socket.on('resTestimony', (item) => { //Quando houver um clique no botão de enviar sera atualizado o array, inserindo um objeto com as novas informações
      if (item.user) {
        setTestimonial([
          ...testimonial,
          item
        ]);
      }
    })
  }, [testimonial]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mural de depoimentos</h1>
      </header>
      <main>
        { testimonial.map(({ user, text }, index) =>
          <Depoimento
            key={ index }
            img={ logo }
            text={ text }
            userName={ user }
          />) }
        <FormDepoiment />
      </main>
    </div>
  );
}

export default App;
