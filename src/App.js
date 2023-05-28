import logo from './logo.svg';
import React from 'react';
import './App.css'; // CSS file for styling
import data from './data/data.json'
import { getAnswer } from './backend_api.js';
import { useState } from 'react';

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
  const [questionText, setQuestionText] = useState("");

  const handleGetAnswer = async (currentQuestion) => {
    setAnswer("AI baby is thinking...")
    try {
      const response = await getAnswer(currentQuestion); // Call the getAnswer function from the backend_api.js file
      setAnswer(response);
    } catch (error) {
      console.error(error);
      setAnswer("Something went wrong. Please try again.");
    }
  }

  const handleInputChange = (e) => {
    setQuestionText(e.target.value);
  };

  const handleFeelingLucky = async () => {
    const random_question = data.questions[Math.floor(Math.random() * data.questions.length)];
    setQuestionText(random_question);
    handleGetAnswer(random_question);
  }

  return (
    <div className="card">
      <div className="question_answer">
        <textarea 
          type="text"
          placeholder="Ask a question about your insurance policy."
          className="input-box"
          value={questionText}
          onChange={handleInputChange}
        />
        
        {answer && <p className="card-text">{answer}</p>}
        
        <div className="buttons">
          <button className="btn" onClick={() => handleGetAnswer(questionText)}>Get Answer</button>
          <button className="btn" onClick={() => handleFeelingLucky()}>I'm feeling lucky</button>
        </div>

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
