import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div>
        <h1>Login</h1>

        <p>
            Or <Link to="/registration">Registration</Link>
        </p>
    </div>
  )
}
