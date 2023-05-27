import {useState} from 'react'
import {UseAuthContext} from './UseAuthContext'
import axios from 'axios'

export const UseSignup = () => {
     
    const [error , setError] = useState(null)
    const [emptyFields , setEmptyFields] = useState([])
    const [isLoading , setIsLoading] = useState(null)
    const {dispatch , state} = UseAuthContext()

    const signup = async (userName,email,password) => {
        setIsLoading(true)

       

        
      
     try {
        const response = await fetch('https://real-estate-api-ukjv.onrender.com/api/user/Signup' , {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({userName,email,password})
        })
        const json = await response.json()
        if (response.ok) {           
            setIsLoading(false)
            setError(null)
            setEmptyFields([])
            // save the user to local storage 
            localStorage.setItem('user', JSON.stringify(json)) 
            // update the auth context 
            dispatch({type : 'LOGIN' , payload: json})           
        }
        
        // if (!response.ok) {
        //     setIsLoading(false)
        //     // setError(json.error)
        //     setEmptyFields(json.EmptyFields)
           
        // }

        
     } catch (error) {
        if (error.response?.status === 401) {
            setError("all fields must be filled"); //send errors if details not filled
        }
     }


       
         

     
    }
  return {signup , isLoading , error , emptyFields}
}

