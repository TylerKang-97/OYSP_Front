import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import { Axios } from 'axios';
import AxiosTest from './api/AxiosTest';
import UserInfo from './component/UserInfo';
import Home from './component/Home';
import { Router } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './component/SignUp';
import Login from './component/Login';


function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('/api').then(res => res.text()).then(message => {
      setMessage(message);
    });
  }, [])
  return (
    <div>
      <BrowserRouter>
            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/userInfo' element={<UserInfo/>} />
                    <Route path='/axios' element={<AxiosTest/>} />
                    <Route path='/signup' element={<SignUp/>} />
                    <Route path='/login' element={<Login/>} />
                </Routes>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
