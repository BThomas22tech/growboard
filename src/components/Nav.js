import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div >
    <ul className="d-flex justify-content-center">
    
    <li className="nav-item me-3">
      <Link className="nav-link" to="/">Home</Link>
      </li>
    <li className="nav-item me-3">
      <Link className="nav-link" to="/add">Add Plant</Link>
      </li>

    </ul>
    </div>
  )
}

export default Nav