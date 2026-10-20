import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {Logo,Input,Button} from './index'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'

function Login() {
  //  const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()
    const dispatch  = useDispatch()
    const { register, handleSubmit } = useForm();
    const form_handler = (data) => {
  dispatch(login(data))
  navigate('/')
}


  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-lg border border-gray-100 bg-white md:grid-cols-2">
             {/* Left: image */}
        <div className="relative hidden md:block">
            <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"  
            alt="Shoe"
            className="h-full w-full object-cover grayscale"/>
            
            <div className="absolute inset-0 flex flex-col justify-center bg-white/40 p-10">
            <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
            <p className="mt-2 max-w-xs text-sm text-gray-600">
                Log in to your account to continue shopping and enjoy exclusive offers.
                </p>
                </div>
        </div>

        {/* Right: form */}
        <div className="flex flex-col justify-center p-8 sm:p-12">
            {/* // logo */}
            <Logo className={`text-2xl font-bold text-gray-900`} />
            <h1 className="mt-1 text-sm font-semibold text-gray-800">Login to Your Account</h1>
          <form onSubmit={handleSubmit(form_handler)} className="mt-6 space-y-4">
            <Input 
               icon="📧"
               type="Email"
               placeholder = "Enter you email address "
               {...register("email", {
                required :true,
               })}

            />
            <Input 
               icon="🔒"
               type="Password"
               placeholder = "Enter you password "
               {...register("password", {
                required :true,
               })}

            />
            {/* <Input icon="🔒" type="password" placeholder="Password" /> */}

            <div className="flex items-center justify-between text-xs text-gray-600">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
                </label>
              <Link to="/forgot-password" className="hover:text-gray-900">
                Forgot password?
              </Link>
            </div>

            <Button 
            type="submit"
             className="w-full
             bg-gray-900 text-white hover:bg-gray-800 focus:ring-4 focus:ring-gray-300">
              Login
            </Button>
          </form>

          <p className="mt-5 text-center text-xs text-gray-500">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login