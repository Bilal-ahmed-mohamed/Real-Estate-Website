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
      const response = await fetch('http://localhost:4000/api/realEstate')
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

          <Link to={`/IndivualPropery/${fetchData._id}`} className='card-section' key={fetchData._id}>

            <div className='card-img' >
               <img src={`http://localhost:4000/${fetchData.img}`} alt="myimage" />
           </div> 


          <div className='card-details'>
          <h4  >{fetchData.title}</h4>
             <p className='card-details-price' >   KSh {fetchData.price}</p>
             <p>{fetchData.location}</p>
              <p>{fetchData.overview}</p>
          </div>
         </Link>
          
          
          
        ))
       
      }
     
    
    </div>
  )
}

export default Card