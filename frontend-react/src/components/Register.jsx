import {useState} from 'react'

const Register = () => {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmpassword,setConfirmpassword] = useState("")

    const handleRegistration = (e)=>{
      e.preventDefault()
      const userData={
        username,email,password
      }
      console.log("user:",userData)
    }
    
  return (
    <>
    <div className='container mt-5'>
        <div className='row justify-content-center' >

          <div className="col-md-6 bg-light-dark p-5 rounded1">
            <h1 className='text-light text-center mb-3'>Create An Account</h1>
            <form action="" onSubmit={handleRegistration} >
              <input type="text" className='form-control mb-3' placeholder='Username' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
              <input type="email" className='form-control mb-3' placeholder='Enter Emailadress' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
              <input type="password" className='form-control mb-3' placeholder='Set a Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
              <input type="password" className='form-control mb-4' placeholder='Confirm the Password' value={confirmpassword} onChange={(e)=>{setConfirmpassword(e.target.value)}} />
              <input type="submit" value="Register" className='btn btn-outline-primary d-block mx-auto' />
              
              
            </form>
            
          </div>
        </div>

    </div>
    </>
  )
}

export default Register