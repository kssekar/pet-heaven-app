import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../components/AppContext'

const SignUp = () => {
  const { registerMember } = useApp()
  const navigate = useNavigate()
  
  // 1. Added 'password' to the initial state
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = {}
    
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.includes('@')) errs.email = 'Valid email required'
    if (form.password.length < 6) errs.password = 'Password must be at least 6 characters'
    
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    // NEW: Save the account to a master list of users
    const existingUsers = JSON.parse(localStorage.getItem('petHeavenAllUsers') || '[]')
    const userExists = existingUsers.find(u => u.email === form.email)

    if (userExists) {
      setErrors({ email: 'An account with this email already exists.' })
      return
    }

    const newUsersList = [...existingUsers, form]
    localStorage.setItem('petHeavenAllUsers', JSON.stringify(newUsersList))

    // Log them in
    registerMember(form)
    navigate('/pets')
  }

  return (
    <div className="section form-page">
      <h1 className="page-title">Become a Member</h1>
      <form onSubmit={handleSubmit} className="form-card">
        <div className={`form-field ${errors.name ? 'has-error' : ''}`}>
          <label>Full Name *</label>
          <input value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
          {errors.name && <span className="error-msg">{errors.name}</span>}
        </div>
        <div className={`form-field ${errors.email ? 'has-error' : ''}`}>
          <label>Email *</label>
          <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>
        
        {/* 2. Added the Password Input Field */}
        <div className={`form-field ${errors.password ? 'has-error' : ''}`}>
          <label>Password *</label>
          <input type="password" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} />
          {errors.password && <span className="error-msg">{errors.password}</span>}
        </div>

        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  )
}
export default SignUp