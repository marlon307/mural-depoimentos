import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Depoimento from './components/Depoimento';
import FormDepoiment from './components/FormDepoiment';
import socket from './socket';

function App() {

  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    socket.on('resTestimony', (item) => {
      console.log(item);
      if (item.user) {
        setTestimonial([
          ...testimonial,
          item
        ]);
      }
    })
  }, [testimonial])

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
