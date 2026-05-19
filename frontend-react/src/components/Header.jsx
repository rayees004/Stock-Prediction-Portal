import React from 'react'

const Header = () => {
  return (
    <>
    <nav className='navbar container align-items-start'>
      <p className='text-light navbar-brand'>Stock Prediction Portal</p>
      <div>
        <button className='btn btn-outline-primary'>Login</button>
        <button className='btn btn-primary ms-2'>Register</button>
      </div>

    </nav>
    </>
  )
}

export default Header