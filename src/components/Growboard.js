
import {useEffect, useState} from 'react'
import axios from 'axios'
import './Growboard.css'; // your CSS styles
import Masonry from 'react-masonry-css';


function Growboard({ plants, onDelete}) {
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/plants/${id}/`)  // API endpoint for deleting a plant
      .then(() => {
        onDelete(id);  // Update state in the parent component to remove the plant from the list
      })
      .catch((err) => {
        console.error('Error deleting plant:', err);
      });
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="p-4">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {plants.map((plant) => (
          <div className="card" key={plant.id}>
            {plant.image && (
              <img src={plant.image} alt={plant.plant_name} className="card-img" />
            )}
            <div className="card-body">
              <h5>{plant.plant_name}</h5>
              <p>{plant.care}</p>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(plant.id)}  // Call handleDelete on button click
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default Growboard;