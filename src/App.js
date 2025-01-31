import React, { useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);

  const [incrementValue, setIncrementValue] = useState(1);

  const increment = () => setCounter(counter + incrementValue);

  const decrement = () => {
    if (counter - incrementValue >= 0) {
      setCounter(counter - incrementValue);
    }
  };

  const handleIncrementByChange = (event) => {
    let value = event.target.innerText.trim();
  
    if (!isNaN(value) && value !== "") {
      setIncrementValue(Number(value));
    } else {
      setIncrementValue(0);
    }
  };
  

  return (
    <div className="app">
      <header className="app-header">
        <img className="logo" src={require('./logop.svg').default} alt="logop" />
      </header>
      <main className="app-main">
        <h1>{counter}</h1>
        <div className="action">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
        <div className="increment-container">
        <div className="increment-value" contentEditable="true" onInput={handleIncrementByChange}>{incrementValue} </div>
          <div className="increment-label">increment by</div>
        </div>
      </main>
    </div>
  );
}  

export default App;