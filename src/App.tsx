import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GameOverPage from './pages/GameOverPage/GameOverPage';
import GamePage from './pages/GamePage/GamePage';
import StartPage from './pages/StartPage/StartPage';
import NoMatchPage from './pages/NoMatchPage';

import './fonts/Inter/static/Inter-Regular.ttf';
import './styles/variables.css';
import './styles/styles.css';

const App = () => (
  <Routes>
    <Route path="/game-millionaire/" element={<StartPage />} />
    <Route path="/game-millionaire/game" element={<GamePage />} />
    <Route path="/game-millionaire/gameover" element={<GameOverPage />} />
    <Route path="*" element={<NoMatchPage />} />
  </Routes>
);

export default App;
