import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <>
    <nav className='navbar container align-items-start'>
      <p className='text-light navbar-brand'>Stock Prediction Portal</p>
      <div>
        <Button class="btn-outline-primary" text="Login"/>
        <Button class="btn-primary ms-2" text="Register"/>
      </div>

    </nav>
    </>
  )
}

export default Header