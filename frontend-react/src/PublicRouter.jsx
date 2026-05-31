import {useContext} from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate } from 'react-router-dom'

const PublicRouter = ({children}) => {
    const {islogedin} = useContext(AuthContext)
  return !islogedin ? (children):(<Navigate to="/dashbord"/>)
}

export default PublicRouter