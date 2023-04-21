import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setLogin } from '../state/index'
import { useDispatch } from "react-redux";

const LoginPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();

  // handlers to set values
  const onEmailChanged = e => setEmail(e.target.value)
  const onPasswordChanged = e => setPassword(e.target.value)

  const login = async (email, password) => {
    const loggedInResponse = await fetch('http://localhost:3500/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })

    const loggedIn = await loggedInResponse.json()

    if (loggedIn) {
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token
        })
      )
      navigate('/')
    }
  }

  const onLoginUserClicked = async (e) => {
    e.preventDefault()

    login(email, password)
  }

  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="h-[400px] w-[400px] bg-black/40 border-cyan-400 border-4 text-teal-400 p-9 login-box">
        <h1 className="text-2xl text-[#1afa8d]">Login</h1>
        <form className="flex flex-col" onSubmit={onLoginUserClicked}>
          <input
            className="h-[30px] w-[250px] my-[10px] input-box text-black"
            type='text'
            name="email"
            placeholder=" Email"
            required
            onChange={onEmailChanged}
            value={email}
          />
          <input
            className="h-[30px] w-[250px] my-[10px] input-box text-black"
            type='text'
            name="password"
            placeholder=" Password"
            required
            onChange={onPasswordChanged}
            value={password}
          />
          <nav className="mt-[5px]">
            <button className="text-black bg-emerald-700 border-[#1afa8d] border-2 h-[30px] w-[75px] mr-[5px] hover:bg-[#1afa8d] form-button-box" onClick={() => navigate("/")}>Back</button>
            <button className="text-black bg-emerald-700 border-[#1afa8d] border-2 h-[30px] w-[75px] mr-[5px] hover:bg-[#1afa8d] form-button-box" type="submit">Login</button>
          </nav>
          <a className="text-[#1afa8d] mt-[10px] underline cursor-pointer hover:no-underline" href='/register'>Sign-up?</a>
        </form>
      </div>
    </main>
  )

}

export default LoginPage 