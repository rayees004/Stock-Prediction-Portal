import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [errors, setErrors] = useState({});
  const [regsuccess,setRegSuccess] = useState(false)
  const [regdelay,setRegDelay] = useState(false)

  const [passwordview1, setPasswordview1] = useState({
    type: "password",
    icon: "bi-eye-slash",
  });
  const [passwordview2, setPasswordview2] = useState({
    type: "password",
    icon: "bi-eye-slash",
  });
  

  const handlepasswordview1 = () => {
    
    if (passwordview1.type == "password") {
      setPasswordview1({ type: "text", icon: "bi-eye" });
    } else {
      setPasswordview1({ type: "password", icon: "bi-eye-slash" });
    }
  };
  const handlepasswordview2 = () => {
    if (passwordview2.type == "password") {
      setPasswordview2({ type: "text", icon: "bi-eye" });
    } else {
      setPasswordview2({ type: "password", icon: "bi-eye-slash" });
    }
  };
  

  const handleRegistration = async (e) => {
    e.preventDefault();
    
    const userData = {
      username,
      email,
      password,
    };
    
    if (password == confirmpassword) {
      try {
        setRegDelay(true)
        const response = await axios.post(
          "http://127.0.0.1:8000/api/v1/register/",
          userData,
        );
        console.log("return response:", response.data);
        console.log("register Successfully");
        setRegSuccess(true)
        setErrors({});
      } catch (error) {
        setErrors(error.response.data);
        console.error("error:", error.response.data);
      }
      finally{
        setRegDelay(false)
      }
    } else {
      setErrors({ passworderror: "password does't Match" });
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light-dark p-5 rounded1">
            <h1 className="text-light text-center mb-3">Create An Account</h1>
            <form action="" onSubmit={handleRegistration}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
                <small>
                  {errors.username && (
                    <div className="text-danger">{errors.username}</div>
                  )}
                </small>
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Emailadress"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3 password-field">
                <input
                  type={passwordview2.type}
                  className="form-control "
                  placeholder="Set a Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <i
                  className={`bi ${passwordview2.icon} eyeicon `}
                  onClick={handlepasswordview2}
                ></i>
              </div>
              <div className="mb-3 password-field">
                <input
                  type={passwordview1.type}
                  className="form-control mb-4 "
                  placeholder="Confirm the Password"
                  value={confirmpassword}
                  onChange={(e) => {
                    setConfirmpassword(e.target.value);
                  }}
                />
                <i
                  className={`bi ${passwordview1.icon} eyeicon `}
                  onClick={handlepasswordview1}
                ></i>
              </div>
              <small>
                {errors.passworderror && (
                  <div className="text-danger">{errors.passworderror}</div>
                )}
              </small>
              <small>
                {errors.password && (
                  <div className="text-danger">{errors.password}</div>
                )}
              </small>
              {regsuccess && (<div className="alert alert-success">Registeration Success
              </div>)}
              
              {regdelay ? (<button type="submit" className="btn btn-outline-primary d-block mx-auto mt-3" disabled><FontAwesomeIcon icon={faSpinner} spin/> please wait...</button>):(<input
                type="submit"
                value="Register"
                className="btn btn-outline-primary d-block mx-auto mt-3"
              />)}
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
