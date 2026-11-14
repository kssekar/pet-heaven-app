const Resources = () => {
  return (
    <div className="section">
      <h1 className="page-title">Pet Care Resources</h1>
      
      {/* Written Tips */}
      <div className="features" style={{ marginBottom: '3rem' }}>
        <div className="feature">
          <h3> Feeding Guide</h3>
          <p>Dogs need a balanced diet rich in protein. Avoid chocolate, grapes, and onions at all costs!</p>
        </div>
        <div className="feature">
          <h3> Grooming Tips</h3>
          <p>Cats are naturally clean, but long-haired breeds need brushing at least twice a week.</p>
        </div>
      </div>

      {/* YouTube Videos Section */}
      <h2 className="section-title">Educational Video Guides</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        
        {/* Video 1: Basic Pet Care */}
        <div className="form-card" style={{ padding: '1rem' }}>
          <h3 style={{ marginBottom: '1rem', color: '#4a6fa5', fontSize: '1.2rem', textAlign: 'center' }}>Basic Pet Care</h3>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
            <iframe 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
              src="https://www.youtube.com/embed/Zb3Wzs2FcFE" 
              title="Basic Pet Care" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Video 2: Dental Hygiene */}
        <div className="form-card" style={{ padding: '1rem' }}>
          <h3 style={{ marginBottom: '1rem', color: '#4a6fa5', fontSize: '1.2rem', textAlign: 'center' }}>Dental Hygiene</h3>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
            <iframe 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
              src="https://www.youtube.com/embed/EyoAKnlIDp4" 
              title="Pet Dental Hygiene" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Video 3: Nutrition & Food */}
        <div className="form-card" style={{ padding: '1rem' }}>
          <h3 style={{ marginBottom: '1rem', color: '#4a6fa5', fontSize: '1.2rem', textAlign: 'center' }}>Nutrition & Proper Foods</h3>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
            <iframe 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
              src="https://www.youtube.com/embed/ppkBktPF6FI" 
              title="Pet Nutrition" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Resources