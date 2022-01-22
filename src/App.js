import './App.css';


import Login from './Login';
import Home from './Home';
import { useAuth } from './firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  BrowserRouter
} from "react-router-dom";
import { useState } from 'react';
import Signup from './Signup';



function App() {
  const [user,setUser]=useState(null);
  const currentUser = useAuth();
  console.log(currentUser?.email);
  console.log(currentUser);

  return (
    <div className="App">
          <BrowserRouter>
          <Routes>
          <Route path="/" element={<Login />}>
            
          </Route>
          <Route path="/home" element={<Home/>}>
          </Route>
          
          <Route path="/signup" element={<Signup />}>
          </Route>

          </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
