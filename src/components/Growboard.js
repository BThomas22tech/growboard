
import React from 'react'

function Growboard() {
  return (
    <div>
    <div className="garden-board card mx-3 mt-3" style={{ width: '18rem' }}>
      <img
        style={{ width: '200px' }}
        className="card-img-top"
        src="https://media.istockphoto.com/id/1450576005/photo/tomato-isolated-tomato-on-white-background-perfect-retouched-tomatoe-side-view-with-clipping.jpg?s=612x612&w=0&k=20&c=lkQa_rpaKpc-ELRRGobYVJH-eMJ0ew9BckCqavkSTA0="
        alt="Tomato"
      />
      <div className="card-body">
        <h3 className="card-title">Tomato</h3>
        <p className="card-text">Full sun, water daily</p>
      </div>
    </div>
  </div>
  )
}

export default Growboard