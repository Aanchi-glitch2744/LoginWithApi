import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Add from './components/Pages/Add';
import Profile from './components/Profile/Profile';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(){
    return (
      <div className='app-main'>
        <Header />
        {/* <Login /> */}
        <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add" element={<Add />} />
        </Routes>
   
    </Router>

      </div>
    )
  }
}

export default App;