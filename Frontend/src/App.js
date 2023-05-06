import './App.css';
import Home from './components/Home'
import Bin from './components/Bin'
import User from './components/User';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Complains from './components/Complains';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/complains" element={<Complains />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<User />} />
          <Route path="/bin/:bin_id" element={<Bin />} />
        </Routes>
    </>
  );
}

export default App;
