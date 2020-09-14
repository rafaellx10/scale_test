import React, { useState } from 'react';
import './Login.css';

import api from '../services/api';

function Login({ history }) {
  const [name, setName] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    console.log(name);
    const response = await api.post('/game', {
      name,
    });

    localStorage.setItem('username', name);

    const { _id } = response.data;

    history.push(`/game/${_id}`);
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">Jogar</button>
      </form>
    </div>
  );
}

export default Login;
