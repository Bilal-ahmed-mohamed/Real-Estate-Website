import React, { useState } from 'react'
import { UseLogin } from '../hooks/UseLogin'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { UseAuthContext } from '../hooks/UseAuthContext'


const Login = () => {
  
  const [email, setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [error , setError] = useState('')
  const {dispatch} = UseAuthContext();
  // const {login , error , loading} = UseLogin();
  

  const handleSubmit =  async (e) => {
      
      e.preventDefault()
      axios.post('http://localhost:4000/api/user/Login' , {
        email : email,
        password : password
      })
      .then((res) => {
          console.log(res.data);
          localStorage.setItem('user' , JSON.stringify(res.data))
          dispatch({type : 'LOGIN' , payload : res.data})
      })
      .catch((error) => {
        console.log(error.res);
        if (error.response?.status === 405) {
          setError("please fill all the details"); //send errors if email exist in database
       }
       if (error.response?.status === 406) {
        setError("Email Is Not Valid"); //send errors if email exist in database
       }
       if (error.response?.status === 407) {
        setError("Incorrect password"); //send errors if email exist in database
       }
      })
  }
  return (
    <div className='login' >
      <form className='login-form' onSubmit={handleSubmit} >
      <span className='error-div' >
        {
          error && <div className='error' > {error} </div>
        }
        
        </span>
        <span className='login-form-input-email' >
          <label htmlFor="">Email</label>
          <input type="text" 
          value={email} 
          onChange = {
             (e) => {
               setEmail(e.target.value)
             }
          }
          />
        </span>
        <span className='login-form-input-password' >
          <label htmlFor="">Password</label>
          <input type="password"
          value={password}
          onChange = { (e) => {
            setPassword(e.target.value)
          }}
          />
        </span>
        <span className='login-form-button-login' >
          <p> <Link to="/Signup" > Create Account </Link></p>
          <button> Login </button>
        </span>
      </form>
    </div>
  )
}

export default Login
