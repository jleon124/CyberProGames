import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // handlers to set values
  const onUsernameChanged = e => setUsername(e.target.value)
  const onEmailChanged = e => setEmail(e.target.value)
  const onPasswordChanged = e => setPassword(e.target.value)

  const register = async (username, email, password) => {
    const savedUserResponse = await fetch('http://localhost:3500/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    })

    const savedUser = await savedUserResponse.json()

    if (savedUser) {
      navigate('/')
    }
  }

  const onCreateUserClicked = async (e) => {
    e.preventDefault()

    await register(username, email, password)
  }

  const navigate = useNavigate();

  return (
    <main class="min-h-screen flex justify-center items-center">
      <div class="h-[400px] w-[400px] bg-black/40 border-cyan-400 border-4 text-teal-400 p-9 login-box">
        <h1 class="text-2xl text-[#1afa8d]">Registration</h1>
        <form class="flex flex-col" onSubmit={onCreateUserClicked}>
          <input
            class={`h-[30px] w-[250px] my-[10px] input-box text-black`}
            type="text"
            name="username"
            placeholder=" Username"
            required
            onChange={onUsernameChanged} // (e) => setUsername(e.target.value)
            value={username}
          />
          <input
            class={`h-[30px] w-[250px] my-[10px] input-box text-black`}
            type="text"
            name="email"
            placeholder=" Email"
            required
            onChange={onEmailChanged}
            value={email}
          />
          <input
            class={`h-[30px] w-[250px] my-[10px] input-box text-black`}
            type="text"
            name="password"
            placeholder=" Password"
            required
            onChange={onPasswordChanged}
            value={password}
          />
          <nav class="mt-[5px]">
            <button class="text-black bg-emerald-700 border-[#1afa8d] border-2 h-[30px] w-[75px] mr-[5px] hover:bg-[#1afa8d] form-button-box" onClick={() => navigate("/login")}>Back</button>
            <button class="text-black bg-emerald-700 border-[#1afa8d] border-2 h-[30px] w-[75px] mr-[5px] hover:bg-[#1afa8d] form-button-box" type="submit">Sign up</button>
          </nav>
        </form>
      </div>
    </main>
  )
}

export default RegisterPage