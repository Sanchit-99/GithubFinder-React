import React from 'react'
import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'

function NotFound() {
  return (
    <div class="hero">
    <div class="text-center hero-content">
      <div class="max-w-lg">
        <h1 class="text-7xl font-bold">Oops!</h1>
        <h1 class="text-5xl font-bold mb-10">404 - Page not found</h1>
        <Link class="btn btn-primary" to={'/'}>
          <FaHome className='mx-2' size={20}/>
          Get Back Home</Link>
      </div>
    </div>
  </div>
  )
}

export default NotFound