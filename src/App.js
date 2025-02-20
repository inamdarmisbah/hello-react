import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
const[count,setCount]=useState(1);
function countNum(){
  setCount(count+1)
}
return(
  <div>
  <h1>{count}</h1>
  <button onClick={countNum}>Add num</button>
  </div>
);
}



export default App;
