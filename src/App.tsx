import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import Start from './pages/StartPage/StartPage';
import GameOver from './pages/GameOverPage/GameOverPage';
import Game from './pages/GamePage/GamePage';
import './fonts/Inter/static/Inter-Regular.ttf';
import './styles/variables.css';
import './styles/styles.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Start />} />
      <Route path='game' element={<Game />} />
      <Route path='gameover' element={<GameOver />} />
      <Route path='*' element={<NoMatch />} />
    </Routes>
  );
}

export default App;
