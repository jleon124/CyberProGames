import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <main class="min-h-screen flex justify-center items-center">
      <div class="h-[400px] w-[400px] bg-black/40 border-cyan-400 border-4 text-teal-400 p-9 login-box">
        <h1 class="text-2xl text-[#1afa8d]">Login</h1>
        <form class="flex flex-col">
          <input
            class="h-[30px] w-[250px] my-[10px] input-box text-black"
            name="email"
            placeholder=" Email"
            required
          />
          <input
            class="h-[30px] w-[250px] my-[10px] input-box text-black"
            name="password"
            placeholder=" Password"
            required
          />
          <nav class="mt-[5px]">
            <button class="text-black bg-emerald-700 border-[#1afa8d] border-2 h-[30px] w-[75px] mr-[5px] hover:bg-[#1afa8d] form-button-box" onClick={() => navigate("/")}>Back</button>
            <button class="text-black bg-emerald-700 border-[#1afa8d] border-2 h-[30px] w-[75px] mr-[5px] hover:bg-[#1afa8d] form-button-box" type="submit">Login</button>
          </nav>
          <a class="text-[#1afa8d] mt-[10px] underline cursor-pointer hover:no-underline" onClick={() => navigate("/register")} >Sign-up?</a>
        </form>
      </div>
    </main>
  )
}

export default LoginPage 