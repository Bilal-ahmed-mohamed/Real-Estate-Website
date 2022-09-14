import React from 'react'



const Hero = () => {
  return (
    <div> 


        <section className='hero'>
           
           <div className='hero-search-area'>
            
            <span className='hero-search-area-category'>
                
                <div>
                    
                    <select placeholder='Category' name="" id="">
                        <option value="">Houses</option>
                        <option value="">Apartments</option>
                        <option value="">Land</option>                     
                    </select>
                </div>
            </span>
            <span className='hero-search-area-search'>
                <input type="search" placeholder='Enter The Location' />
            </span>
            <span className='hero-search-area-price'>
                <input type="text" name="" id="" placeholder='KES' />
            </span>
            <span className='hero-search-area-addBtn'>
                <button>Add</button>
            </span>
           </div>

        </section>
      
    </div>
  )
}

export default Hero
