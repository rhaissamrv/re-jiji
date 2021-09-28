import React,{ useState } from 'react'
import {AuthContext} from './auth-context';

const AuthProvider = ({ children }) => {
    let [userId, setUserId] = useState()
    let [isLoggedIn, setIsLoggedIn] = useState(false)
   
    const logIn = (loginUserId) => {
        setUserId(loginUserId)
        setIsLoggedIn(true)
        
    }

    const logOut = () => {
        setUserId(undefined)
        setIsLoggedIn(false)
        
    }

    let contextValue = {
        isLoggedIn,
        userId,
        logIn,
        logOut
    }

    return (
        <AuthContext.Provider value={ contextValue }>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;
