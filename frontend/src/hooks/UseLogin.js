import React, { useState } from 'react'
import { UseAuthContext } from './UseAuthContext'


export const UseLogin = () => {

const {dispatch} = UseAuthContext();
const [error , setError] = useState(null)
const [loading , setIsLoading] = useState(null)

const login = async (email,password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch( 'http://localhost:4000/api/user/Login' , {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({email,password})

    })
    const json = await response.json()

    if (!response.ok) {
        setError(json.error)
        setIsLoading(false)
    }
    if (response.ok) {

        // save to the local stroage
        localStorage.setItem('user' , JSON.stringify(json))

        // update the auth context
        dispatch({type:'LOGIN' , payload : json})

        setIsLoading(false)
    }

}

return {login , error , loading}
    
 
}
