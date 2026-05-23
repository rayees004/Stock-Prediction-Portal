import {useState} from 'react'

  

const Login = () => {
  const [passwordview1,setPasswordview1]=useState({type:"password",icon:"bi-eye-slash"})
const handlepasswordview1 =()=>{
      if(passwordview1.type == "password"){
        setPasswordview1({type:"text",icon:"bi-eye"})
      }
      else{
        setPasswordview1({type:"password",icon:"bi-eye-slash"})

      }

  }
  

  return (
    <>
    <div className='container text-light'> 
        <div className="row justify-content-center ">
          <div className="col-md-6 bg-light-dark p-5 rounded1">
            <h1 className='text-center mb-3'>Login</h1>
            <form action="">
              <input type="text" className='form-control mb-3' name='username' placeholder='Username:'/>
              <div className='mb-3 password-field'>
                
              <input type={passwordview1.type} className='form-control ' name="password" id="" placeholder='Password:' />
              <i className={`bi ${passwordview1.icon} eyeicon `} onClick={handlepasswordview1}></i>
              </div>
              <input type="submit" value="Login" className='btn btn-outline-primary d-block m-auto' />
              
            </form>
          </div>
        </div>

    </div>
    </>
  )
}

export default Login