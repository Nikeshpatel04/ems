import React, { useState } from 'react'
// import handleLogin from 

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        console.log("Email is:",email)
        console.log("password is:",password)

        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl p-20 border-emerald-600 '>
            <form 
                onSubmit={(e) => {
                    submitHandler(e)
                }}
            className='flex flex-col items-center justify-center'>
                <input 
                    value={email}
                    onChange={(e) =>{
                        setEmail(e.target.value)

                    }}
                required className='text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full text-xl placeholder:text-gray-400' type="email" placeholder='Enter your Email' />

                <input 
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}

                required className='text-white mt-3 outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full text-xl placeholder:text-gray-400' type="password" placeholder='Enter your password' />
                <button className='text-white mt-5 outline-none bg-emerald-600 py-3 px-5 rounded-full text-xl' type='submit'>Login</button>

            </form>
        </div>
    </div>
  )
}

export default Login