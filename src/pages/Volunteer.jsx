import { useState } from 'react'
// 1. Import the images from your assets folder
import cleanImg from '../assets/clean.jpg'
import walkImg from '../assets/walk.jpg'
import careImg from '../assets/care.jpg'

const Volunteer = () => {
  const [form, setForm] = useState({ name: '', email: '', activity: 'Shelter Cleaning', date: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.date) {
      alert('Please fill in all required fields.')
      return
    }
    setSubmitted(true)
  }

  // 2. Replace the icon strings with the imported image variables
  const activities = [
    { 
      title: 'Shelter Cleaning', 
      desc: 'Help us keep the kennels and catteries clean, sanitized, and comfortable for our animals.', 
      image: cleanImg 
    },
    { 
      title: 'Enrichment Walks', 
      desc: 'Take our dogs out for walks to give them exercise, fresh air, and mental stimulation.', 
      image: walkImg 
    },
    { 
      title: 'Care Workshop', 
      desc: 'Join our sessions to learn about proper pet hygiene, grooming, and optimal nutrition.', 
      image: careImg 
    }
  ]

  return (
    <div className="section">
      <h1 className="page-title">Volunteer with Us</h1>
      <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
        Our volunteers are the heart of Pet Heaven. Whether you want to help clean, walk our dogs, or learn how to care for pets properly, we have a place for you!
      </p>

      {/* Activities Grid */}
      <div className="features" style={{ marginBottom: '4rem' }}>
        {activities.map((act, index) => (
          <div key={index} className="feature" style={{ padding: 0, overflow: 'hidden' }}>
            {/* 3. Display the image at the top of the card */}
            <img 
              src={act.image} 
              alt={act.title} 
              style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
            />
            <div style={{ padding: '1.5rem' }}>
              <h3>{act.title}</h3>
              <p>{act.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Sign up Form */}
      <div className="form-page" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 className="section-title">Sign Up for a Shift</h2>
        
        {submitted ? (
          <div className="form-card center" style={{ background: '#d4edda', border: '1px solid #c3e6cb' }}>
            <h3 style={{ color: '#155724', marginBottom: '1rem' }}>Thank you, {form.name}!</h3>
            <p style={{ color: '#155724' }}>You are signed up for <strong>{form.activity}</strong> on <strong>{form.date}</strong>. We have sent a confirmation email to {form.email}.</p>
            <button className="btn btn-primary" style={{ marginTop: '1.5rem' }} onClick={() => setSubmitted(false)}>Sign up another session</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form-card">
            <div className="form-field">
              <label>Full Name *</label>
              <input value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required />
            </div>
            <div className="form-field">
              <label>Email Address *</label>
              <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required />
            </div>
            <div className="form-field">
              <label>Select Activity *</label>
              <select value={form.activity} onChange={(e) => setForm({...form, activity: e.target.value})}>
                {activities.map((act, i) => (
                  <option key={i} value={act.title}>{act.title}</option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <label>Preferred Date *</label>
              <input type="date" value={form.date} onChange={(e) => setForm({...form, date: e.target.value})} required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Confirm Volunteer Shift</button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Volunteer