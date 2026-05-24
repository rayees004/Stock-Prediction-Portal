import {useContext, useState} from 'react'
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthProvider';

const Login = () => {
  
  const [passwordview1,setPasswordview1]=useState({type:"password",icon:"bi-eye-slash"})
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [loginLoader,setLoginLoader]=useState(false)
  const navigate = useNavigate()
  const [error,setError] = useState(false)
  const {islogedin, setIsLogedIn} = useContext(AuthContext)
  const handlepasswordview1 =()=>{
      if(passwordview1.type == "password"){
        setPasswordview1({type:"text",icon:"bi-eye"})
      }
      else{
        setPasswordview1({type:"password",icon:"bi-eye-slash"})

      }

  }
  const login = async (e)=>{
    e.preventDefault();
    const userData={
      username, password
    }
    try{
      setError(false)
      setLoginLoader(true)
      const response=await axios.post("http://127.0.0.1:8000/api/v1/token/",userData)
      localStorage.setItem("accessToken", response.data.access)
      localStorage.setItem("refreshToken", response.data.refresh)
      console.log("login successful")
      setIsLogedIn(true)
      navigate('/')
    }catch(error){
      setError(true)
    }finally{
      setLoginLoader(false)
    }
  }
  

  return (
    <>
    <div className='container text-light'> 
        <div className="row justify-content-center ">
          <div className="col-md-6 bg-light-dark p-5 rounded1">
            <h1 className='text-center mb-3'>Login</h1>
            <form action="" onSubmit={login}>
              <input type="text" className='form-control mb-3' name='username' placeholder='Username:' value={username} onChange={(e)=>(setUsername(e.target.value))} />
              <div className='mb-3 password-field'>
                
              <input type={passwordview1.type} className='form-control ' name="password" id="" placeholder='Password:' value={password} onChange={(e)=>(setPassword(e.target.value))} />
              <i className={`bi ${passwordview1.icon} eyeicon `} onClick={handlepasswordview1}></i>
              </div>
              {error && <div className='text-danger'>invalid credentials</div>}
              {loginLoader ?(<button type="submit" className='btn btn-outline-primary d-block m-auto' ><FontAwesomeIcon icon={faSpinner} spin/> Login in..</button>): (<input type="submit" value="Login" className='btn btn-outline-primary d-block m-auto' />)}
              
              
            </form>
          </div>
        </div>

    </div>
    </>
  )
}

export default Login