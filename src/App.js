import './App.css';
import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

function App() {
  const [form, setForm] = useState('login')

  const toggleForm = (formName) => {
    setForm(formName);
  }

  return (
    <div className="App">
      {
        form === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
