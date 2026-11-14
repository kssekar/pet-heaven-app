import { useState } from 'react'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="section form-page">
      <h1 className="page-title">Contact Us</h1>
      {submitted ? (
        <div className="form-card center">
          <h2 style={{ color: '#4a6fa5', marginBottom: '1rem' }}>Message Sent!</h2>
          <p>Thank you for reaching out. Our team will get back to you within 2 business days.</p>
          <button className="btn btn-primary" style={{ marginTop: '1.5rem' }} onClick={() => setSubmitted(false)}>Send Another</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form-card">
          <div className="form-field">
            <label>Name *</label>
            <input required />
          </div>
          <div className="form-field">
            <label>Email *</label>
            <input type="email" required />
          </div>
          <div className="form-field">
            <label>Message *</label>
            <textarea rows="4" required />
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      )}
    </div>
  )
}

export default Contact