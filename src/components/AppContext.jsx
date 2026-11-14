import React, { createContext, useContext, useState, useEffect } from 'react'

import dog1 from '../assets/dog1.jpeg'
import dog2 from '../assets/dog2.jpeg'
import dog3 from '../assets/dog3.jpeg'
import cat1 from '../assets/cat1.jpeg'
import cat2 from '../assets/cat2.jpeg'
import cat3 from '../assets/cat3.jpeg'

const initialPets = [
  { 
    id: 1, name: 'Bella', species: 'Dog', breed: 'Basset Hound', age: '3 years', gender: 'Female', status: 'available', 
    image: dog1, 
    description: 'Bella is a gentle and playful Basset Hound who loves long walks and sniffing everything in sight.' 
  },
  { 
    id: 2, name: 'Milo', species: 'Cat', breed: 'Tortoiseshell', age: '2 years', gender: 'Male', status: 'available', 
    image: cat1, 
    description: 'Milo is a curious tortoiseshell cat who enjoys sunbathing and chasing laser pointers.' 
  },
  { 
    id: 3, name: 'Luna', species: 'Dog', breed: 'Yorkshire Terrier', age: '4 years', gender: 'Female', status: 'available', 
    image: dog2, 
    description: 'Luna is a spirited Yorkshire Terrier who loves being the center of attention.' 
  },
  { 
    id: 4, name: 'Oliver', species: 'Cat', breed: 'Silver Tabby', age: '5 years', gender: 'Male', status: 'available', 
    image: cat2, 
    description: 'Oliver is a calm and independent silver tabby cat.' 
  },
  { 
    id: 5, name: 'Max', species: 'Dog', breed: 'Corgi', age: '1 year', gender: 'Male', status: 'available', 
    image: dog3, 
    description: 'Max is a young Corgi full of energy and always ready for a game of fetch.' 
  },
  { 
    id: 6, name: 'Chloe', species: 'Cat', breed: 'Tabby', age: '3 years', gender: 'Female', status: 'available', 
    image: cat3, 
    description: 'Chloe is a vocal tabby who loves attention and will follow you everywhere.' 
  }
];

const AppContext = createContext()

export const useApp = () => useContext(AppContext)

export const AppProvider = ({ children }) => {
  const [member, setMember] = useState(() => {
    const saved = localStorage.getItem('petHeavenMember')
    return saved ? JSON.parse(saved) : null
  })

  const [pets, setPets] = useState(() => {
    const saved = localStorage.getItem('petHeavenPets')
    return saved ? JSON.parse(saved) : initialPets
  })

  useEffect(() => { localStorage.setItem('petHeavenPets', JSON.stringify(pets)) }, [pets])
  
  useEffect(() => {
    if (member) localStorage.setItem('petHeavenMember', JSON.stringify(member))
    else localStorage.removeItem('petHeavenMember')
  }, [member])

  const registerMember = (data) => setMember({ ...data, registeredAt: new Date().toISOString() }) 
  
  // ADDED THE MISSING LOGIN FUNCTION HERE
  const loginMember = (data) => setMember(data) 
  
  const logout = () => setMember(null)

  const markPetAdopted = (petId) => {
    setPets((prev) => prev.map((p) => (p.id === petId ? { ...p, status: 'adopted' } : p)))
  }

  const addPet = (pet) => {
    setPets((prev) => [{ ...pet, id: Date.now(), status: 'available' }, ...prev])
  }

  return (
    <AppContext.Provider value={{ member, pets, registerMember, loginMember, logout, markPetAdopted, addPet }}>
      {children}
    </AppContext.Provider>
  )
}