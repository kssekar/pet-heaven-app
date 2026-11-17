import { useState } from 'react'
import { useApp } from '../components/AppContext'
import defaultDog from '../assets/dog1.jpeg'
import defaultCat from '../assets/cat1.jpeg'

const Services = () => {
  const { addPet } = useApp()
  const [form, setForm] = useState({ petName: '', species: 'Dog', reason: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.petName || !form.reason) { alert('Please fill all fields'); return; }

    addPet({
      name: form.petName, species: form.species, breed: 'Mixed', age: 'Unknown', gender: 'Unknown',
      description: `Released: ${form.reason}`,
      image: form.species === 'Dog' ? defaultDog : defaultCat, 
    })
    alert('Release request submitted!')
    setForm({ petName: '', species: 'Dog', reason: '' })
  }

  return (
    <div className="section form-page">
      <h1 className="page-title">Release a Pet</h1>
      <form onSubmit={handleSubmit} className="form-card">
        <div className="form-field">
          <label>Pet Name *</label>
          <input value={form.petName} onChange={(e) => setForm({...form, petName: e.target.value})} />
        </div>
        <div className="form-field">
          <label>Species</label>
          <select value={form.species} onChange={(e) => setForm({...form, species: e.target.value})}>
            <option>Dog</option>
            <option>Cat</option>
          </select>
        </div>
        <div className="form-field">
          <label>Reason for Release *</label>
          <textarea value={form.reason} onChange={(e) => setForm({...form, reason: e.target.value})} rows="3" />
        </div>
        <button type="submit" className="btn btn-primary">Submit Request</button>
      </form>
    </div>
  )
}
export default Services
