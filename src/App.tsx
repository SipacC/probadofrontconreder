// src/App.jsx
import { useState } from 'react';

function App() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarClick = () => {
    if (nombre.trim() === '') {
      setMensaje('Por favor ingresa un nombre primero 😉');
    } else {
      setMensaje(`${nombre} eres gay por presionarme 😂`);
      setNombre(''); // Limpia el campo
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'Arial, sans-serif' }}>
      <h1>¡Interfaz React divertida y un poco picante!</h1>

      <input
        type="text"
        placeholder="Ingresa tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        style={{ padding: '10px', fontSize: '16px', width: '250px' }}
      />

      <br />

      <button
        onClick={manejarClick}
        style={{
          marginTop: '15px',
          padding: '10px 25px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#6200ea',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Presióname
      </button>

      {mensaje && (
        <p
          style={{
            marginTop: '20px',
            fontSize: '18px',
            color: '#4B0082', // color morado oscuro que resalta
            fontWeight: 'bold',
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
          }}
        >
          {mensaje}
        </p>
      )}
    </div>
  );
}

export default App;
