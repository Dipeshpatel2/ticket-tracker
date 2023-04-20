import {React, useState} from "react";
import "./Counter.scss";

const Counter = () => {

const [counter, setCounter] = useState(0)
  
  //handle increment function
const handleIncrement = () => {
  setCounter(counter + 1)
}

//handle decrement function
const handleDecrement = () => {
  if (counter > 0){
    setCounter(counter - 1)
  }
}

  return (
    <div className="counter">
      <h3>Ticket Count</h3>
      <p className="counter__display">{counter}</p>
      <div className="counter__button-container">
        <button onClick={handleDecrement} className="counter__button">-</button>
        <button onClick={handleIncrement} className="counter__button">+</button>
      </div>
    </div>
  );
};

export default Counter;
