import { Link } from 'react-router-dom'

const PetCard = ({ pet }) => (
  <div className="pet-card">
    <img src={pet.image} alt={pet.name} className="pet-img" />
    <div className="pet-info">
      <div className="pet-header">
        <h3>{pet.name}</h3>
        <span className={`status ${pet.status}`}>{pet.status}</span>
      </div>
      <p className="pet-meta">{pet.species} • {pet.breed} • {pet.age}</p>
      <p className="pet-desc">{pet.description.substring(0, 90)}...</p>
      <Link to={`/pets/${pet.id}`} className="btn btn-secondary">View Details</Link>
    </div>
  </div>
)
export default PetCard