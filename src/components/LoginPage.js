import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <main className="formPages">
      <div className="loginBox">
        <h1 className="formTitle">Login</h1>
        <form className="loginForm">
          <input
            className="inputEntry"
            name="username"
            placeholder="Username"
            required
          />
          <input
            className="inputEntry"
            name="password"
            placeholder="Password"
            required
          />
          <nav className="formButtonNav">
            <button className="formButton" onClick={() => navigate("/")}>Back</button>
            <button className="formButton" type="submit">Login</button>
          </nav>
          <a onClick={() => navigate("/register")} >Sign-up?</a>
        </form>
      </div>
    </main>
  )
}

export default LoginPage 