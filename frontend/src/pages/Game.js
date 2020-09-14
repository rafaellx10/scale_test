import React, { useState, useEffect } from 'react';
import './Game.css';

import api from '../services/api';

function Game({ match, history }) {
  const [myGuess, setMyGuess] = useState(500);
  const [end_game, setEnd_game] = useState(false);

  useEffect(() => {
    function randomNum() {
      setMyGuess(Math.floor(Math.random() * (600 - 400) + 400));
      console.log(match.params.id);
      console.log('ssds', localStorage.getItem('username'));
    }
    randomNum();
  }, []);

  async function handleLessThan(event) {
    event.preventDefault();
    const response = await api.post(`/guess`, {
      value: myGuess,
      status: 'less_than',
      gameId: match.params.id,
    });

    setEnd_game(false);
    setMyGuess(response.data.responseGuessNumber);
  }

  async function handleBiggerThan(event) {
    event.preventDefault();
    const response = await api.post(`/guess`, {
      value: myGuess,
      status: 'bigger_than',
      gameId: match.params.id,
    });

    setEnd_game(false);
    setMyGuess(response.data.responseGuessNumber);
  }

  async function handleEqual(event) {
    event.preventDefault();
    const response = await api.post(`/guess`, {
      value: myGuess,
      status: 'equal',
      gameId: match.params.id,
    });

    setEnd_game(true);
    setMyGuess(response.data.value);
  }

  async function handlePlayAgain(event) {
    event.preventDefault();
    const name = localStorage.getItem('username');

    const response = await api.post('/game', {
      name,
    });

    const { _id } = response.data;
    setMyGuess(Math.floor(Math.random() * (600 - 400) + 400));

    history.push(`/game/${_id}`);
  }

  async function handleGoBack(event) {
    event.preventDefault();
    localStorage.removeItem('username');
    history.push(`/`);
  }

  return (
    <div className="container">
      <div className="content">
        <div className="guess">
          <span>Meu chute é: {myGuess}</span>
        </div>

        {end_game === false && (
          <div className="container-button">
            <button type="button" onClick={(event) => handleLessThan(event)}>
              Menor
            </button>
            <button type="button" onClick={(event) => handleEqual(event)}>
              Igual
            </button>
            <button type="button" onClick={(event) => handleBiggerThan(event)}>
              Maior
            </button>
          </div>
        )}
        {end_game === true && (
          <div className="container-button container-button-end-game">
            <button type="button" onClick={(event) => handlePlayAgain(event)}>
              Jogar novamente
            </button>
            <button type="button" onClick={(event) => handleGoBack(event)}>
              Voltar ao login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Game;
