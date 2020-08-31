import React, { createRef, useState, useEffect, useRef } from "react";
import "./styles.css";

function App(props) {
  const [login, setLogin] = useState("Login");
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordStatus, setPasswordStatus] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleUsername = e => {
    setUsername(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const checkPassword = () => {
    if (password === "blue") {
      setPasswordStatus(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
      setPasswordStatus(false);
    }
  };

  return (
    <div>
      <h1>{login} </h1>
      <h5>
        Password Status:{" "}
        {passwordStatus ? (passwordError ? "Error" : "Match") : "Incorrect"}
      </h5>
      <h2> {"Input Username"} </h2>
      <input value={username} onChange={e => handleUsername(e)} />

      <h2> {"Input Password"} </h2>
      <input value={password} onChange={e => handlePassword(e)} />

      <br />
      <br />
      <button onClick={() => checkPassword()}> Submit </button>
    </div>
  );
}

export default App;
