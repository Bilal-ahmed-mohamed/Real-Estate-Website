import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const IndivualPropery = () => {

const {id} = useParams();
const[title, setTitle] = useState('')
const [price , setPrice] = useState('');
const [location , setLocation] = useState('');
const [units , setUnits] = useState('');
const [overview , setOverview] = useState('');
const [type , setType] = useState('');
const [img, setImg] = useState('');
const [features , setFeatures] = useState('');
const [purpose , setPurpose] = useState('');
 

  // const {data , isLoading , error} = UseFetch(`http://localhost:4000/api/realEstate/${id}/`)

  const getSingleProperty = async () => {
    const respon  = await axios.get(`http://localhost:4000/api/realEstate/${id}`)
    setTitle(respon.data.title)
    setPrice(respon.data.price)
    setLocation(respon.data.location)
    setUnits(respon.data.units)
    setOverview(respon.data.overview)
    setFeatures(respon.data.features)
    setImg(respon.data.img)
    setPurpose(respon.data.purpose)
    console.log(respon);
  }

  useEffect(() => {
    getSingleProperty();
  },[])


  return (
    

      <div className='indivualPage'>
        
      <main className='indivualpage-images-display-section'>
      <img src={`http://localhost:4000/${img}`} alt="imageoftheproperty"/>
      </main>

      <section className='indivualpage-about-area' >
         <div className='indivualpage-abt-property' >
            <span className='details-of-the-property'>            
              <h1>{title} in {location} </h1>
              <p>{units} Units </p>
               <h2> KSH {price}  </h2>
               <p>{purpose}</p>
               <p>{features}</p>
               <p>{overview}</p>               
            </span>
         </div>

         <span className='indivualpage-agent-contact-area' >
            
             
             <div className='property-banner'>
               <h1> You Are Contacting {title} Agent </h1>
             </div>
             
             <form className='form-to-contact-agent' action="">
               <div className='full-name-details' >
                  <label htmlFor="">Full Name</label>
                  <input type="text" name="" id=""  />
               </div>
               <div className='phone-number-details' >
                  <label htmlFor="">PhoneNumber</label>
                  <input type="number" name="" id="" />
               </div>
               <div className='email-details' >
                  <label htmlFor="">Email Address</label>
                  <input type="email" name="" id="" />
               </div>
               <div className='message-details' >
                  <label htmlFor="">Message</label>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
               </div>

               <div className='contact-btn' >
                <button>Contact Agent</button>
               </div>
             </form>
         </span>
      </section>
         
      </div>
      
    
  )
}

export default IndivualPropery