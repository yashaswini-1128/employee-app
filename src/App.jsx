import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const users = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Priya" },
    { id: 3, name: "Arun" }
  ];

  return (
    <div>
      <h1>Employee Dashboard</h1>

      {users.map(user => (
        <div key={user.id}>
          {user.name}
        </div>
      ))}
    </div>
  );
}

export default App;