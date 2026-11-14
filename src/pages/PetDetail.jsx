import { useParams, Link } from 'react-router-dom'
import { useApp } from '../components/AppContext'

const PetDetail = () => {
  const { id } = useParams()
  const { pets } = useApp()
  const pet = pets.find((p) => p.id === Number(id))

  if (!pet) return <div className="section center"><h2>Pet not found</h2></div>

  return (
    <div className="section">
      <Link to="/pets" className="btn btn-secondary" style={{ marginBottom: '1rem' }}>← Back</Link>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', background: '#fff', padding: '2rem', borderRadius: '10px' }}>
        <img src={pet.image} alt={pet.name} style={{ width: '400px', borderRadius: '8px', objectFit: 'cover' }} />
        <div style={{ flex: 1 }}>
          <h1>{pet.name}</h1>
          <span className={`status ${pet.status}`} style={{ display: 'inline-block', margin: '1rem 0' }}>{pet.status}</span>
          <p><strong>Species:</strong> {pet.species}</p>
          <p><strong>Breed:</strong> {pet.breed}</p>
          <p><strong>Age:</strong> {pet.age}</p>
          <p style={{ margin: '1.5rem 0' }}>{pet.description}</p>
          {pet.status === 'available' ? (
            <Link to={`/adopt/${pet.id}`} className="btn btn-primary">Request Adoption</Link>
          ) : (
            <p style={{ color: '#e07a5f', fontWeight: 'bold' }}>Already adopted.</p>
          )}
        </div>
      </div>
    </div>
  )
}
export default PetDetail