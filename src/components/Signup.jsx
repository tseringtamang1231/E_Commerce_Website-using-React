import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/Input'
import Button from '../components/Button'

function Signup() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-lg border border-gray-100 bg-white md:grid-cols-2">

        {/* Left: image */}
        <div className="relative hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
            alt="Shoe"
            className="h-full w-full object-cover grayscale"
          />
          <div className="absolute inset-0 flex flex-col justify-center bg-white/40 p-10">
            <h2 className="text-3xl font-bold text-gray-900">Join ShopZone</h2>
            <p className="mt-2 max-w-xs text-sm text-gray-600">
              Create your account and start shopping for the best products.
            </p>
          </div>
        </div>

        {/* Right: form */}
        <div className="flex flex-col justify-center p-8 sm:p-12">
          <h1 className="text-lg font-bold text-gray-900">ShopZone</h1>
          <h2 className="mt-1 text-sm font-semibold text-gray-800">Create Your Account</h2>

          <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4">
            <Input icon="👤" type="text" placeholder="Full Name" />
            <Input icon="✉️" type="email" placeholder="Email address" />
            <Input icon="🔒" type="password" placeholder="Password" />

            <label className="flex items-center gap-2 text-xs text-gray-600">
              <input type="checkbox" />
              <span>
                I agree to the{' '}
                <Link to="/terms" className="text-blue-600 hover:underline">
                  Terms and Conditions
                </Link>
              </span>
            </label>

            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>

          <p className="mt-5 text-center text-xs text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup