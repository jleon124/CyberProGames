import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRegister } from '../hooks/useRegister'

const USER_REGEX = /^[A-z0-9]{3,30}$/
const PWD_REGEX = /^[A-z0-9!@#$%]{5,12}$/
const EMAIL_REGEX = /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/

const RegisterPage = () => {
  const [username, setUsername] = useState('')
  const [validUsername, setValidUsername] = useState(false)
  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(false)
  const [password, setPassword] = useState('')
  const [validPassword, setValidPassword] = useState(false)
  const { register, error, isLoading } = useRegister()

  // check if the values are valid with regular expression rules
  useEffect(() => {
    setValidUsername(USER_REGEX.test(username))
  }, [username])

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email))
  }, [email])

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password))
  }, [password])

  // handlers to set values
  const onUsernameChanged = e => setUsername(e.target.value)
  const onEmailChanged = e => setEmail(e.target.value)
  const onPasswordChanged = e => setPassword(e.target.value)

  const onCreateUserClicked = async (e) => {
    e.preventDefault()

    await register(username, email, password)
  }

  const navigate = useNavigate();

  // change style depending on validity
  const validUserClass = !validUsername ? 'border-2 border-red-500' : ''
  const validEmailClass = !validEmail ? 'border-2 border-red-500' : ''
  const validPasswordClass = !validPassword ? 'border-2 border-red-500' : ''

  return (
    <main class="min-h-screen flex justify-center items-center">
      <div class="h-[400px] w-[400px] bg-black/40 border-cyan-400 border-4 text-teal-400 p-9 login-box">
        <h1 class="text-2xl text-[#1afa8d]">Registration</h1>
        <form class="flex flex-col" onSubmit={onCreateUserClicked}>
          <input
            class={`h-[30px] w-[250px] my-[10px] input-box text-black ${validUserClass}`}
            type="text"
            name="username"
            placeholder=" Username"
            required
            onChange={onUsernameChanged} // (e) => setUsername(e.target.value)
            value={username}
          />
          <input
            class={`h-[30px] w-[250px] my-[10px] input-box text-black ${validEmailClass}`}
            type="text"
            name="email"
            placeholder=" Email"
            required
            onChange={onEmailChanged}
            value={email}
          />
          <input
            class={`h-[30px] w-[250px] my-[10px] input-box text-black ${validPasswordClass}`}
            type="text"
            name="password"
            placeholder=" Password"
            required
            onChange={onPasswordChanged}
            value={password}
          />
          <nav class="mt-[5px]">
            <button class="text-black bg-emerald-700 border-[#1afa8d] border-2 h-[30px] w-[75px] mr-[5px] hover:bg-[#1afa8d] form-button-box" onClick={() => navigate("/login")}>Back</button>
            <button class="text-black bg-emerald-700 border-[#1afa8d] border-2 h-[30px] w-[75px] mr-[5px] hover:bg-[#1afa8d] form-button-box" disabled={isLoading} type="submit">Sign up</button>
            {error && <div class="text-white">{error}</div>}
          </nav>
        </form>
      </div>
    </main>
  )
}

export default RegisterPage