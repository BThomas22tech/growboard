import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddPlant({onAdd}) {
const navigate = useNavigate()
    const [formData, setFormData] = useState({
        plant_name: '',
        image: '',
        care: '',
    
    })

    const handleSubmit = (event)=>{
        event.preventDefault()
        axios.post('http://localhost:8000/api/plants/',formData)
        .then(response =>{

            onAdd(formData)
            navigate('/')
        })
        .catch(err => console.error(err))
        setFormData({plant_name:'',image:'',care:''})

    }
    const handleChange = (event) =>{
        setFormData({
        ...formData,
        [event.target.name]: event.target.value,
    })
    }
  return (
    <>
        <form onSubmit={handleSubmit} className='p-3'>
            <div className='mb-3'>
            <label className='form-label'>Plant Name</label>
            <input
            type="text"
            name="plant_name"
            className='form-control'
            value={formData.plant_name}
            onChange={handleChange}
            required
            />
            </div>
            <div className='mb-3'>

                <label className='form-label'>Image URL</label>
                <input 
                type="text"
                name="image"
                className='form-control'
                value={formData.image}
                onChange={handleChange}
                />
                <div className="mb-3">

                    <label className ="form-label">Care Instructions</label>
                    <textarea
                    name="care"
                    className='form-control'
                    value={formData.care}
                    onChange={handleChange}
                    />

                </div>
                <button type="submit" className="btn btn-success">Add Plant</button>
            </div>
        </form>
        
    </>
  )
}

export default AddPlant

