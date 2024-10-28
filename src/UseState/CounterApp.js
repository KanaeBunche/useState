import React, {useState} from 'react';
import './CounterApp.css';


export default function CounterApp () {
const [counter, setCount] = useState(0);

const handleClick = () =>{
    setCount(prevCount => prevCount + 1);
}

const handleDClick = () =>{
    setCount(prevCount => prevCount  - 1);
}

const handleZeorClick = () =>{
    setCount(0)
}

  return (
    <div className='counter'>
        <h1>CounterApp</h1>
        <h1>{counter}</h1>
        <button onClick={handleClick}> Increase </button>
        <button onClick={handleDClick}> Decrease </button>
        <button onClick={handleZeorClick}>Zero </button>
    </div>
  )
}

