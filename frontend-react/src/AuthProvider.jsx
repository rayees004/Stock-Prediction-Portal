import {useState,useContext,createContext} from 'react'



const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [islogedin, setIsLogedIn] = useState(
        !!localStorage.getItem("accessToken")
    )

  return (
    <AuthContext.Provider value={{islogedin,setIsLogedIn}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export {AuthContext}