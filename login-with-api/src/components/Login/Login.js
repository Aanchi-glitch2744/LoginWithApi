import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {

  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user-info')){
      navigate('/add');
    }
  }, [])

  async function loginbase(){
    console.warn(email, password);
    let item ={email,password};
    let result = await fetch('https://assignment-venturepact.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
        "Accept": 'application/json'
      },
      body: JSON.stringify(item)
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate('/add');
  }

    return (
      <div className='login-main'>
        <div className='col-sm-6 offset-sm-3'>
        <h1>Login Page</h1>
          <input type="text" placeholder='Email' className='form-control' onChange={(e)=>setEmail(e.target.value)} />
          <br />
          <input type="password" placeholder='Password' className='form-control' onChange={(e)=>setPassword(e.target.value)} />
          <br />
          <button className='btn btn-primary' onChange={loginbase} onClick={(e) => navigate("/add")}>Button</button>
        </div>
      </div>
    )

}

export default Login;
