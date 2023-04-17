import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin';

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isLoading } = useLogin()

  // handlers to set values
  const onEmailChanged = e => setEmail(e.target.value)
  const onPasswordChanged = e => setPassword(e.target.value)

  const onLoginUserClicked = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  const navigate = useNavigate();

  return (
    <main class="min-h-screen flex justify-center items-center">
      <div class="h-[400px] w-[400px] bg-black/40 border-cyan-400 border-4 text-teal-400 p-9 login-box">
        <h1 class="text-2xl text-[#1afa8d]">Login</h1>
        <form class="flex flex-col" onSubmit={onLoginUserClicked}>
          <input
            class="h-[30px] w-[250px] my-[10px] input-box text-black"
            type='text'
            name="email"
            placeholder=" Email"
            required
            onChange={onEmailChanged}
            value={email}
          />
          <input
            class="h-[30px] w-[250px] my-[10px] input-box text-black"
            type='text'
            name="password"
            placeholder=" Password"
            required
            onChange={onPasswordChanged}
            value={password}
          />
          <nav class="mt-[5px]">
            <button class="text-black bg-emerald-700 border-[#1afa8d] border-2 h-[30px] w-[75px] mr-[5px] hover:bg-[#1afa8d] form-button-box" onClick={() => navigate("/")}>Back</button>
            <button class="text-black bg-emerald-700 border-[#1afa8d] border-2 h-[30px] w-[75px] mr-[5px] hover:bg-[#1afa8d] form-button-box" disabled={isLoading} type="submit">Login</button>
            {error && <div class="text-white">{error}</div>}
          </nav>
          <a class="text-[#1afa8d] mt-[10px] underline cursor-pointer hover:no-underline" href='/register'>Sign-up?</a>
        </form>
      </div>
    </main>
  )
}

export default LoginPage 