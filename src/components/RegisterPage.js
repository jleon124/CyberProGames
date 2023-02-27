import React from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <main className="formPages">
      <div className="registerBox">
        <h1 className="formTitle">Registration</h1>
        <form className="registerForm">
          <input
            className="inputEntry"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="inputEntry"
            name="username"
            placeholder="Username"
            required
          />
          <input
            className="inputEntry"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className="inputEntry"
            name="password"
            placeholder="Password"
            required
          />
          <label for="humanVeri">Are you human? <input type="checkbox" name="human"/></label>
          <nav className="formButtonNav">
            <button className="formButton" onClick={() => navigate("/login")}>Back</button>
            <button className="formButton" type="submit">Sign up</button>
          </nav>
        </form>
      </div>
    </main>
  )
}

export default RegisterPage