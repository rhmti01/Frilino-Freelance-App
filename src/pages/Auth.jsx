/* eslint-disable no-unused-vars */
import React from 'react'
import SendOTPForm from '../features/authentication/SendOTPForm'
import GetOTPForm from '../features/authentication/GetOTPForm'

function Auth() {
  return (
    <div className=' bg-blue-50/ w-full min-h-full flex items-center justify-center ' >
      {/* <SendOTPForm/>   */}
      <GetOTPForm/>
    </div>
  )
}

export default Auth