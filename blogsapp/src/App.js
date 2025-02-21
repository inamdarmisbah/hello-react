import logo from './logo.svg';
import { BrowserRouter,Routes,Route}from"react-router-dom";
import './App.css';
import Display from "./Component/Display/Display";
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Upload from './Component/Upload/Upload';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Dashboard/>}/>
          <Route path="Display" element={<Display/>}/>
          <Route path="Home" element={<Home/>}/>
          <Route path="Login" element={<Login/>}/>
          <Route path="Register" element={<Register/>}/>
          <Route path="Upload" element={<Upload/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
