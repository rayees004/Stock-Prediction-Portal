import { useContext} from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate } from "react-router-dom"


const PrivateRoute = ({children}) => {
    const {islogedin} = useContext(AuthContext)
  return islogedin ? (children):(<Navigate to="/login" />)
}

export default PrivateRoute