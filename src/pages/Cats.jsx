import { useState } from 'react'
import { useApp } from '../components/AppContext'
import PetCard from '../components/PetCard'

const Cats = () => {
  const { pets } = useApp()
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')

  const filtered = pets.filter((p) => {
    const matchesQuery = p.breed.toLowerCase().includes(query.toLowerCase())
    const matchesFilter = filter === 'all' || p.species === filter
    return matchesQuery && matchesFilter && p.status === 'available'
  })

  return (
    <div className="section">
      <h1 className="page-title">Pets Available for Adoption</h1>
      <div className="search-bar">
        <div className="search-input-wrap">
          <span>&#128269;</span>
          <input type="text" placeholder="Search by name..." value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Pets</option>
          <option value="Dog">Dogs</option>
          <option value="Cat">Cats</option>
        </select>
      </div>
      {filtered.length === 0 ? (
        <p className="empty">No pets match your search.</p>
      ) : (
        <div className="pet-grid">
          {filtered.map((pet) => <PetCard key={pet.id} pet={pet} />)}
        </div>
      )}
    </div>
  )
}
export default Cats