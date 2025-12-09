import React from 'react'
import Navbar from '../components/navbar.tsx'
import '../assets/css/form.css'

function LoginPage() {
  return (
    <div id='login-page'>



        <form action="/login" id='form'>
          
            <input type="text" />
            <input type="password" />
          
          </form>
    </div>
  )
}

export default LoginPage