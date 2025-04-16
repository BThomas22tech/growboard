import React from 'react'
import {useState} from 'react'

function 

AddPlant({onAdd}) {

    const [formData, setFormData] = useState({
        plant_name: '',
        image: '',
        care: '',
    
    })
    const handlechange = (event) =>{
        setFormData({
        ...formData,
        [event.target.name]: event.target.value,
    })
    }
  return (
    <div>
        <form action="">


        </form>
    </div>
  )
}

export default 

