import React, { useState } from 'react';
import './App.css';
import { Timer } from './components/Timer'

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(60);
  const [key, setKey] = useState(0);

  const handleCancel = () => {
    setDuration(60);
    setKey(prev => prev + 1)
    setIsPlaying(false)
  }

  const handleOtherTeam = () => {
    setDuration(20);
    setKey(prev => prev + 1)
    setIsPlaying(true)
  }

  return (
    <div className="App">
      
      <div className="col">
        <h2>Рахунок</h2>
        <div classname="score">
          <input type='number' min={0} placeholder='0' />
          :
          <input type='number' min={0} placeholder='0' />
        </div>
        <h3>Раунд № <input type='number' min={0} placeholder='0' /></h3>
        <div>
          <input type='number' min={0} placeholder='0' />
          :
          <input type='number' min={0} placeholder='0' />
        </div>
      </div>
      <div classname="col">
        <Timer
          duration={duration}
          isPlaying={isPlaying}
          key={key}
          handleCancel={handleCancel}
        />
        <div className="timerControls">
          <button onClick={() => setIsPlaying(prev => !prev)} className="btn">
            {isPlaying ? 'Пауза' : 'Старт'}
          </button>
          <button onClick={handleCancel} className="btn">Сброс</button>
          <button onClick={handleOtherTeam} className="btn">Інша команда</button>
        </div>
      </div>
    </div>
  );
}

export default App;
