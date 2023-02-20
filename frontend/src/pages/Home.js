import React, {useState} from 'react'
import Card from '../components/Card'



const  Home = ()  => {


  const [categoryFilter , setCategoryFilter] = useState("");
    const [locationFilter , setLocationFilter] = useState("");
    const [typeFilter , setTypeFilter] = useState("");

    const filter = (e) => {
          e.preventDefault();
          console.log(categoryFilter);
          console.log(locationFilter);
          console.log(typeFilter);
    }

  return (
        <div> 
            <section className='hero'>
           
           <form onSubmit={filter}  className='hero-search-area'>
            
            <span className='hero-search-area-category'>
                
                <div>
                    
                    <select placeholder='Category' value={categoryFilter} name="" id="" onChange={(e) => {setCategoryFilter(e.target.value)}} >
                        <option value="Select One">Select One</option>
                        <option value="Houses">Houses</option>
                        <option value="Apartments">Apartments</option>                     
                    </select>
                </div>
            </span>
            <span className='hero-search-area-search'>
                <input type="search"
                 value={locationFilter}
                  placeholder='Enter The Location' 
                  onChange={(e) => {
                    setLocationFilter(e.target.value)
                  }}
                  />
            </span>
            <span className='hero-search-area-price'>
            <select placeholder='Type' value={typeFilter} onChange={(e) => {setTypeFilter(e.target.value)}}  name="" id="">
                        <option value="Select One">Select One</option>
                        <option value="For Sale">For Sale</option>
                        <option value="For Rent">For Rent</option>                    
                    </select>
            </span>
            <span className='hero-search-area-addBtn'>
                <button onSubmit={filter} >Search</button>
            </span>
           </form>

        </section>
        
            <Card />

        </div>
  )




  
}

export default Home