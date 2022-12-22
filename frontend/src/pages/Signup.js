import React, { useState } from 'react'
import {UseSignup} from '../hooks/UseSignup'
import { Link } from 'react-router-dom'
import { UseAuthContext } from '../hooks/UseAuthContext'
import axios from 'axios'
const Signup = () => {
  
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [Username , setUsername] = useState('')
  const [Error , setError] = useState('');
  const {dispatch} = UseAuthContext()
  const {signup , isLoading , error , emptyFields} = UseSignup();


  const handleSubmit = async (e) => {

    e.preventDefault();
    axios.post('http://localhost:4000/api/user/Signup' , {
      userName : Username,
      email:email,
      password:password
    })
    .then((response) => {
      console.log(response);
      localStorage.setItem('user' , JSON.stringify(response.data))
      dispatch({type : 'LOGIN' , payload : response.data})
      setUsername('')
      setEmail("")
      setPassword("")
    } )
    .catch((error) => {
      console.log(error.response);
      if (error.response?.status === 401) {
        setError("please fill all the details"); //send errors if email exist in database
     }
     if (error.response?.status === 403) {
      setError("password must be atleats 8 characters & start with a CAPS and have a special character"); //send errors if email exist in database
   }
   if (error.response?.status === 404) {
    setError("This email is already registered "); //send errors if email exist in database
 }

    })
   
    // e.preventDefault()
    // await signup(Username,email,password)
    // console.log(Username, email,password);
    // console.log(error);
    // setUsername("")
    // setEmail("")
    // setPassword("")
    
  }
  
  return (
     <div className='signup'>
      <form className='signup-form' onSubmit={handleSubmit} >
        <span className='error-div' >
        {
          Error && <div className='error' > {Error} </div>
        }
        
        </span>
       <span className='signup-form-name-input'>
        <label htmlFor="">Username</label>
        <input 
        value={Username}
        // className={emptyFields.includes('Username') ? 'error' : '' }
        type="text" 
         onChange = {(e) => {
          setUsername(e.target.value)
         }} 
         

         />
       </span>
       <span className='signup-form-email-input' >
        <label htmlFor="">Email</label>
        <input

         type="email"
          // placeholder='Enter A Valid Email' 
          value={email}
          onChange={(e) => {
           setEmail(e.target.value)
          }}
          // className={emptyFields.includes('email') ? 'error' : '' }

          />
       </span>
       <span className='signup-form-password-input' >
        <label htmlFor="">Password</label>
        <input

         type="password"
          // placeholder='Enter Your Password'
          value={password}
          onChange= {(e) => {
            setPassword(e.target.value)
          }}
          // className={emptyFields.includes('password') ? 'error' : '' }

          />
       </span>
       <span className='signup-form-signup-button'>
       <p> <Link to="/Login"> Already Registred </Link> </p>
        <button>Signup</button>
        
       </span>

      
      </form>
     </div>
  )
}

export default Signup
