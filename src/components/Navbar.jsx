import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useApp } from './AppContext'
import logoImage from '../assets/pet_logo.png'

const Navbar = () => {
  const { member, logout } = useApp()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={logoImage} alt="Pet Heaven Logo" className="logo-img" />
        </Link>
        <button className="menu-toggle" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          <li><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/pets" onClick={() => setOpen(false)}>Adoptable Pets</NavLink></li>
          <li><NavLink to="/volunteer" onClick={() => setOpen(false)}>Volunteer</NavLink></li>
          <li><NavLink to="/resources" onClick={() => setOpen(false)}>Resources</NavLink></li>
          <li><NavLink to="/release" onClick={() => setOpen(false)}>Release a Pet</NavLink></li>
          <li><NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink></li>
          
          {member ? (
            <>
              <li className="welcome">Hi, {member.name.split(' ')[0]}</li>
              <li><button className="btn-link" onClick={handleLogout}>Logout</button></li>
            </>
          ) : (
            <>
              <li><NavLink to="/login" onClick={() => setOpen(false)}>Login</NavLink></li>
              <li><NavLink to="/register" onClick={() => setOpen(false)} style={{ background: '#e07a5f', padding: '0.5rem 1rem', borderRadius: '6px' }}>Sign Up</NavLink></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar