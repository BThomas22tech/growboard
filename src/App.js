import React, {useState, useEffect} from 'react'

import './App.css';
import {BrowserRouter as Router,Routes, Route,} from 'react-router-dom'
import Growboard from './components/Growboard.js';
import AddPlant from './components/AddPlant.js';
import Nav from './components/Nav.js'
import axios from 'axios';


function App() {
  const [plants,setPlants] = useState([])

  useEffect(()=>{
  axios.get('http://localhost:8000/api/plants/')
    .then(res=>setPlants(res.data))
    .catch(err=>console.error(err))
  },[])

const handleAddPlant = (newPlant)=>{
  setPlants(prev => [...prev, newPlant])
}

const handleDelete = (id) => {
  setPlants(plants.filter(plant => plant.id !== id));  // Remove the deleted plant from the list
};

  return (
    <>
    <Router>
    <Nav />
    <Routes>
      <Route path='/' element={<Growboard  plants={plants} onDelete={handleDelete}/>} />
      <Route path ='/add' element ={<AddPlant onAdd={handleAddPlant} />} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
