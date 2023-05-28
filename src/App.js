import logo from './logo.svg';
import React from 'react';
import './App.css'; // CSS file for styling
import data from './data/data.json'
import { getAnswer } from './backend_api.js';
import { useState, useEffect } from 'react';

function Card() {
  return (
    <div className="card">
      <img
        src={logo}
        alt="Card"
        className="card-image"
      />
      <h1 className="card-title">{data.project_title}</h1>
      <p className="card-text">{data.project_description}</p>
    </div>
  );
}

function QuestionAnswer() {
  const [answer, setAnswer] = useState(null);
  const [inputText, setInputText] = useState('');

  const handleGetAnswer = async () => {
    setAnswer("AI baby is thinking...")
    try {
      const response = await getAnswer(inputText); // Call the getAnswer function from the backend_api.js file
      console.log("Printing response", response)
      setAnswer(response);
    } catch (error) {
      console.error(error);
    }
  }

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="card">
      <div className="question_answer">
        <textarea 
          type="text"
          placeholder="" 
          className="input-box"
          value={inputText}
          onChange={handleInputChange} 
        />
        
        {answer && <p className="card-text">{answer}</p>}
        
        <button onClick={handleGetAnswer}>Get Answer</button>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Card />
      <QuestionAnswer />
    </div>
  );
}

export default App;
