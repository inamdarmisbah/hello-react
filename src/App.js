import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [num, setNum] = useState("");
  function ChangeNum(event) {
    setNum(event.target.value)

  }
  function EvenOdd() {
    if (num % 2 == 0) {
      setNum(num + "is Even");
    }
    else {
      setNum(num + "is Odd");
    }
  }
  return (
    <div>
      <h1>{num}</h1>
      <input type="text" onChange={ChangeNum} />
      <button onClick={EvenOdd}>Check</button>
    
    </div>
  );


}



export default App;

