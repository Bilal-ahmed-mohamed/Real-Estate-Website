import React, { useState } from 'react'
import { usePropertyContext } from '../hooks/usePropertyContext';

const AddProperty = () => {
  
    const {dispatch} = usePropertyContext()
    const [title , setTitle] = useState('');
    const [price , setPrice] = useState('');
    const [location , setLocation] = useState('');
    const [units , setUnits] = useState('');
    const [overview , setOverview] = useState('');
    const [type , setType] = useState('');
    const [purpose , setPurpose] = useState('')
    const [bedrooms , setBedrooms] = useState('')
    const [features , setFeatures] = useState('')
    const [amenities , setAmenities] = useState('')
    const [img , setImg] = useState('');
    const [error , setError] = useState(null)
    const [emptyFields , setEmptyFields] = useState([])
    
 
    const addProperty = async (e) => {
        e.preventDefault()
        
        const formdata = new FormData()

        formdata.append("title" , title)
        formdata.append("price" , price)
        formdata.append("location" , location)
        formdata.append("type" , type)
        formdata.append("purpose" , purpose)
        formdata.append("bedrooms" , bedrooms)
        formdata.append("features" , features)
        formdata.append("amenities" , amenities)
        formdata.append("overview" , overview)
        formdata.append("units" , units)
        formdata.append("img" , img)


       const response = await fetch('https://real-estate-api-ukjv.onrender.com/api/realEstate' , {
            method: 'POST',
            body: formdata
        })

        const json = await response.json()
        if (response.ok) {
            dispatch({type:'CREATE_PROPERTY' , payload:json})
            console.log(json);
            console.log('new property added');
            setTitle('')
            setPrice('')
            setLocation('')
            setUnits('')
            setOverview('')
            setType('')
            setFeatures('')
            setAmenities('')
            setImg('')
            setError(null)
            setEmptyFields([])
        }
        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        // .then((res) => res.json())
        // .then((resBody) => {
        //     console.log(resBody)
        // })
    }


    
  return (
    <div className='form-page'>

       
        <form className='form-card' onSubmit={addProperty} encType= 'multipart/form-data' >
            <div className='form-div1'>
                <span className='form-div1-one' >
                    <label htmlFor="">Enter The Title Of The Property</label>
                    <input 
                        onChange={(e) => {
                        setTitle(e.target.value)
                        }} 
                        type="text"                         
                        value={title}
                        // className={emptyFields.includes('title') ? 'error' : '' }
                     />
                </span>
                <span className='form-div1-two' >
                <label htmlFor="">Enter The Price Of The Property</label>
                    <input 
                        onChange={(e) => {
                        setPrice(e.target.value)
                        }} 
                        type="text" 
                        value={price}
                        // className={emptyFields.includes('price') ? 'error' : '' }
                     />
                </span>
            </div>
            <div className='form-div2'>
                <span className='form-div2-one' >
                <label htmlFor="">Enter The Location Of The Property</label>
                    <input 
                        onChange={(e) => {
                        setLocation(e.target.value)
                        }}
                        type="text"                      
                        value={location}
                        // className={emptyFields.includes('location') ? 'error' : '' }
                     />
                </span>
                <span className='form-div2-two' >
                <label htmlFor="">Select The Type Of The Property</label>
                <select  name="" value={type} id=""  onChange={(e) => { setType(e.target.value) }}  >
                  <option value="Select....">Select....</option>
                  <option value="House">House</option> 
                  <option value="Apartments">Apartments</option>
                </select>
                {/* <input 
                    onChange={(e) => {
                    setType(e.target.value)
                    }}
                    type="text"
                    value={type}
                    // className={emptyFields.includes('type') ? 'error' : '' }
                  /> */}

                
                </span>
            </div>
            <div className='form-div3'>
                <span className='form-div3-one'>
                <label htmlFor="">Select The Purpose Of The Property</label>
                 <select name="" value={purpose} id="" onChange={(e) => {setPurpose(e.target.value) }} > 
                 <option value="Select....">Select....</option>
                  <option value="For Sale">For Sale</option>
                  <option value="For Rent">For Rent</option>
                </select>
                
                </span>
                <span className='form-div3-two'>
                <label htmlFor="">Select The No: Of The Bedrooms</label>
                 <select name="" value={bedrooms} id="" onChange={(e) => { setBedrooms(e.target.value) }} >
                 <option value="Select....">Select....</option>
                  <option value="1 Bedrooms(s)"> 1 Bedrooms(s)</option>
                  <option value="2 Bedrooms(s)"> 2 Bedrooms(s)</option>
                  <option value="3 Bedrooms(s)"> 3 Bedrooms(s)</option>
                  <option value="4 Bedrooms(s)"> 4 Bedrooms(s)</option>
                  <option value="5 Bedrooms(s)"> 5 Bedrooms(s)</option>
                  <option value="6 Bedrooms(s)"> 6 Bedrooms(s)</option>
                  <option value="7 Bedrooms(s)"> 7 Bedrooms(s)</option>
                  <option value="8 Bedrooms(s)"> 8 Bedrooms(s)</option>
                  <option value="9 Bedrooms(s)"> 9 Bedrooms(s)</option>
                  <option value="10 - more Bedrooms(s)">10 - more Bedrooms(s)</option>
                </select>
                                </span>
                
            </div>

            <div className='form-div4' >
            <span className='form-div4-one'>
            <label htmlFor="">Enter The Features Of The Property</label>
                {/* <input 
                    onChange={(e) => {
                    setFeatures(e.target.value)
                    }}
                    type="text"
                    value={features}
                    // className={emptyFields.includes('features') ? 'error' : '' }
                  /> */}
                  <textarea
                  onChange={(e) => {
                    setFeatures(e.target.value)
                    }}
                    type="text"
                    value={features}
                     rows="4" cols="50"></textarea>
                </span>
                <span className='form-div4-two'>
                <label htmlFor="">Enter The Amenities Of The Property</label>
                <input 
                    onChange={(e) => {
                    setAmenities(e.target.value)
                    }}
                    type="text"
                    value={amenities}
                    // className={emptyFields.includes('amenities') ? 'error' : '' }
                  />
                </span>
            </div>
            <div className='form-div6' >
            <span className='form-div6-one' >
                 <label htmlFor="">Enter The Overview Of The Property</label>
                <input 
                    onChange={(e) => {
                        setOverview(e.target.value)
                    }}
                    type="text" 
                    value={overview}
                    // className={emptyFields.includes('overview') ? 'error' : '' }
                 />
                 </span>
                 <span className='form-div6-two' >
                <label htmlFor="">Enter The Units Of The Property</label>
                <input 
                    onChange={(e) => {
                    setUnits(e.target.value)
                    }}
                    type="text"
                    value={units}
                    // className={emptyFields.includes('units') ? 'error' : '' }
                  />
                </span>
            </div>
            <div className='form-div5'>
                <span>
                <input
                 onChange={(e) => {
                     setImg(e.target.files[0])
                 }}
                 type="file"
                  placeholder='Enter The Image/s Of The Property' 
                  name='img'
                //   className={emptyFields.includes('img') ? 'error' : '' } 
                  />
                </span>
                 
                
            </div>
            
            <div className='form-button'>
              <span>
                <button onSubmit={addProperty} type='submit'> Add Listing </button>
              </span>
            </div>
            {  error && <div className='error'>{error}</div> }
        </form>
    </div>
  )
}

export default AddProperty