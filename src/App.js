import React from 'react';
import './App.scss';
import SnakeField from './components/SnakeField/Field';
import Header from './components/Header/Header';
import Alert from './components/Alert/Alert';

function App() {
  return (
    <>
      <Header />
      <Alert />
      <SnakeField />
    </>
  );
}

export default App;
