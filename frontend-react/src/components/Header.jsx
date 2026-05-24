import {useContext} from 'react'
import Button from './Button'
import { Link,useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'



const Header = () => {
  const {islogedin, setIsLogedIn} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem("accessToken");
    localStorage.removeItem('refreshToken');
    setIsLogedIn(false)
    navigate('/login')

  }
  return (
    <>
    <nav className='navbar container align-items-start'>
      <Link className='text-light navbar-brand' to="/">Stock Prediction Portal</Link>
      <div>
        {islogedin ? (<>
        <Button class="btn-primary" text="Dashbord" url="/dashbord"/>&nbsp;
        <button className='btn btn-outline-danger' onClick={handleLogout}>Logout</button>
        </>):(
          <>
          <Button class="btn-outline-primary" text="Login" url="/login"/>
          <Button class="btn-primary ms-2" text="Register" url="/register"/>
          </>
        )}
        
      </div>

    </nav>
    </>
  )
}

export default Header