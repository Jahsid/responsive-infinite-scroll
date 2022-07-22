import './Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../components/auth'

export default function Login() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogin = () => {
    auth.login(user, password)
    navigate('/home', { replace: true})
  }
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Username:{''}</label>
        <input className="loginInput" type="text" placeholder="Enter your username..." onChange={(e) => setUser(e.target.value)} />
        <label>Password:{''}</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." onChange={(e) => setPassword(e.target.value)} />
        <button className="loginMainButton" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}