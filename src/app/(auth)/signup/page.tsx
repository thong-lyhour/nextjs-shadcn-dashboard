import { SignUpForm } from '@/components/auth/signup-form'
import React from 'react'

const SignUpPage = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm">
            {/* <LoginForm /> */}
            <SignUpForm />
          </div>
        </div>
  )
}

export default SignUpPage
