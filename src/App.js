import React, { useState, useEffect } from 'react';
import './App.css';
import startIcon from './image/start.svg';
import stopIcon from './image/stop.svg';
import ellipseIcon from './image/ellipse.svg';

function App() {

  const [counter, setCounter] = useState(0);

  const [incrementValue, setIncrementValue] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const [increamentInterval, setIncrementIterval] = useState(100);

  const increment = () => setCounter(counter + incrementValue);

  const decrement = () => {
    if (counter - incrementValue >= 0) {
      setCounter(counter - incrementValue);
    }
  };

  const running = () => {
    setIsRunning(true);
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + incrementValue);
      }, increamentInterval);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, incrementValue]);

  const handleIncrementByChange = (event) => {
    let value = event.target.innerText.trim();
  
    if (!isNaN(value) && value !== "") {
      setIncrementValue(Number(value));
    } else {
      setIncrementValue(0);
    }
  };

  const handleIntervalByChange = (event) => {
    let value = event.target.innerText.trim();
  
    if (!isNaN(value) && value !== "") {
      setIncrementIterval(Number(value));
    } else {
      setIncrementIterval(100);
    }
  };

  

  return (
    <div className="app">
      <header className="app-header">
        <img className="logo" src={require('./image/logop.svg').default} alt="logop" />
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
        <div className='start-stop'>
          <button onClick={running} disabled={isRunning}>
            <img src={startIcon} alt="Start" /> Start
          </button>
          <button onClick={() => setIsRunning(false)}>
            <img src={stopIcon} alt="Stop" /> Stop
          </button>
        </div>
        <div className="increament-interval">
        <input type="range" min="100" max="3000" step="10" value={increamentInterval} onChange={handleIntervalByChange} className='slider'/>
        </div>
        <div className='seconds'>
          <div className="seconds-value">{(increamentInterval / 1000).toFixed(1)} </div>
          <div className="seconds-label">seconds</div>
        </div>
      </main>
    </div>
  );
}  

export default App;