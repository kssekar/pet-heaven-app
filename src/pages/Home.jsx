import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../components/AppContext'
import PetCard from '../components/PetCard'

// Import the avatars from your assets folder
import avatar1 from '../assets/avatar1.jpg'
import avatar2 from '../assets/avatar2.jpg'

const Home = () => {
  const { pets } = useApp()
  const featured = pets.filter((p) => p.status === 'available').slice(0, 3)

  // State for the reviews
  const [reviews, setReviews] = useState([
    { id: 1, name: 'Sarah', image: avatar1, text: 'Adopted my lovely dog Max here. The process was smooth and the staff truly care!' },
    { id: 2, name: 'David', image: avatar2, text: 'Volunteering here is the best decision I ever made. A wonderful community.' }
  ])
  const [newReview, setNewReview] = useState('')

  const handleAddReview = (e) => {
    e.preventDefault()
    if (!newReview.trim()) return
    
    // Add the new review using a default avatar (or you can use a placeholder)
    setReviews([...reviews, { 
      id: Date.now(), 
      name: 'Anonymous Member', 
      image: avatar1, // Just using avatar1 as a default for new reviews
      text: newReview 
    }])
    setNewReview('')
  }

  return (
    <div>
      <section className="hero">
        <h1>Give a Paw a Loving Home</h1>
        <p>Pet Heaven is a charity society dedicated to rescuing and rehoming abandoned cats and dogs.</p>
        <div className="hero-buttons">
          <Link to="/pets" className="btn btn-primary">Adopt a Pet</Link>
          <Link to="/release" className="btn btn-outline">Release a Pet</Link>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Our Purpose</h2>
        <div className="features">
          <div className="feature">
            <h3>Rescue</h3>
            <p>We take in abandoned pets and provide them with food, shelter, and medical care.</p>
          </div>
          <div className="feature">
            <h3>Rehome</h3>
            <p>We match every pet with a loving family through our adoption programme.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">&#128062; Meet Our Pets</h2>
        <div className="pet-grid">
          {featured.map((pet) => <PetCard key={pet.id} pet={pet} />)}
        </div>
        <div className="center">
          <Link to="/pets" className="btn btn-primary">View All Pets</Link>
        </div>
      </section>

      {/* NEW COMMUNITY REVIEWS SECTION */}
      <section className="section" style={{ backgroundColor: '#fff', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <h2 className="section-title">What Our Community Says</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto 3rem' }}>
          {reviews.map(r => (
            <div key={r.id} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: '#faf7f2', padding: '1.5rem', borderRadius: '10px' }}>
              <img 
                src={r.image} 
                alt={r.name} 
                style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} 
              />
              <div>
                <strong style={{ color: '#4a6fa5', fontSize: '1.1rem' }}>{r.name}</strong>
                <p style={{ marginTop: '0.5rem', color: '#555' }}>"{r.text}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form to submit a new review */}
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <form onSubmit={handleAddReview} className="form-card">
            <h3 style={{ marginBottom: '1rem', textAlign: 'center', color: '#4a6fa5' }}>Leave a Review</h3>
            <div className="form-field">
              <textarea 
                rows="3" 
                value={newReview} 
                onChange={(e) => setNewReview(e.target.value)} 
                placeholder="Share your experience with Pet Heaven..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Post Review</button>
          </form>
        </div>
      </section>

    </div>
  )
}

export default Home