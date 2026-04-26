import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  // calculator state
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  // login function
  const handleLogin = (e) => {
    e.preventDefault();

    // admin login check
    if (name === "naol" && password === "2222") {
      setLoggedIn(true);
    } else {
      alert("Wrong name or password ❌");
    }
  };

  // calculator functions
  const add = () => setResult(Number(num1) + Number(num2));
  const subtract = () => setResult(Number(num1) - Number(num2));
  const multiply = () => setResult(Number(num1) * Number(num2));
  const divide = () => setResult(Number(num1) / Number(num2));

  // LOGIN PAGE
  if (!loggedIn) {
    return (
      <div className="login-container">
        <form className="login-box" onSubmit={handleLogin}>
          <h1>Admin Login 🔐</h1>

          <input
            type="text"
            placeholder="Name (name)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password (password)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  // CALCULATOR PAGE (after login)
  return (
    <div className="container">
      <h1>Welcome Admin </h1>

      <input
        type="number"
        placeholder="Number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div className="buttons">
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
      </div>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;