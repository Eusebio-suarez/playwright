import { useState } from 'react'
import './Login.css'

const VALID_EMAIL = 'admin@example.com'
const VALID_PASSWORD = 'password123'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      setMessage('Inicio de sesion exitoso')
    } else {
      setMessage('Credenciales invalidas')
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar Sesion</h2>
        <label htmlFor="email">Correo electronico</label>
        <input
          id="email"
          type="email"
          placeholder="admin@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Contrasena</label>
        <input
          id="password"
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Ingresar</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  )
}

export default Login
