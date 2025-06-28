import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div>
      <h1>Upss sitio no encontrado!</h1>
      <h3>Error 404 not found</h3>
      <button><Link to="/">Volver!</Link></button>
    </div>
  )
}

export default NotFound
