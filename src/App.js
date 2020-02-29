import React from 'react';
import './App.scss';
import SnakeField from './components/SnakeField/Field';
import Header from './components/Header/Header';
import Alert from './components/Alert/Alert';
import ScoreBoardContainer from './components/ScoreBoard/ScoreBoardContainer';

function App() {
  return (
    <>
      <Header />
      <Alert />
      <SnakeField />
      <ScoreBoardContainer />
    </>
  );
}

export default App;
