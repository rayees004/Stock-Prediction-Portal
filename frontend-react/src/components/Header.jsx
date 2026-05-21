import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <>
    <nav className='navbar container align-items-start'>
      <Link className='text-light navbar-brand' to="/">Stock Prediction Portal</Link>
      <div>
        <Button class="btn-outline-primary" text="Login" url="/login"/>
        <Button class="btn-primary ms-2" text="Register" url="/register"/>
      </div>

    </nav>
    </>
  )
}

export default Header