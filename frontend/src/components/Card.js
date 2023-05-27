import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import UseFetch from '../hooks/UseFetch';
import { usePropertyContext } from '../hooks/usePropertyContext';


const Card = () => {


  const {property , dispatch} = usePropertyContext()
  // const {data , isLoading , error} = UseFetch('http://localhost:4000/api/realEstate')

   useEffect(() => {
     
    const fetchingProperty = async () => {
      const response = await fetch('https://real-estate-api-ukjv.onrender.com/api/realEstate')
      const json = await response.json()

      if (response.ok) {
        dispatch({type:'SET_PROPERTY' , payload:json})
      }  
    }

    fetchingProperty()
   })
      
  return (

    

    <div className='card'>


      {
        property && property.map((fetchData) => (

          <div className='card-section' key={fetchData._id}>

            <Link to={`/IndivualPropery/${fetchData._id}`}  className='card-img' >
               <img src={`http://localhost:4000/${fetchData.img}`} alt="myimage" />
           </Link> 


          <div className='card-details'>
          <h4  >{fetchData.title}</h4>
             <p className='card-details-price' >   KSh {fetchData.price}</p>
             <p>{fetchData.location}</p>
              <p>{fetchData.overview}</p>
          </div>
         </div>
          
          
          
        ))
       
      }
     
    
    </div>
  )
}

export default Card