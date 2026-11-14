import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Cats from './pages/Cats'
import PetDetail from './pages/PetDetail'
import AdoptPet from './pages/AdoptPet'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Resources from './pages/Resources'
import Volunteer from './pages/Volunteer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<Cats />} />
          <Route path="/pets/:id" element={<PetDetail />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} /> {/* NEW */}
          <Route path="/release" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} /> {/* NEW */}
          <Route path="/resources" element={<Resources />} /> {/* NEW */}
          <Route path="/adopt/:id" element={<ProtectedRoute><AdoptPet /></ProtectedRoute>} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="*" element={<div className="section center"><h1>404 - Page Not Found</h1></div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App