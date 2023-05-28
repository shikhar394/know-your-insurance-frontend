import React from 'react';
import './App.css'; // CSS file for styling
import Card from './Card.js';
import QuestionAnswer from './QuestionAnswer.js';

function App() {
  return (
    <div className="app">
      <Card />
      <QuestionAnswer />
    </div>
  );
}

export default App;
