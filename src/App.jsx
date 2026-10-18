import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import './App.css'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Admin from './pages/Admin'
import NavBar from './components/NavBar'
import Assistant from './pages/Assistant'

function App() {
  const [coffees, setCoffees] = useState([])
  

  function handleAddCoffee(newCoffee) {
    setCoffees([...coffees, newCoffee])
  }

  function handleUpdatedCoffee(updatedCoffee) {
    setCoffees(coffees.map((coffee) =>
      coffee.id === updatedCoffee.id ? updatedCoffee : coffee
    ))
  }
  useEffect(() => {
    fetchCoffees()
  },[])

  function fetchCoffees() {
    fetch('http://localhost:3001/coffees')
      .then(r => r.json())
      .then((coffee) => setCoffees(coffee))
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop coffees={coffees} handleUpdatedCoffee={handleUpdatedCoffee}/>} />
        <Route path="/admin" element={<Admin handleAddCoffee={handleAddCoffee}/>} />
        <Route path='/assistant' element={<Assistant coffees={coffees} />}/>
      </Routes>
    </>
  )
}

export default App
