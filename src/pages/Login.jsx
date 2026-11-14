import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useApp } from '../components/AppContext'

const Login = () => {
  const { loginMember } = useApp() // Use loginMember instead of registerMember
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')

    // 1. Get the master list of all registered users
    const existingUsers = JSON.parse(localStorage.getItem('petHeavenAllUsers') || '[]')

    // 2. Find a user with a matching email AND password
    const validUser = existingUsers.find(
      (u) => u.email.toLowerCase() === form.email.toLowerCase() && u.password === form.password
    )

    if (validUser) {
      // Success! Log them in
      loginMember(validUser)
      navigate('/pets')
    } else {
      // Check if the email exists but the password is wrong (for better error messages)
      const emailExists = existingUsers.find((u) => u.email.toLowerCase() === form.email.toLowerCase())
      
      if (emailExists) {
        setError('Incorrect password. Please try again.')
      } else {
        setError('No account found with this email. Please register first.')
      }
    }
  }

  return (
    <div className="section form-page">
      <h1 className="page-title">Member Login</h1>
      <form onSubmit={handleLogin} className="form-card">
        {error && <p style={{ color: '#e07a5f', marginBottom: '1rem', fontWeight: 'bold' }}>{error}</p>}
        
        <div className="form-field">
          <label>Email *</label>
          <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required />
        </div>
        
        <div className="form-field">
          <label>Password *</label>
          <input type="password" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} required />
        </div>
        
        <button type="submit" className="btn btn-primary">Login</button>
        
        <p style={{ marginTop: '1rem', textAlign: 'center' }}>
          Don't have an account? <Link to="/register" style={{ color: '#e07a5f' }}>Sign up here</Link>
        </p>
      </form>
    </div>
  )
}

export default Login