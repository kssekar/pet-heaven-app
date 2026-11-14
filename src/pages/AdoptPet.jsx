import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useApp } from '../components/AppContext'

const AdoptPet = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { pets, member, markPetAdopted } = useApp()
  const pet = pets.find((p) => p.id === Number(id))
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  if (!pet) return <div className="section center"><h2>Pet not found</h2></div>

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!message.trim()) { setError('Tell us why you would be a good match'); return; }
    
    markPetAdopted(pet.id)
    alert(`Success! Your adoption request for ${pet.name} has been sent.`)
    navigate('/pets')
  }

  return (
    <div className="section form-page">
      <h1 className="page-title">Adopt {pet.name}</h1>
      <form onSubmit={handleSubmit} className="form-card">
        <p style={{ marginBottom: '1.5rem' }}>Applying as <strong>{member?.name}</strong> ({member?.email})</p>
        <div className={`form-field ${error ? 'has-error' : ''}`}>
          <label>Why do you want to adopt? *</label>
          <textarea rows="4" value={message} onChange={(e) => setMessage(e.target.value)} />
          {error && <span className="error-msg">{error}</span>}
        </div>
        <button type="submit" className="btn btn-primary">Submit Request</button>
      </form>
    </div>
  )
}
export default AdoptPet